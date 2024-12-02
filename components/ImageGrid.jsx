import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images, selectedSong, selectedPlace }) => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState(images);


  const handleNavigateToSearch = () => {
    navigate("/search");
  };
  
  const handlePlaceImage = () => {
    navigate("/create/place");
  };

  const handleFoodImage = () => {
    navigate("/create/food");
  };

  const handleKnickKnacksImage = () => {
    navigate("/create/knick-knacks");
  };

  const handleMovieImage = () => {
    navigate("/create/movie");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="col-span-3 row-span-2 cursor-pointer">
          {uploadedImages[0] && (
            <ImageCard
              src={selectedPlace?.url || uploadedImages[0].src} 
              alt={selectedPlace?.name} 
              caption="favourite place"
              width={310}
              height={130}
              onClick={handlePlaceImage} 
            />
          )}
        </div>
        {/* img music  use selectedSong if its selected, if not it uses images[1] */}
        <div className="col-start-4 row-start-1 col-span-2 row-span-2 cursor-pointer">
          <ImageCard
            src={selectedSong ? selectedSong.image : uploadedImages[1].src}
            alt={selectedSong ? selectedSong.title : uploadedImages[1].alt}
            caption={selectedSong?.title ? selectedSong.title : "add a song"}
            width={130}
            height={130}
            onClick={handleNavigateToSearch}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {/* Image 3 */}
          <div className="col-span-2 row-start-3 row-span-2 cursor-pointer">
            <ImageCard
              src={uploadedImages[2].src}
              alt={uploadedImages[2].alt}
              caption="knick-knacks"
              width={130}
              height={130}
              onClick={handleKnickKnacksImage}
            />
          </div>
          {/* Image 4 */}
          <div className="col-start-3 col-span-3 row-start-3 row-span-4 cursor-pointer">
            <ImageCard
              src={uploadedImages[3].src}
              alt={uploadedImages[3].alt}
              caption="favourite movie"
              width={130}
              height={130}
              onClick={handleMovieImage}
            />
          </div>
        </div>
        {/* Image 5 */}
        <div className="col-start-1 col-span-2 row-start-5 row-span-2 cursor-pointer">
          <ImageCard
            src={uploadedImages[4].src}
            alt={uploadedImages[4].alt}
            caption="favourite food"
            width={310}
            height={275}
            onClick={handleFoodImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
