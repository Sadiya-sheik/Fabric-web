import React from 'react';
import { Menu as MenuIcon } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-colors ${
        isOpen ? 'bg-gray-100' : 'hover:bg-gray-50'
      }`}
    >
      <MenuIcon className="h-6 w-6" />
    </button>
  );
}