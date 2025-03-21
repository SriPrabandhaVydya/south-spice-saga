
import { useState, useEffect } from 'react';
import { ChefHat, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 py-4 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ChefHat size={28} className="text-turmeric-600" />
          <h1 className="text-xl md:text-2xl font-display font-bold">
            Dosa<span className="text-turmeric-500">Delight</span>
          </h1>
        </motion.div>
        
        <motion.button
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={onCartClick}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShoppingBag size={24} />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-turmeric-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
