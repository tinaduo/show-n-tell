import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import About from './About.jsx'; // Importing the About component
import './App.css';

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
      <div className="bg-black w-full min-h-screen p-0">
        <header className="w-full h-[10vw] flex flex-row justify-end items-center gap-[4%]">
          <Route path="/about" className="font-rebond font-normal text-center text-white text-[27px]">About</Route> 
          <div className="font-rebond font-normal text-center text-white text-[27px] mr-[5%]">meet the team</div>
        </header>
        <div className="flex flex-row border-2 border-green-500">
          <div className="inline-block ml-[190px] mt-[350px]">
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
            <div className="inline-block mt-[90px]">
              {!token ? (
                <a
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                  className="w-[350px] h-14 rounded-[50.87px] border-[0.68px] border-solid border-[#d9d9d9] font-rebond font-normal text-black text-[18.3px] tracking-[0] leading-[normal] whitespace-nowrap flex justify-center items-center text-white"
                >
                  Log In with Spotify
                </a>
              ) : (
                <>
                  <button onClick={logout}>Logout</button>
                  <nav>
                    <Link to="/">Home</Link> | <Link to="/search">Search</Link>
                  </nav>
                </>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center border-2 border-red-500 m-0">
            <div 
              className="border-2 border-yellow-500 w-full h-1/3"
            >
              <div className="bg-url[('')] bg-cover bg-center border-2 border-orange-500">
              </div>
            </div>
            <div className="border-2 border-blue-500 w-full h-2/3"></div>
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home selectedSong={selectedSong} />} />
          <Route path="/search" element={<Search token={token} setSelectedSong={setSelectedSong} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
