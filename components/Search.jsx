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
    navigate("/");
  };

  return (
    <div className="text-white">
      <h2 className="text-white font-rebond text-[32.25px]">
        add a song to your show n’ tell!
      </h2>
      <p className="text-white w-[620px] pb-36">
        What’s that track you can’t stop playing? Whether it’s a song that lifts
        your spirits, helps you focus, or brings back memories, find it here.
        Search for your favorite tune and add it to your shelf to share a part
        of your soundtrack with everyone.
      </p>
      <form onSubmit={handleSearch}>
        <input
          className="text-white w-[397px] h-[49px] rounded-[100px] border border-[#d9d9d9] p-4"
          type="text"
          placeholder="search for a song"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="text-white px-4" type="submit">
          search
        </button>
      </form>
      <div className="flex flex-row flex-wrap gap-[50px] justify-between justify-items-start mt-8">
        {results.map((track) => (
          <div
            className="text-white text-xl font-semibold font-rebond"
            key={track.id}
            onClick={() => handleSongClick(track)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex flex-col">
              <img
                className="h-[191px] w-[191px] rounded-xl"
                src={track.album.images[0]?.url}
                alt={track.name}
              />
              <p className="text-white text-xl font-rebond w-[191px]">
                {track.name}
              </p>
              <p className="text-white text-sm font-rebond w-[191px]">
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
