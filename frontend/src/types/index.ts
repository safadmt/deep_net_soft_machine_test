export interface MenuItem {
    name: string;
    description: string;
    price: string;
  }
  
export type MenuTab = 'food' | 'drinks' | 'brunch';

export interface Post {
    id: number;
    title: string;
  }
  
  export interface DataState {
    menus: Post[];
    menu: any,
    loading: boolean;
    error: string | null;
  }
  