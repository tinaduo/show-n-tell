import React from "react";
import ImageGridPlaceHolder from "../components/ImageGridPlaceholder";

const About = () => {
  const images = [
    {
      src: "https://d3p3fw3rutb1if.cloudfront.net/photos/9ac1f1ef-e24d-4f04-b3e5-f9ddb07e1afa",
      alt: "Favourite Place",
    },
    {
      src: "https://pbs.twimg.com/media/FukwZ3FakAAQewB.jpg:large",
      caption: "favorite song",
    },
    {
      src: "https://d3p3fw3rutb1if.cloudfront.net/photos/7260593d-9358-46af-8023-3035c18e3cf0",
      alt: "knick-knacks",
    },
    {
      src: "https://m.media-amazon.com/images/I/61G-bVvGpkL._AC_UF894,1000_QL80_.jpg",
      alt: "movie",
    },
    {
      src: "https://d3p3fw3rutb1if.cloudfront.net/photos/ed8df3c6-b3d5-49f8-9257-63897b5609fe",
      alt: "food",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-end justify-between text-white font-rebond sm:items-center md:items-end">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-4 font-rebond">About!</h1>
        <p className="font-sans text-pretty font-normal text-white text-sm max-w-[500px] mt-5 lg:mb-0 mb-5">
          Show n' Tell is a personal, interactive platform where you can
          showcase what makes you, you. Whether it’s your favourite songs,
          cherished memories, or sentimental items, Show n' Tell offers a space
          to curate and share a shelf of your life’s highlights. Designed with
          simplicity and creativity in mind, each shelf reflects your
          individuality and can be explored by others in your community. Connect
          through shared experiences, discover new favourites, and celebrate the
          little things that bring joy to your day.
        </p>
    </div>
          <div className="flex-grow">
        <div className="flex justify-end w-auto">
      <ImageGridPlaceHolder images={images} /> 
    </div>
    </div>
    </div>
  );
};

export default About;
