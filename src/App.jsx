import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./profile";
import Search from "./Search";
import "./App.css";
import About from "./About";
import Team from "./Team";
import TinaDuong from "./TinaDuong";
import KeonaAguilar from "./KeonaAguilar";
import ChelseaWoo from "./ChelseaWoo";
import Test from "./test";

function App() {
  const CLIENT_ID = "baeaf44412344a248f5309bbc2bcf6c1";
  const REDIRECT_URI = "http://localhost:5173/Profile";
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
    <div className="flex flex-col px-8 md:px-16">
      <Router>
        <nav className="flex justify-between py-8 bg-black text-white border-none w-full">
          <Link className="text-white text-2xl font-bold" to="/">
            show n' tell
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/about">About</Link>
            <Link to="/meet-the-team">Meet the Team</Link>
            <Link to="/search">Search</Link>
          </div>
        </nav>
        <Routes>
          <Route
            path="/profile"
            element={<Profile selectedSong={selectedSong} token={token} />}
          />
          <Route path="/test" element={<Test />} />
          <Route path="/meet-the-team" element={<Team />} />
          <Route path="/team/tina-duong" element={<TinaDuong />} />
          <Route path="/team/keona-aguilar" element={<KeonaAguilar />} />
          <Route path="/team/chelsea-woo" element={<ChelseaWoo />} />
          <Route
            className="text-white"
            path="/"
            element={<Home selectedSong={selectedSong} />}
          />
          <Route className="text-white" path="/about" element={<About />} />
          <Route
            className="text-white"
            path="/search"
            element={<Search token={token} setSelectedSong={setSelectedSong} />}
          />
        </Routes>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className="text-white p-4 border-white border-2 rounded-full mt-12 max-w-60"
          >
            Login to Spotify →
          </a>
        ) : (
          <>
            <div className="my-12 w-fit">
              <h2 className="text-2xl font-rebond font-semibold mb-2 text-white">
                friends shelves.
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <Link
                    to="/team/tina-duong"
                    className="text-white font-sans hover:underline"
                  >
                    tina's shelf
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/team/keona-aguilar"
                    className="text-white font-sans hover:underline"
                  >
                    keona's shelf
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/team/chelsea-woo"
                    className="text-white font-sans hover:underline"
                  >
                    chelsea's shelf
                  </Link>
                </li>
                {/* temp */}
                <li className="mb-2">
                  <Link
                    to="/profile"
                    className="text-white font-sans hover:underline"
                  >
                    your shelf
                  </Link>
                </li>
              </ul>
              <button
                onClick={logout}
                className="text-white text-left font-sans hover:underline"
              >
                log out
              </button>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
