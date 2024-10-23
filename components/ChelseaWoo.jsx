import React from 'react';
import ImageGrid from './ImageGrid';
import FriendsShelves from './FriendsShelves'

const ChelseaWoo = () => {
  const images = [
    {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/9ac1f1ef-e24d-4f04-b3e5-f9ddb07e1afa',
        alt: 'Favourite Place',
      },
      {
        src: 'https://pbs.twimg.com/media/FukwZ3FakAAQewB.jpg:large',
        alt: 'music',
      },
      {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/7260593d-9358-46af-8023-3035c18e3cf0',
        alt: 'knick-knacks',
      },
      {
        src: 'https://m.media-amazon.com/images/I/61G-bVvGpkL._AC_UF894,1000_QL80_.jpg',
        alt: 'movie',
      },
      {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/ed8df3c6-b3d5-49f8-9257-63897b5609fe',
        alt: 'food',
      },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 bg-black text-white min-h-screen font-rebond">
      <div className="flex flex-col items-start w-1/3 pl-[-30px]">
        <div className="border-2 border-gray-300 w-32 h-32 rounded-xl mb-4"></div>
        <h1 className="text-xl mb-1">Chelsea Woo</h1>
        <p className="text-sm text-gray-400 mb-4">@chelsanity</p>
        <div className="mt-3">
          <h2 className="text-base font-semibold mb-2">Bio:</h2>
          <p className="text-sm text-left">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>
        </div>
         <FriendsShelves />
      </div>

      <div className="flex-grow">
        <div className="flex justify-end">
          <ImageGrid images={images} />
        </div>
      </div>
    </div>
  );
};


export default ChelseaWoo;
