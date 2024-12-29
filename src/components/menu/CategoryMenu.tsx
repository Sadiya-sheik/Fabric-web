import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { categories } from '../../data/categories';

export function CategoryMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg z-50">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

function CategoryItem({ category }: { category: typeof categories[number] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`/category/${category.id}`}
        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
      >
        <span>{category.name}</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </a>
      
      {isHovered && (
        <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-r-lg">
          {category.subcategories.map((sub) => (
            <a
              key={sub}
              href={`/category/${category.id}/${sub.toLowerCase()}`}
              className="block px-4 py-2 hover:bg-gray-50"
            >
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}