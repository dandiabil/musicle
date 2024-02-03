import React from 'react';
import { Play } from '../../../public/icons';
const DummyThumb = 'images/playlist-image.jpg';

const Thumbnail = () => {
  return (
    <div>
      <figure className="w-64 h-64 mx-auto shadow-lg relative">
        <div className="play-button absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Play className="cursor-pointer" />
        </div>
        <div className="backdrop-blur-xl absolute top-0 left-0 w-full h-full z-10" />
        <img src={DummyThumb} alt="Dummy" className="absolute top-0 left-0 z-0" />
      </figure>
    </div>
  );
};

export default Thumbnail;
