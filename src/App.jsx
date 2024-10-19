import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
          ) : (
            <>
              <button onClick={logout}>Logout</button>
              <nav>
                <Link to="/">Home</Link> | <Link to="/search">Search</Link>
              </nav>
            </>
          )}
        </header>
        <Routes>
          <Route path="/" element={<Home selectedSong={selectedSong} />} />
          <Route path="/search" element={<Search token={token} setSelectedSong={setSelectedSong} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
