import React from 'react';
import AboutTitle from '../components/AboutTitle';
import AboutDescription from '../components/AboutDescription';
import ImageGrid from '../components/ImageGrid';

const About = () => {
    // Define the images with custom src and alt
    const images = [
      {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/9ac1f1ef-e24d-4f04-b3e5-f9ddb07e1afa',
        alt: 'Favourite Place',
      },
      {
        src: 'https://pbs.twimg.com/media/FukwZ3FakAAQewB.jpg:large',
        alt: 'music',
      },
      {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/7260593d-9358-46af-8023-3035c18e3cf0',
        alt: 'knick-knacks',
      },
      {
        src: 'https://m.media-amazon.com/images/I/61G-bVvGpkL._AC_UF894,1000_QL80_.jpg',
        alt: 'movie',
      },
      {
        src: 'https://d3p3fw3rutb1if.cloudfront.net/photos/ed8df3c6-b3d5-49f8-9257-63897b5609fe',
        alt: 'food',
      },
    ];
  
    return (
      <div className="flex flex-col md:flex-row items-start justify-between p-8 bg-black text-white min-h-screen">
        <div className="flex-1 pt-20 font-rebond">
          <AboutTitle />
          <AboutDescription />
        </div>
  
        {/* Pass the custom images array to ImageGrid */}
        <ImageGrid images={images} />
      </div>
    );
  };
  
  export default About;