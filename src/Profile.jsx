import { React, useEffect, useState } from "react";
import ImageGrid from "../components/ImageGrid";

function Profile({ selectedSong, token }) {
  const [spotifyProfile, setSpotifyProfile] = useState(null);
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

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const response = await fetch("https://api.spotify.com/v1/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setSpotifyProfile(data);
          } else {
            console.error("Failed to fetch Spotify profile:", response.status);
          }
        } catch (error) {
          console.error("Error fetching Spotify profile:", error);
        }
      }
    };
    fetchProfile();
  }, [token]);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between bg-black text-white font-rebond">
      <div className="flex flex-col items-start">
        {spotifyProfile?.images?.[0]?.url ? (
          <img
            src={spotifyProfile.images[0].url}
            alt={`${spotifyProfile.display_name}'s Spotify profile`}
            className="border-2 border-gray-300 w-32 h-32 rounded-xl object-cover"
          />
        ) : (
          <div className="border-2 border-gray-300 w-32 h-32 rounded-xl bg-gray-700"></div>
        )}
        <div className="flex flex-col">
          <h1 className="text-xl mb-1">
            {spotifyProfile?.display_name || "Name"}
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            @{spotifyProfile?.display_name || "User Name"}
          </p>
          <div className="mt-3">
            <p className="text-left mb-8 font-sans md:w-[259px] pr-4 lg:w-[259px] 2xl:w-[259px]">
              hello i am {spotifyProfile?.display_name || "Name"}.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex justify-end">
          <ImageGrid images={images} selectedSong={selectedSong} />
        </div>
      </div>
    </div>
  );
}

export default Profile;

