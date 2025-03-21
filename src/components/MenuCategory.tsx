
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuCategory as MenuCategoryType, Dish } from '../data/menu';
import DishCard from './DishCard';
import { ChevronRight } from 'lucide-react';

interface MenuCategoryProps {
  category: MenuCategoryType;
  onDishClick: (dish: Dish) => void;
}

const MenuCategory = ({ category, onDishClick }: MenuCategoryProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="flex items-center justify-between cursor-pointer mb-4" 
        onClick={toggleExpand}
      >
        <motion.div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">{category.name}</h2>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: expanded ? 'auto' : 0,
          opacity: expanded ? 1 : 0,
          display: expanded ? 'grid' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        {category.dishes.map((dish) => (
          <DishCard 
            key={dish.id} 
            dish={dish} 
            onClick={onDishClick}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MenuCategory;
