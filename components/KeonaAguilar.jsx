import React from 'react';
import ImageGrid from './ImageGrid';
import FriendsShelves from './FriendsShelves'

const KeonaAguilar = () => {
  const images = [
    {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/092cf82d-52a3-4da1-9c33-32c0a1ea91c7',
        alt: 'Favourite Place',
      },
      {
        src: 'https://media.pitchfork.com/photos/599b0343d7cfca73eb7c50d5/master/pass/freudian_daniel%20caesar.jpg',
        alt: 'music',
      },
      {
        src: 'https://i.pinimg.com/736x/c2/85/06/c285063bd1b122596fcac36b69f6c9b2.jpg',
        alt: 'knick-knacks',
      },
      {
        src: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84fa8fc403cdb04cb497a338b2',
        alt: 'movie',
      },
      {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/6fc2a94e-1378-4024-aead-8482e33529ca',
        alt: 'food',
      },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 bg-black text-white min-h-screen font-rebond">
      <div className="flex flex-col items-start w-1/3 pl-[-30px]">
        <div className="border-2 border-gray-300 w-32 h-32 rounded-xl mb-4"></div>
        <h1 className="text-xl mb-1">Keona Aguilar</h1>
        <p className="text-sm text-gray-400 mb-4">@keona_premium</p>
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


export default KeonaAguilar;
