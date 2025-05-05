import React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://preview.redd.it/final-fantasy-xvi-logo-art-png-v0-8c48eb77unib1.png?auto=webp&s=f6d292e45ee61a6ea1f0e7ce5dc33e596e0b2a6c"
              alt="Final Fantasy XVI"
              className="h-8 mb-4"
            />
            <p className="text-gray-400">© 2024 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#news" className="text-gray-400 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#dlc" className="text-gray-400 hover:text-white">
                  DLC
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
