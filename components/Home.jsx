import React from 'react';

function Home({ selectedSong }) {
  return (
    <div>
      <h2>show n tell</h2>
      {selectedSong && (
        <div>
          <img src={selectedSong.image} alt={selectedSong.title} width="100" />
          <p>{selectedSong.title}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
