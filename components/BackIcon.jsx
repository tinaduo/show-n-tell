import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackIcon = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-left"
        style={{ cursor: 'pointer' }}
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </div>
  );
};

export default BackIcon;