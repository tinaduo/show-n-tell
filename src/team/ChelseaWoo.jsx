import React from "react";
import ImageGridPlaceholder from "../../components/ImageGridPlaceholder";

const ChelseaWoo = () => {
  const images = [
    {
      src: "../src/assets/images/chelsea/FavPlace.jpeg",
      alt: "Favourite Place",
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e02535f1238173ab5d6f5f92c74",
      caption: "Just Like Heaven",
    },
    {
      src: "../src/assets/images/chelsea/JBLRED.png",
      alt: "knick-knacks",
    },
    {
      src: "../src/assets/images/chelsea/FavMovie.jpg",
      alt: "movie",
    },
    {
      src: "../src/assets/images/chelsea/FavFood.JPG",
      alt: "food",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white font-rebond">
      <div className="flex flex-col">
        <img
          src="../src/assets/images/chelsea/ab6775700000ee85d575d80ba633f14b5c8b1da6.jpeg"
          className="border-2 border-gray-300 w-32 h-32 rounded-xl object-cover"
        />
        <div className="flex flex-col w-full">
          <h1 className="text-xl mb-1 mt-2 ">Chelsea Woo</h1>
          <p className="text-sm text-gray-400 mb-4">@chelsanity</p>
          <p className="text-left mb-8 font-sans lg:w-56 md:w-36 w-[452px]">
            damn right.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex justify-end w-auto">
          <ImageGridPlaceholder images={images} />
        </div>
      </div>
    </div>
  );
};

export default ChelseaWoo;
