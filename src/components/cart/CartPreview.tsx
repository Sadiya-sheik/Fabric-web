import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../../types';

interface CartPreviewProps {
  items: CartItem[];
  total: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClose: () => void;
}

export function CartPreview({ 
  items, 
  total, 
  onRemove, 
  onUpdateQuantity, 
  onClose 
}: CartPreviewProps) {
  if (items.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <ShoppingBag className="w-12 h-12 mx-auto mb-2 opacity-50" />
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="w-96 max-h-[32rem] flex flex-col">
      <div className="overflow-y-auto flex-1">
        {items.map(item => (
          <div key={item.id} className="flex p-4 border-b">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-500">${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t bg-gray-50">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
}