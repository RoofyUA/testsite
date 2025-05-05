import React from 'react';
export const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://motionbgs.com/media/3997/ifrit-final-fantasy-xvi.jpg"
        alt="Final Fantasy XVI Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white mt-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">The Legacy Continues</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
              Embark on an epic journey in the realm of Valisthea. Experience the latest updates and
              content for Final Fantasy XVI.
            </p>
            <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 text-lg rounded-sm transition-colors">
              Latest Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
