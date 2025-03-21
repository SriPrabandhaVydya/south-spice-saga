
import { motion } from 'framer-motion';
import { Dish } from '../data/menu';
import { Leaf } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  onClick: (dish: Dish) => void;
}

const DishCard = ({ dish, onClick }: DishCardProps) => {
  return (
    <motion.div 
      className="dish-card glass-card overflow-hidden"
      onClick={() => onClick(dish)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-video md:aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="dish-image w-full h-full object-cover"
          loading="lazy"
        />
        {dish.popular && (
          <div className="absolute top-2 right-2">
            <span className="bg-turmeric-500 text-white text-xs px-2 py-1 rounded-full">
              Popular
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{dish.name}</h3>
          {dish.vegan && (
            <Leaf size={16} className="text-cardamom-500 mt-1" />
          )}
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">${dish.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">{dish.prepTime}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
