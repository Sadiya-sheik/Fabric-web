import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartPreview } from './CartPreview';
import { useCart } from '../../hooks/useCart';

export function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={cartRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-gray-100 rounded-lg"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl z-50">
          <CartPreview
            items={items}
            total={total}
            onRemove={removeItem}
            onUpdateQuantity={updateQuantity}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}