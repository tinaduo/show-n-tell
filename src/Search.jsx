import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ token, setSelectedSong }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchEndpoint = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;
    let token = window.localStorage.getItem("token");
    const response = await fetch(searchEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setResults(data.tracks.items);
  };

  const handleSongClick = (track) => {
    setSelectedSong({
      title: track.name,
      image: track.album.images[0]?.url,
    });
    navigate("/profile");
  };

  return (
    <div className="text-white">
      <h2 className=" font-rebond text-[32.25px]">
        add a song to your show n’ tell!
      </h2>
      <p className="w-fit">
        What’s that track you can’t stop playing? Whether it’s a song that lifts
        your spirits, helps you focus, or brings back memories, find it here.
        Search for your favorite tune and add it to your shelf to share a part
        of your soundtrack with everyone.
      </p>
      <form onSubmit={handleSearch}>
        <input
          className="w-full max-w-[397px] h-[49px] rounded-full border border-[#d9d9d9] p-4 my-8"
          type="text"
          placeholder="search for a song"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="flex flex-row flex-wrap gap-[50px] justify-between justify-items-start">
        {results.map((track) => (
          <div
            className="text-xl font-semibold font-rebond"
            key={track.id}
            onClick={() => handleSongClick(track)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex flex-col font-rebond">
              <img
                className="lg:w-56 md:w-36 rounded-xl"
                src={track.album.images[0]?.url}
                alt={track.name}
              />
              <p className="text-3xl lg:w-56 md:w-36 pt-2">
                {track.name}
              </p>
              <p className="text-xl lg:w-56 md:w-36 ">
                {track.artists[0].name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;


// h-[191px] w-[191px] 