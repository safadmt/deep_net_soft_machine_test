export type MenuItem = {
    id?: string;
    name: string;
    description: string;
    price: number;
    menuId: string;
    createdAt?: Date;  // ISO date string
    updatedAt?: Date;  // ISO date string
  };
  
  export type Menu = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date;  // ISO date string
    updatedAt?: Date;  // ISO date string
    items?: MenuItem[] // Array of menu items
  };
  