
export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular: boolean;
  vegan: boolean;
  ingredients: string[];
  allergens?: string[];
  prepTime: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  dishes: Dish[];
}

export const menuData: MenuCategory[] = [
  {
    id: "dosas",
    name: "Dosas",
    description: "Crispy, savory crepes made from fermented rice and lentil batter.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
    dishes: [
      {
        id: "plain-dosa",
        name: "Plain Dosa",
        description: "Traditional crispy crepe served with sambar and chutney.",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f24a5?q=80&w=1964&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt"],
        prepTime: "5 mins"
      },
      {
        id: "masala-dosa",
        name: "Masala Dosa",
        description: "Crispy dosa filled with spiced potato filling, served with sambar and chutney.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Rice", "Urad Dal", "Potatoes", "Onions", "Mustard Seeds", "Turmeric", "Green Chilies"],
        prepTime: "8 mins"
      },
      {
        id: "mysore-masala-dosa",
        name: "Mysore Masala Dosa",
        description: "Dosa spread with spicy red chutney and filled with potato masala.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Rice", "Urad Dal", "Potatoes", "Red Chili Paste", "Garlic", "Onions"],
        prepTime: "10 mins"
      },
      {
        id: "rava-dosa",
        name: "Rava Dosa",
        description: "Crispy, lacy crepe made from semolina, rice flour, and spices.",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1626254293202-5b5b5f0b4332?q=80&w=1936&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Semolina", "Rice Flour", "Cumin Seeds", "Green Chilies", "Ginger", "Coriander"],
        prepTime: "6 mins"
      }
    ]
  },
  {
    id: "idlis-vadas",
    name: "Idlis & Vadas",
    description: "Steamed rice cakes and crispy lentil donuts.",
    image: "https://images.unsplash.com/photo-1589301769831-7dcef918a632?q=80&w=2071&auto=format&fit=crop",
    dishes: [
      {
        id: "idli",
        name: "Idli",
        description: "Soft, steamed rice cakes served with sambar and chutney.",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1637143912271-6884f169dce1?q=80&w=2070&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt"],
        prepTime: "4 mins"
      },
      {
        id: "medu-vada",
        name: "Medu Vada",
        description: "Crispy, savory lentil donuts served with sambar and coconut chutney.",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1627833250047-9d171b44291a?q=80&w=2070&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Urad Dal", "Green Chilies", "Ginger", "Curry Leaves", "Black Pepper"],
        prepTime: "7 mins"
      },
      {
        id: "sambar-vada",
        name: "Sambar Vada",
        description: "Medu vada soaked in hot, tangy sambar.",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc037?q=80&w=1964&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Urad Dal", "Toor Dal", "Tamarind", "Mixed Vegetables", "Sambar Powder"],
        prepTime: "7 mins"
      },
      {
        id: "idli-vada-combo",
        name: "Idli Vada Combo",
        description: "Two idlis and one vada served with sambar and chutney.",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1650765651281-2f3178ff15aa?q=80&w=1978&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Curry Leaves", "Green Chilies"],
        prepTime: "10 mins"
      }
    ]
  },
  {
    id: "rice-varieties",
    name: "Rice Varieties",
    description: "Flavorful rice dishes from South India.",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=2080&auto=format&fit=crop",
    dishes: [
      {
        id: "coconut-rice",
        name: "Coconut Rice",
        description: "Fragrant rice cooked with coconut, mustard seeds, and curry leaves.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Basmati Rice", "Fresh Coconut", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Cashews"],
        prepTime: "12 mins"
      },
      {
        id: "lemon-rice",
        name: "Lemon Rice",
        description: "Tangy rice with lemon, turmeric, and peanuts.",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2075&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Basmati Rice", "Lemon Juice", "Turmeric", "Mustard Seeds", "Peanuts", "Curry Leaves"],
        prepTime: "10 mins"
      },
      {
        id: "curd-rice",
        name: "Curd Rice",
        description: "Cooling yogurt rice with pomegranate seeds and tempering.",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1571805341302-f857308690e3?q=80&w=2080&auto=format&fit=crop",
        popular: false,
        vegan: false,
        ingredients: ["Rice", "Yogurt", "Milk", "Green Chilies", "Ginger", "Pomegranate Seeds", "Curry Leaves"],
        prepTime: "8 mins"
      },
      {
        id: "tamarind-rice",
        name: "Tamarind Rice",
        description: "Tangy rice with tamarind paste and a special spice blend.",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Rice", "Tamarind Paste", "Peanuts", "Channa Dal", "Mustard Seeds", "Sesame Oil"],
        prepTime: "12 mins"
      }
    ]
  },
  {
    id: "curries",
    name: "Curries & Sides",
    description: "Flavorful accompaniments to complete your meal.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
    dishes: [
      {
        id: "sambar",
        name: "Sambar",
        description: "Tangy lentil stew with vegetables and tamarind.",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1582401656496-9d75f95f9018?q=80&w=1935&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Toor Dal", "Mixed Vegetables", "Tamarind", "Sambar Powder", "Mustard Seeds"],
        prepTime: "5 mins"
      },
      {
        id: "rasam",
        name: "Rasam",
        description: "Spicy and tangy tamarind soup.",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1518452914686-ac4316c93b6d?q=80&w=1974&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Tamarind", "Tomatoes", "Black Pepper", "Cumin", "Garlic", "Curry Leaves"],
        prepTime: "5 mins"
      },
      {
        id: "coconut-chutney",
        name: "Coconut Chutney",
        description: "Fresh coconut ground with green chilies and tempered with spices.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1600198773645-670d51070b93?q=80&w=2070&auto=format&fit=crop",
        popular: true,
        vegan: true,
        ingredients: ["Fresh Coconut", "Green Chilies", "Ginger", "Mustard Seeds", "Curry Leaves", "Urad Dal"],
        prepTime: "2 mins"
      },
      {
        id: "tomato-chutney",
        name: "Tomato Chutney",
        description: "Spicy tomato chutney with garlic and red chilies.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1998&auto=format&fit=crop",
        popular: false,
        vegan: true,
        ingredients: ["Tomatoes", "Red Chilies", "Garlic", "Tamarind", "Mustard Seeds", "Urad Dal"],
        prepTime: "2 mins"
      }
    ]
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Traditional South Indian drinks.",
    image: "https://images.unsplash.com/photo-1544252890-c0ca0dea7fb2?q=80&w=1974&auto=format&fit=crop",
    dishes: [
      {
        id: "filter-coffee",
        name: "Filter Coffee",
        description: "Traditional South Indian coffee with chicory.",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?q=80&w=2070&auto=format&fit=crop",
        popular: true,
        vegan: false,
        ingredients: ["Coffee Beans", "Chicory", "Milk"],
        prepTime: "3 mins"
      },
      {
        id: "masala-chai",
        name: "Masala Chai",
        description: "Spiced tea with ginger, cardamom, and other spices.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36?q=80&w=1974&auto=format&fit=crop",
        popular: false,
        vegan: false,
        ingredients: ["Tea Leaves", "Milk", "Ginger", "Cardamom", "Cinnamon", "Cloves"],
        prepTime: "4 mins"
      },
      {
        id: "buttermilk",
        name: "Spiced Buttermilk",
        description: "Refreshing yogurt drink with spices and herbs.",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1626107861082-cfbb2a5f0db6?q=80&w=1974&auto=format&fit=crop",
        popular: false,
        vegan: false,
        ingredients: ["Yogurt", "Water", "Cumin", "Ginger", "Green Chilies", "Coriander", "Curry Leaves"],
        prepTime: "2 mins"
      },
      {
        id: "mango-lassi",
        name: "Mango Lassi",
        description: "Sweet yogurt drink with mango pulp.",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1553787499-6f9133242796?q=80&w=1974&auto=format&fit=crop",
        popular: true,
        vegan: false,
        ingredients: ["Yogurt", "Mango Pulp", "Sugar", "Cardamom"],
        prepTime: "3 mins"
      }
    ]
  }
];

export const getDishesByCategory = (categoryId: string): Dish[] => {
  const category = menuData.find(cat => cat.id === categoryId);
  return category ? category.dishes : [];
};

export const getAllDishes = (): Dish[] => {
  return menuData.flatMap(category => category.dishes);
};

export const getDishById = (id: string): Dish | undefined => {
  return getAllDishes().find(dish => dish.id === id);
};

export const getPopularDishes = (): Dish[] => {
  return getAllDishes().filter(dish => dish.popular);
};
