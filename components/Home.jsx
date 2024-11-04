import React from "react";
import ImageGrid from "./ImageGrid";

function Home({ selectedSong }) {
  const images = [
    {
      src: "https://d3p3fw3rutb1if.cloudfront.net/photos/092cf82d-52a3-4da1-9c33-32c0a1ea91c7",
      alt: "Favourite Place",
    },
    {
      src: "https://media.pitchfork.com/photos/599b0343d7cfca73eb7c50d5/master/pass/freudian_daniel%20caesar.jpg",
      caption: "favorite song",
    },
    {
      src: "https://i.pinimg.com/736x/c2/85/06/c285063bd1b122596fcac36b69f6c9b2.jpg",
      alt: "knick-knacks",
    },
    {
      src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84fa8fc403cdb04cb497a338b2",
      alt: "Favourite Movie",
    },
    {
      src: "https://d3p3fw3rutb1if.cloudfront.net/photos/6fc2a94e-1378-4024-aead-8482e33529ca",
      alt: "Favourite Food",
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex justify-end items-end h-full">
            <div className="flex flex-col font-rebond">
              <h1 className="text-4xl font-bold text-white mb-4">
                show n' tell
              </h1>
              <p className="font-rebond font-normal text-white text-lg w-96 mt-5">
                A personal space to share what makes you, you. Curate your
                favorite songs, movies, books, and memories, and show off your
                unique collection. Start building your shelf today.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <ImageGrid images={images} selectedSong={selectedSong} />
        </div>
      </div>
    </div>
  );
}

export default Home;
