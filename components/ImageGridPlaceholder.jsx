import React from "react";
import ImageCard from "./ImageCard";

const ImageGridPlaceholder = ({ images, selectedSong }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                {/* img 1*/}
                <div className="col-span-3 row-span-2">
                <ImageCard
                    src={images[0].src}
                    alt={images[0].alt}
                    caption="favourite place"
                    width={310}
                    height={130}
                />
                </div>

                {/* img music  use selectedSong if its selected, if not it uses images[1] */}
                <div className="col-start-4 row-start-1 col-span-2 row-span-2">
                <ImageCard
                    src={selectedSong ? selectedSong.image : images[1].src}
                    alt={selectedSong ? selectedSong.title : images[1].alt}
                    caption={images[1].caption}
                    width={130}
                    height={130}
                    textColor={images[1].textColor}
                />
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                {/* Image 3 */}
                <div className="col-span-2 row-start-3 row-span-2">
                    <ImageCard
                    src={images[2].src}
                    alt={images[2].alt}
                    caption="knick-knacks"
                    width={130}
                    height={130}
                    />
                </div>
                
                {/* Image 4 */}
                <div className="col-start-3 col-span-3 row-start-3 row-span-4">
                    <ImageCard
                    src={images[3].src}
                    alt={images[3].alt}
                    caption="favourite movie"
                    width={130}
                    height={130}
                    />
                </div>
                </div>
                
                {/* Image 5 */}
                <div className="col-start-1 col-span-2 row-start-5 row-span-2">
                <ImageCard
                    src={images[4].src}
                    alt={images[4].alt}
                    caption="favourite food"
                    width={310}
                    height={275}
                />
                </div>
            </div>
        </div>
    );
};

export default ImageGridPlaceholder;
