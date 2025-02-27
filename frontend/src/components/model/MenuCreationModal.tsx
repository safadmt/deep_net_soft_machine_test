import React, { useState } from 'react';
import { X } from 'lucide-react';
import { createMenu } from '../../services/api';

import { useMenuContext } from '../../context/MenuContext';
import { AxiosError } from 'axios';

interface MenuCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuCreationModal: React.FC<MenuCreationModalProps> = ({ isOpen, onClose }) => {
  const [menuName, setMenuName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const {state, dispatch} = useMenuContext()
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!menuName.trim()) {
      setError('Menu name is required');
      return;
    }
    if(!description.trim()) {
        setError("Description is required")
        return;
    }
    
    try {
      setIsSubmitting(true);
      setError('');
      
      const response = await createMenu({
        name: menuName.trim(),
        description: description.trim()
      });
      console.log(response)
      // Reset form and close modal on success
      setMenuName('');
      setDescription('');
      dispatch({type: "NEW_ITEM_ADDED", payload: true})
      onClose();
    } catch (err) {
      if(err instanceof AxiosError) {
        setError(err.response?.data.error)
        return
      }
      setError('Failed to create menu. Please try again.');
      console.error('Error creating menu:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Create New Menu</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="menuName" className="block text-sm font-medium text-gray-700 mb-1">
              Menu Name*
            </label>
            <input
              id="menuName"
              type="text"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Drinks, Snacks, Desserts"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32"
              placeholder="Describe what's included in this menu category..."
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Menu'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuCreationModal;