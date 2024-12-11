import React from "react";
import ImageGridPlaceholder from "../../components/ImageGridPlaceholder";

const KeonaAguilar = () => {
  const images = [
    {
      src: "/images/keona/favPlace.jpg",
      alt: "Favourite Place",
    },
    {
      src: "https://media.pitchfork.com/photos/599b0343d7cfca73eb7c50d5/master/pass/freudian_daniel%20caesar.jpg",
      caption: "Best Part",
    },
    {
      src: "/images/keona/knickKnacks.jpg",
      alt: "knick-knacks",
    },
    {
      src: "/images/keona/captainAmerica.jpg",
      alt: "movie",
    },
    {
      src: "/images/keona/food.jpg",
      alt: "food",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white font-rebond">
      <div className="flex flex-col">
        <img
          src="/images/keona/IMG_3948.jpg"
          className="border-2 border-gray-300 w-32 h-32 rounded-xl object-cover"
        />
        <div className="flex flex-col w-full">
        <h1 className="text-xl mb-1 mt-2 ">Keona Aguilar</h1>
        <p className="text-sm text-gray-400 mb-4">@keona_premium</p>
          <p className="text-left mb-8 font-sans lg:w-56 md:w-36 max-w-[452px]">
            The little things that currently make me happy—here’s a quick glimpse into what makes me, me!
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex justify-end w-auto">
          <ImageGridPlaceholder 
          images={images} />
        </div>
      </div>
      </div>
  );
};

export default KeonaAguilar;
