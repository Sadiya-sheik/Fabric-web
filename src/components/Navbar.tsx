import React, { useState } from 'react';
import { ContactInfo } from './support/ContactInfo';
import { MenuButton } from './menu/MenuButton';
import { CategoryMenu } from './menu/CategoryMenu';
import { SearchBar } from './search/SearchBar';
import { CartButton } from './cart/CartButton';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 border-b">
          <ContactInfo />
        </div>
        
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="relative">
              <MenuButton 
                isOpen={isMenuOpen} 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
              />
              <CategoryMenu isOpen={isMenuOpen} />
            </div>
            <span className="text-xl font-bold ml-4">ShopHub</span>
          </div>
          
          <div className="flex items-center flex-1 max-w-xl px-8">
            <SearchBar />
          </div>

          <div className="flex items-center">
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
}