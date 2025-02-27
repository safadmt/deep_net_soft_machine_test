import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Menu, IMenuItem } from "../services/api";

// Define state shape
interface MenuState {
  menus: Menu[];
  menu: Menu | null;
  menuItems: IMenuItem[];
  newitem : boolean,
}

// Define action types
type MenuAction =
  | { type: "SET_MENUS"; payload: Menu[] }
  | { type: "SET_MENU"; payload: Menu }
  | { type: "SET_MENU_ITEMS"; payload: IMenuItem[] }
  | { type : "NEW_ITEM_ADDED", payload: boolean}

// Reducer function
const menuReducer = (state: MenuState, action: MenuAction): MenuState => {
  switch (action.type) {
    case "SET_MENUS":
      return { ...state, menus: action.payload };
    case "SET_MENU":
      return { ...state, menu: action.payload };
    case "SET_MENU_ITEMS":
      return { ...state, menuItems: action.payload };
    case "NEW_ITEM_ADDED":
        return { ...state, newitem: action.payload };
    default:
      return state;
  }
};

// Create context
const MenuContext = createContext<
  { state: MenuState; dispatch: React.Dispatch<MenuAction> } | undefined
>(undefined);

// Provider component
export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, {
    menus: [],
    menu: null,
    menuItems: [],
    newitem : false,
  });

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook to use the context
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};
