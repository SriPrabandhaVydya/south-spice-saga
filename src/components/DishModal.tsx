
import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dish } from '../data/menu';
import { X, Clock, Leaf } from 'lucide-react';

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (dish: Dish) => void;
}

const DishModal = ({ dish, isOpen, onClose, onAddToCart }: DishModalProps) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden w-full max-w-lg max-h-[90vh] shadow-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative aspect-video">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full"
                  onClick={onClose}
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-white text-xl font-bold">{dish.name}</h2>
                    {dish.vegan && (
                      <span className="bg-cardamom-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Leaf size={12} /> Vegan
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 40vh)' }}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold">${dish.price.toFixed(2)}</span>
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock size={16} />
                    {dish.prepTime}
                  </span>
                </div>

                <p className="text-gray-700 mb-6">{dish.description}</p>

                <div className="mb-6">
                  <h3 className="font-bold mb-2">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {dish.allergens && (
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Allergens</h3>
                    <div className="flex flex-wrap gap-2">
                      {dish.allergens.map((allergen, index) => (
                        <span 
                          key={index} 
                          className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <motion.button
                  className="w-full bg-turmeric-500 text-white py-3 rounded-xl font-bold mt-4"
                  onClick={() => onAddToCart(dish)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default DishModal;
