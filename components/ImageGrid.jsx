import React from 'react';
import ImageCard from './ImageCard';

const ImageGrid = ({ images }) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {/* Image 1 */}
          <div className="col-span-3 row-span-2">
            <ImageCard
              src={images[0].src}
              alt={images[0].alt}
              caption="favourite place"
              width={310}
              height={130}
            />
          </div>
          {/* Image 2 */}
          <div className="col-start-4 row-start-1 col-span-2 row-span-2">
            <ImageCard
              src={images[1].src}
              alt={images[1].alt}
              caption="music"
              width={130}
              height={130}
            />
          </div>
        </div>
  
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 mr-7s">
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
                caption="movie"
                width={130}
                height={130}
              />
            </div>
          </div>
          {/* Image 5 */}
          <div className="col-start-1 col-span-2 row-start-5 row-span-2 mr-none">
            <ImageCard
              src={images[4].src}
              alt={images[4].alt}
              caption="food"
              width={310}
              height={275}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageGrid;