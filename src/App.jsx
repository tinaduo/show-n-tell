import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Search, Profile, About, Team } from "./pages";
import { TinaDuong, KeonaAguilar, ChelseaWoo } from "./pages/team";
import { NavBar } from "./components";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

const config = {
  CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI,
  AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
  RESPONSE_TYPE: "token"
};

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const { token, logout, login } = useAuth();

  return (
    <div className="flex flex-col min-h-screen px-8 md:px-16 font-dmSans bg-black text-white">
      <Router>
        <NavBar token={token} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={
              <Profile 
                selectedSong={selectedSong} 
                token={token} 
              />
            } />
            <Route path="/meet-the-team" element={<Team />} />
            <Route path="/team/tina-duong" element={<TinaDuong />} />
            <Route path="/team/keona-aguilar" element={<KeonaAguilar />} />
            <Route path="/team/chelsea-woo" element={<ChelseaWoo />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={
              <Search 
                token={token} 
                setSelectedSong={setSelectedSong} 
              />
            } />
          </Routes>
        </main>

        <aside className="mt-12">
          {!token ? (
            <button
              onClick={login}
              className="text-white p-4 border-white border-2 rounded-full max-w-60 hover:bg-white hover:text-black transition-colors"
            >
              Login to Spotify →
            </button>
          ) : (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">friends shelves.</h2>
              <nav>
                <ul className="space-y-3">
                  {[
                    { path: "/team/tina-duong", label: "tina's shelf" },
                    { path: "/team/keona-aguilar", label: "keona's shelf" },
                    { path: "/team/chelsea-woo", label: "chelsea's shelf" },
                    { path: "/profile", label: "your shelf" }
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className="text-white hover:underline transition-all"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={logout}
                  className="mt-4 text-white hover:underline transition-all"
                >
                  log out
                </button>
              </nav>
            </div>
          )}
        </aside>
      </Router>
    </div>
  );
}

export default App;