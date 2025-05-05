import React from 'react';
export const DLCSection = () => {
  const dlcs = [
    {
      title: 'Rising Tide',
      image:
        'https://www.gematsu.com/wp-content/uploads/2024/03/FF16_Slides_03-22-24_Rising-Tide-Key-Art.jpg',
      description: 'Explore the depths of the Crystal Sea in this expansion',
      price: '$19.99',
    },
    {
      title: 'Echoes of the Fallen',
      image:
        'https://fullcleared.com/wp-content/uploads/2023/12/final-fantasy-xvi-echoes-of-the-fallen-review-fullcleared.jpg',
      description: 'Uncover ancient secrets in the forgotten ruins',
      price: '$19.99',
    },
  ];
  return (
    <section id="dlc" className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Available DLC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dlcs.map((dlc) => (
            <div key={dlc.title} className="relative group">
              <img src={dlc.image} alt={dlc.title} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{dlc.title}</h3>
                  <p className="text-gray-300 mb-4">{dlc.description}</p>
                  <button className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-sm transition-colors">
                    Get Now - {dlc.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
