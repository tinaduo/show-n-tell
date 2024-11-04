import React from 'react';

const ImageCard = ({ src, alt, caption, width, height }) => {
    return (
        <div className="relative overflow-hidden">
            <img 
                src={src} 
                alt={alt} 
                className="object-cover rounded-xl hove:scale-105"
                style={{ width: `${width}px`, height: `${height}px` }}
            />
            <span className="text-white absolute bottom-2 left-2 bg-gray-500 bg-opacity-50 bg-gradient-to-br from-[#efefef]/5 to-white/5 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-rebond">{caption}</span>
        </div>
    );
};

export default ImageCard;