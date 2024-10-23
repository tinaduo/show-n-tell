import React from 'react';
import { Link } from 'react-router-dom';

const FriendsShelves = () => {
  return (
    <div className="mt-20">
      <h2 className="text-base font-semibold mb-2">friends shelves.</h2>
      <ul className="list-none text-sm">
        <li className="mb-2">
          <Link to="/team/tina-duong" className="text-white hover:underline">
            tina's shelf
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/team/keona-aguilar" className="text-white hover:underline">
            keona's shelf
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/team/chelsea-woo" className="text-white hover:underline">
            chelsea's shelf
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FriendsShelves;
