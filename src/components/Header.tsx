import React from 'react';
import { MenuIcon } from 'lucide-react';
export const Header = () => {
  return (
    <header className="w-full bg-black/90 fixed top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://preview.redd.it/final-fantasy-xvi-logo-art-png-v0-8c48eb77unib1.png?auto=webp&s=f6d292e45ee61a6ea1f0e7ce5dc33e596e0b2a6c"
              alt="Final Fantasy XVI"
              className="h-10"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#news" className="text-gray-300 hover:text-white transition-colors">
              News
            </a>
            <a href="#dlc" className="text-gray-300 hover:text-white transition-colors">
              DLC
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
              Gallery
            </a>
          </nav>
          <button className="md:hidden text-white">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
