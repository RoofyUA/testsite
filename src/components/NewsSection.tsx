import React from 'react';
export const NewsSection = () => {
  const news = [
    {
      title: 'Patch 1.20 Now Available',
      date: '2024-01-15',
      image:
        'https://www.global-esports.news/wp-content/uploads/2023/06/Final-Fantasy-16-Highlights-Its-Big-Next-Gen-Features-1-1.png',
      description: 'Experience new combat abilities and gameplay improvements',
    },
    {
      title: 'Upcoming DLC Announcement',
      date: '2024-01-10',
      image:
        'https://fyre.cdn.sewest.net/ff-xvi/65520a2298774a5fd69839f3/ffxvi_dlcs-95w37kZ59.png?quality=85&width=3840',
      description: 'New story content coming soon to Valisthea',
    },
    {
      title: 'Community Event Results',
      date: '2024-01-05',
      image:
        'https://www.rpgfan.com/wp-content/uploads/2023/12/Final-Fantasy-XVI-The-Rising-Tide-Screenshot-012.webp',
      description: 'See the winners of our screenshot contest',
    },
  ];
  return (
    <section id="news" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Recent News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.title} className="bg-gray-900 rounded-sm overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-red-500 text-sm mb-2">{item.date}</p>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
