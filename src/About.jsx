import React from 'react';
import AboutTitle from '../components/AboutTitle';
import AboutDescription from '../components/AboutDescription';
import ImageCard from '../components/ImageCard';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 bg-black text-white min-h-screen">
      <div className="flex-1 mb-8 pt-60 font-rebond">
        <AboutTitle />
        <AboutDescription />
      </div>
      <div className="grid grid-cols-5 grid-rows-5 gap-5 w-[729px] h-[729px] pt-16"> 
      
        {/* Image 1 */}
        <div className="col-span-3 row-span-2">
          <ImageCard
            src="https://media.istockphoto.com/id/157527255/photo/smiley-face-drawing.jpg?s=612x612&w=0&k=20&c=ORbDGNWWdwtnqXYgRwVkMZ6DQfv7W7-CkB8le0RczEI="
            alt="Favourite Place"
            caption="favourite place"
            width={450}
            height={260}
          />
        </div>

        {/* Image 2 */}
        <div className="col-start-4 row-start-1 col-span-2 row-span-2 ">
          <ImageCard
            src="https://media.istockphoto.com/id/157527255/photo/smiley-face-drawing.jpg?s=612x612&w=0&k=20&c=ORbDGNWWdwtnqXYgRwVkMZ6DQfv7W7-CkB8le0RczEI="
            alt="Knick Knacks"
            caption="favourite knick-knacks"
            width={350}
            height={260}
          />
        </div>

        {/* Image 3 */}
        <div className="col-span-2 row-start-3 row-span-2 pt-3">
          <ImageCard
            src="https://media.istockphoto.com/id/157527255/photo/smiley-face-drawing.jpg?s=612x612&w=0&k=20&c=ORbDGNWWdwtnqXYgRwVkMZ6DQfv7W7-CkB8le0RczEI="
            alt="Component"
            caption="component"
            width={280}
            height={280}
          />
        </div>

        {/* Image 4 */}
        <div className="col-start-3 col-span-3 row-start-3 row-span-4 pt-2">
          <ImageCard
            src="https://media.istockphoto.com/id/157527255/photo/smiley-face-drawing.jpg?s=612x612&w=0&k=20&c=ORbDGNWWdwtnqXYgRwVkMZ6DQfv7W7-CkB8le0RczEI="
            alt="Favourite Food"
            caption="favourite food"
            width={542}
            height={580}
          />
        </div>

        {/* Image 5 */}
        <div className="col-start-1 col-span-2 row-start-5 row-span-2 pt-10">
          <ImageCard
            src="https://media.istockphoto.com/id/157527255/photo/smiley-face-drawing.jpg?s=612x612&w=0&k=20&c=ORbDGNWWdwtnqXYgRwVkMZ6DQfv7W7-CkB8le0RczEI="
            alt="Music"
            caption="music"
            width={280}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
