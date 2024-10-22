import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import './App.css';
import About from './About';
import Team from './Team';
import TinaDuong from '../components/TinaDuong';

function App() {
  const CLIENT_ID = "baeaf44412344a248f5309bbc2bcf6c1";
  const REDIRECT_URI = "https://show-n-tell.vercel.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    } else if (token) {
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    setSelectedSong(null);
  };

  return (
    <Router>
      <nav className="flex justify-between p-4 bg-black text-white border-none">
        <Link className='text-white text-2xl font-bold' to="/">show n' tell</Link>
        <div className="space-x-4">
          <nav>
            <Link className='text-white' to="/search">Search</Link> | <Link to="/about">About</Link> | <Link to="/meet-the-team"> Meet the Team </Link>
          </nav>
        </div>
      </nav>
      <Routes>
      <meet-the-team
        <Route path="/about" element={<About />} />
        <Route path="/meet-the-team" element={<Team />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/team/tina-duong" element={<TinaDuong />} />
        <Route className='text-white' path="/" element={<Home selectedSong={selectedSong} />} />
        <Route className='text-white' path="/about" element={<About />} />
        <Route className='text-white' path="/search" element={<Search token={token} setSelectedSong={setSelectedSong} />}
       />
      </Routes>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          className='text-white'
        >
          Login to Spotify
        </a>
      ) : (
        <>
          <button
            onClick={logout}
            className='text-white'
          >Logout</button>
        </>
      )}
    </Router>
  );
}

export default App;
