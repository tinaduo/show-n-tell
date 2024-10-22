import React from 'react';

const ImageCard = ({ src, alt, caption, width, height }) => {
    return (
        <div className="relative overflow-hidden">
            <img 
                src={src} 
                alt={alt} 
                className="border border-gray-500 transition-transform duration-300 hover:scale-105 object-cover rounded-xl"
                style={{ width: `${width}px`, height: `${height}px` }}
            />
            <span className="absolute bottom-2 left-2 bg-gray-500 bg-opacity-80 text-white px-2 py-1 rounded-xl">{caption}</span>
        </div>
    );
};

export default ImageCard;