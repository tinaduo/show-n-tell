import React, { useState } from "react";

const ImageCard = ({
    src,
    alt,
    caption,
    width,
    height,
    onClick,
    textColor = "white",
}) => {

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative overflow-hidden">
            <img
                src={src}
                alt={alt}
                caption={caption}
                className={`object-cover rounded-xl ${isLoaded ? "" : "border"}`}
                style={{ width: `${width}px`, height: `${height}px` }}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(false)}
                onClick={onClick}
            />
            <span
                style={{ color: textColor }}
                className="absolute bottom-2 left-2 py-1 px-2 bg-gray-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 justify-center font-sans text-xs"
            >
                {caption}
            </span>
        </div>
    );
};

export default ImageCard;
