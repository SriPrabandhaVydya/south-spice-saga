
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuData, Dish, getPopularDishes } from '../data/menu';
import Header from '../components/Header';
import MenuCategory from '../components/MenuCategory';
import DishModal from '../components/DishModal';
import Cart from '../components/Cart';
import { Utensils, TrendingUp } from 'lucide-react';

interface CartItem {
  dish: Dish;
  quantity: number;
}

const Index = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [popularDishes, setPopularDishes] = useState<Dish[]>([]);
  
  useEffect(() => {
    setPopularDishes(getPopularDishes());
  }, []);

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (dish: Dish) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.dish.id === dish.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.dish.id === dish.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { dish, quantity: 1 }];
      }
    });
    
    setIsModalOpen(false);
    setIsCartOpen(true);
  };

  const updateItemQuantity = (dishId: string, newQuantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.dish.id === dishId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const removeItem = (dishId: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.dish.id !== dishId)
    );
  };

  return (
    <div className="min-h-screen">
      <Header 
        cartItemCount={cartItems.reduce((count, item) => count + item.quantity, 0)} 
        onCartClick={toggleCart}
      />
      
      <main className="pt-20 pb-16 px-4">
        <section className="hero-gradient rounded-3xl overflow-hidden mb-16">
          <div className="container mx-auto py-16 md:py-24 px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block bg-turmeric-500 text-white text-sm px-3 py-1 rounded-full mb-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="flex items-center gap-1">
                  <Utensils size={12} />
                  <span>Authentic South Indian Cuisine</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Experience the Flavors of <span className="text-turmeric-600">South India</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-xl mx-auto text-balance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                From crispy dosas to fluffy idlis, our food truck brings the authentic tastes of South India right to your neighborhood.
              </motion.p>
              
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  className="bg-turmeric-500 hover:bg-turmeric-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                  })}
                >
                  Explore Menu
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {popularDishes.length > 0 && (
          <section className="container mx-auto mb-16">
            <div className="mb-8 flex items-center gap-2">
              <TrendingUp size={20} className="text-turmeric-500" />
              <h2 className="text-2xl font-display font-bold">Popular Dishes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularDishes.map(dish => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <DishCard dish={dish} onClick={handleDishClick} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
        
        <section className="container mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8">Menu Categories</h2>
          
          {menuData.map(category => (
            <MenuCategory 
              key={category.id} 
              category={category} 
              onDishClick={handleDishClick} 
            />
          ))}
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} DosaDelight Food Truck. All rights reserved.
          </p>
        </div>
      </footer>
      
      <DishModal 
        dish={selectedDish} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onAddToCart={addToCart}
      />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default Index;
