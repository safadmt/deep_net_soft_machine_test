import { MenuItem } from '../types';

interface MenuData {
  food: MenuItem[];
  drinks: MenuItem[];
  brunch: MenuItem[];
}

export const menuData: MenuData = {
  food: [
    {
      name: "SEAFOOD PLATTER",
      description: "Fresh assortment of oysters, shrimp, and lobster served with cocktail sauce and lemon",
      price: "$42"
    },
    {
      name: "FILET MIGNON",
      description: "8oz prime cut, served with truffle mashed potatoes and seasonal vegetables",
      price: "$38"
    },
    {
      name: "VEGAN BUDDHA BOWL",
      description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
      price: "$22"
    }
  ],
  drinks: [
    {
      name: "SIGNATURE OLD FASHIONED",
      description: "Bourbon, house-made bitters, orange peel, and Luxardo cherry",
      price: "$16"
    },
    {
      name: "CUCUMBER MARTINI",
      description: "Gin, fresh cucumber juice, lime, and St-Germain",
      price: "$14"
    },
    {
      name: "SMOKY MARGARITA",
      description: "Mezcal, lime juice, agave nectar, and tajin rim",
      price: "$15"
    }
  ],
  brunch: [
    {
      name: "CINNAMON TOAST CRUNCH",
      description: "Cinnamon whisky, rumchata, cream and cinnamon dusted crunch, cinnamon, egg white, cream",
      price: "$16"
    },
    {
      name: "MOET SPRITZ",
      description: "Moet, St-Germain, lemonade, lemon, fresh mint syrup",
      price: "$20"
    },
    {
      name: "BAR 42 MARY",
      description: "Tito's, tomato juice, worcestershire, celery salt, black pepper, cocktail, habanero",
      price: "$14"
    }
  ]
};