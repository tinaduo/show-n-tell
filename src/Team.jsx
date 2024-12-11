import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Tina Duong",
    link: "/team/tina-duong",
    imgSrc: "../images/tina/IMG_4954.jpg",
  },
  {
    name: "Chelsea Woo",
    link: "/team/chelsea-woo",
    imgSrc: "../images/chelsea/ab6775700000ee85d575d80ba633f14b5c8b1da6.jpeg",
  },
  {
    name: "Keona Aguilar",
    link: "/team/keona-aguilar",
    imgSrc: "../images/keona/IMG_3948.jpg",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col h-fit bg-black text-white">
      <h1 className="text-4xl font-rebond mb-9 text-center md:text-left">Meet the Team!</h1>
      <div className="flex flex-col md:flex-row md:justify-between lg:justify-between">
        {teamMembers.map((member) => (
          <Link to={member.link} className="flex flex-col items-center" key={member.name}>
            <img
              className=" w-60 h-52 border-2 border-gray-300 rounded-xl object-cover"
              src={member.imgSrc}
              alt={member.name}
            />
            <p className="text-lg py-4">{member.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Team;
