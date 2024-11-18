import React, { useState } from 'react';

const FavoriteMusic = ({ token }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchSpotify = async (e) => {
        e.preventDefault();

        if (!token) {
            setError('You need to log in to Spotify!');
            return;
        }

        if (!query.trim()) {
            setError('Please enter a search term!');
            return;
        }

        try {
            const response = await fetch(
                `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data from Spotify API');
            }

            const data = await response.json();
            console.log('Spotify API Response:', data);

            setResults(data.tracks.items || []);
            setError(''); // Clear any previous errors
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to fetch data. Please try again.');
        }
    };

    return (
        <div className="p-8 bg-black text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Search Your Favorite Music</h1>
            <form onSubmit={searchSpotify} className="flex items-center justify-center mb-6">
                <div className="flex items-center w-full max-w-md bg-black border border-white rounded-full px-4 py-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="search for a song"
                        className="flex-grow bg-transparent text-white outline-none placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="text-white bg-transparent hover:text-gray-300 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                            />
                        </svg>
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                {results.length > 0 ? (
                    results.map((track) => (
                        <div key={track.id} className="mb-4">
                            <p className="text-lg">{track.name} by {track.artists[0].name}</p>
                            <audio controls src={track.preview_url} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No results found. Try searching for a different song!</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteMusic;
