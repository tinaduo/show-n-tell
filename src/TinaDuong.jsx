import React from "react";
import ImageGrid from "../components/ImageGrid";

const TinaDuong = () => {
  const images = [
    {
      src: "../src/images/tina/IMG_1387.jpg",
      alt: "Favourite Place",
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e0287ec4ada08a3b16aba598bd6",
      caption: "THAT AIN'T LIFE",
    },
    {
      src: "../src/images/tina/IMG_4968.png",
      alt: "knick-knacks",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/0/04/Fallen-Angels-Poster.jpg",
      alt: "Favourite Movie",
    },
    {
      src: "../src/images/tina/IMG_4046.jpg",
      alt: "Favourite Food",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white font-rebond">
      <div className="flex flex-col">
        <img
          src="../src/images/tina/IMG_4954.jpg"
          className="border-2 border-gray-300 w-32 h-32 rounded-xl object-cover"
        />
        <div className="flex flex-col w-full">
        <h1 className="text-xl mb-1 mt-2 ">Tina Duong</h1>
        <p className="text-sm text-gray-400 mb-4">@yourgirlfriendswardrobe</p>
          <p className="text-left mb-8 font-sans lg:w-56 md:w-36 max-w-[452px]">
            Tina, please don't say that. It's important to remember that you are
            not alone, and that there is help available. You deserve to be here,
            and your life has value.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex justify-end w-auto">
          <ImageGrid 
          images={images} />
        </div>
      </div>
    </div>
  );
};

export default TinaDuong;