import React from 'react';
export const PreFooterBanner = () => {
  return (
    <div className="relative bg-black py-20">
      <div className="absolute inset-0">
        <img
          src="https://wallpaper.forfun.com/fetch/99/99fae6ad17f3660a7b510755af676516.jpeg"
          alt="Final Fantasy XVI"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Begin Your Journey Today</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join millions of players in the epic world of Valisthea
        </p>
        <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 text-lg rounded-sm transition-colors">
          Purchase Now
        </button>
      </div>
    </div>
  );
};
