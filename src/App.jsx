import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import './App.css';
import About from './About';

function App() {
  const CLIENT_ID = "baeaf44412344a248f5309bbc2bcf6c1";
  const REDIRECT_URI = "http://localhost:5173/";
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
        <div className="text-2xl font-bold">show n' tell.</div>
        <div className="space-x-4">
          <Link to="/about" >about</Link>
          <Link to="/meet-the-team">meet the team</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
