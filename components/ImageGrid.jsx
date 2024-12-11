import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";
import CloseIcon from "./CloseIcon";

const ImageGrid = ({ images, selectedSong }) => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // states for individual modals
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState(false);
  const [isKnickKnacksModalOpen, setIsKnickKnacksModalOpen] = useState(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("uploadedImages"));
    if (storedImages) {
      setUploadedImages(storedImages);
    } else {
      setUploadedImages(images)
    }
  }, [images]);

  useEffect(() => {
    if (uploadedImages.length > 0) {
      localStorage.setItem("uploadedImages", JSON.stringify(uploadedImages));
    }
  }, [uploadedImages]);

  const handleNavigateToSearch = () => {
    navigate("/search");
  };

  const handleImageUpload = (event, imageIndex) => {
    const file = event.target.files[0];

    if (!file) {
      setErrorMessage("Please select an image to upload.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please upload a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("Image size should be less than 5MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setUploadedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[imageIndex] = { src: imageUrl, alt: file.name };
      return updatedImages;
    });


    switch (imageIndex) {
      case 0:
        setIsPlaceModalOpen(false);
        break;
      case 1:
        setIsSongModalOpen(false);
        break;
      case 2:
        setIsKnickKnacksModalOpen(false);
        break;
      case 3:
        setIsMovieModalOpen(false);
        break;
      case 4:
        setIsFoodModalOpen(false);
        break;
      default:
        break;
    }

    setErrorMessage(""); // clear any previous error
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {/* fav place img */}
        <div className="col-span-3 row-span-2 cursor-pointer">
          {uploadedImages[0] && (
            <ImageCard
              src={uploadedImages[0]?.src}
              alt={uploadedImages[0]?.alt}
              caption="favourite place"
              width={310}
              height={130}
              onClick={() => setIsPlaceModalOpen(true)}
            />
          )}
        </div>

        {/* fav music img */}
        <div className="col-start-4 row-start-1 col-span-2 row-span-2 cursor-pointer">
          <ImageCard
            src={selectedSong ? selectedSong.image : uploadedImages[1]?.src}
            alt={selectedSong ? selectedSong.title : uploadedImages[1]?.alt}
            caption={selectedSong?.title ? selectedSong.title : "add a song"}
            width={130}
            height={130}
            onClick={handleNavigateToSearch}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {/* fav knick knacks */}
          <div className="col-span-2 row-start-3 row-span-2 cursor-pointer">
            <ImageCard
              src={uploadedImages[2]?.src}
              alt={uploadedImages[2]?.alt}
              caption="knick-knacks"
              width={130}
              height={130}
              onClick={() => setIsKnickKnacksModalOpen(true)}
            />
          </div>
          {/* fav movie img */}
          <div className="col-start-3 col-span-3 row-start-3 row-span-4 cursor-pointer">
            <ImageCard
              src={uploadedImages[3]?.src}
              alt={uploadedImages[3]?.alt}
              caption="favourite movie"
              width={130}
              height={130}
              onClick={() => setIsMovieModalOpen(true)}
            />
          </div>
        </div>

        {/* fav food img */}
        <div className="col-start-1 col-span-2 row-start-5 row-span-2 cursor-pointer">
          <ImageCard
            src={uploadedImages[4]?.src}
            alt={uploadedImages[4]?.alt}
            caption="favourite food"
            width={310}
            height={275}
            onClick={() => setIsFoodModalOpen(true)} 
          />
        </div>
      </div>

      {/* modals */}

      {/* place modal */}
      {isPlaceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsPlaceModalOpen(false)}
              className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>

            <h2 className="text-xl mb-4 font-rebond">Add your favourite place!</h2>
            <p className="text-sm mb-4 font-sans">Is it the park where you unwind, a cozy coffee shop, or a spot from your travels? Share a photo of the place that brings you joy and feels like home, where you can be you.</p>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 0)}
              className="w-full text-white bg-black border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
      )}

      {/* knick knacks modal */}
      {isKnickKnacksModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsKnickKnacksModalOpen(false)}
              className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>

            <h2 className="text-xl mb-4">Add your favourite knick-knack!</h2>
            <p className="text-sm mb-4 font-sans">Is it a unique souvenir, a beloved toy, or something sentimental that makes you smile? Share a photo of that special item that brings a bit of joy to your day.</p>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 2)} // Handle upload for knick-knacks
              className="block w-full text-white bg-black border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
      )}

      {/* movie modal */}
      {isMovieModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsMovieModalOpen(false)}
              className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>

            <h2 className="text-xl mb-4">Add your favourite movie!</h2>
            <p className="text-sm mb-4 font-sans">Which movie has you pressing replay? Upload a picture of the movie poster or a scene that stuck with you.</p>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 3)} // Handle upload for movie
              className="block w-full text-white bg-black border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
      )}

      {/* food modal */}
      {isFoodModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsFoodModalOpen(false)}
              className="absolute top-4 right-4"
            >
              <CloseIcon/> 
            </button>

            <h2 className="text-xl mb-4">Add your favourite food!</h2>
            <p className="text-sm mb-4 font-sans">What’s that dish you’re always craving? Upload a photo of your all-time favorite meal, whether it’s a home-cooked classic or your favorite takeout.</p>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 4)} // Handle upload for food
              className="block w-full text-white bg-black border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default ImageGrid;
