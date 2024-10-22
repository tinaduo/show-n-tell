import React from 'react';

function Home({ selectedSong }) {
  return (
    <div>
      <div className="w-72 h-[62px]">
        <div className="font-rebond font-normal text-white text-[54.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          show n' tell.
        </div>
      </div>
      <p className="font-rebond font-normal text-white text-lg tracking-[0] leading-[normal] w-4/5 mt-5">
        A personal space to share what makes you, you. Curate your favorite
        songs, movies, books, and memories, and show off your unique collection.
        Start building your shelf today.
      </p>
      {selectedSong && (
        <div>
          <img 
            className='text-white'
            src={selectedSong.image} alt={selectedSong.title} width="100" />
          <p className='text-white' >{selectedSong.title}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
