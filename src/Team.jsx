import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="flex flex-col items-start p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-rebond mb-9">Meet the Team!</h1>
      <div className="flex flex-row justify-between">

        <Link to="/team/tina-duong" className="flex flex-col items-center">
          <div className="w-60 h-52 border-2 border-gray-300 rounded-xl mb-2"></div>
          <p className="text-lg text-left pt-5">Tina Duong</p>
        </Link>

        <Link to="/team/chelsea-woo" className="flex flex-col items-center">
          <div className="w-60 h-52 border-2 border-gray-300 rounded-xl mb-"></div>
          <p className="text-lg pt-5">Chelsea Woo</p>
        </Link>

        <Link to="/team/keona-aguilar" className="flex flex-col items-center">
          <div className="w-60 h-52 border-2 border-gray-300 rounded-xl mb-"></div>
          <p className="text-lg pt-5">Keona Aguilar</p>
        </Link>
        </div>
      </div>
  );
};

export default Team;
