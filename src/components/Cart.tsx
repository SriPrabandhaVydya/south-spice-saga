
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dish } from '../data/menu';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface CartItem {
  dish: Dish;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateItemQuantity: (dishId: string, newQuantity: number) => void;
  removeItem: (dishId: string) => void;
}

const Cart = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  updateItemQuantity,
  removeItem
}: CartProps) => {
  const [subTotal, setSubTotal] = useState(0);
  
  useEffect(() => {
    setSubTotal(
      cartItems.reduce((total, item) => total + item.dish.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Your delicious South Indian food will be ready soon.",
    });
    onClose();
  };
  
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
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 z-50 flex flex-col bg-white shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h2 className="text-lg font-bold">Your Order</h2>
              </div>
              <button 
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                  <ShoppingBag size={48} className="mb-4 opacity-30" />
                  <p className="font-medium">Your cart is empty</p>
                  <p className="text-sm mt-1">Add some delicious South Indian dishes!</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.li 
                      key={item.dish.id}
                      className="flex gap-3 p-3 border rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, margin: 0 }}
                    >
                      <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={item.dish.image} 
                          alt={item.dish.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.dish.name}</h3>
                          <button 
                            className="text-gray-400 hover:text-red-500"
                            onClick={() => removeItem(item.dish.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${item.dish.price.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            className="p-1 rounded-full border"
                            onClick={() => updateItemQuantity(item.dish.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button 
                            className="p-1 rounded-full border"
                            onClick={() => updateItemQuantity(item.dish.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="p-4 border-t">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(subTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold mb-6">
                  <span>Total</span>
                  <span>${(subTotal * 1.1).toFixed(2)}</span>
                </div>
                <motion.button
                  className="w-full bg-turmeric-600 hover:bg-turmeric-700 text-white py-3 rounded-xl font-bold"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

const Fragment = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default Cart;
