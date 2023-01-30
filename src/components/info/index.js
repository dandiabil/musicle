import React, { useState } from 'react';
import { Info } from '../../../public/icons';
import ClickOutside from '../click-outside';

const Information = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="absolute bottom-4 right-4 z-20" onClick={() => setOpenInfo(true)}>
      {openInfo ? (
        <ClickOutside onClickOutside={() => setOpenInfo(false)}>
          <div className="info-container p-2 text-white text-xs">
            <p className="mb-2">
              Background Image by <span className="font-bold">Nainoa Shizuru</span>.
            </p>
            <a href="https://unsplash.com/photos/NcdG9mK3PBY" target="_blank" rel="noreferrer" className="underline">
              https://unsplash.com/photos/NcdG9mK3PBY
            </a>
          </div>
        </ClickOutside>
      ) : (
        <div className="flex items-center cursor-pointer border-[1px] border-white rounded-full p-1">
          <Info />
        </div>
      )}
    </div>
  );
};

export default Information;
