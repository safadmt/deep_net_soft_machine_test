import React from 'react';

const FooterCopyright: React.FC = () => {
  return (
    <div className="text-center text-xs text-gray-500 mt-6">
      <p>© 2023 Deepnetsoft Institute, All rights reserved.</p>
      <div className="mt-2">
        <span className="mx-2">Terms & Conditions</span>
        <span className="mx-2">Privacy Policy</span>
      </div>
    </div>
  );
};

export default FooterCopyright;