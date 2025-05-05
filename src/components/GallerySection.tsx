import React from 'react';
export const GallerySection = () => {
  const images = [
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/10/Final-Fantasy-XVI-Shiva-Cover.jpg',
    'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24741679/FFXVI_MediaKit_01_png_jpgcopy.jpg?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400',
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/5-ff16-characters-who-deserved-way-more-screen-time-an-image-of-final-fantasy-16-benedikta-a-character-who-deserved-more-time.jpg',
    'https://media.wired.com/photos/6467c20b40f1b0ff57844512/master/w_2560%2Cc_limit/Final-Fantasy-XVI-Game-of-Thrones-Treatment-Games.jpg',
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/07/10-best-final-fantasy-xvi-boss-fights-ranked.jpg',
    'https://www.rpgfan.com/wp-content/uploads/2020/09/Final-Fantasy-XVI-Screenshot-197.jpg',
  ];
  return (
    <section id="gallery" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
