import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { useAppContext } from '../../context';
const DummyThumb = 'images/playlist-image.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const { setShowSpinner } = useAppContext();

  const handleClick = () => {
    navigate('/play');
    // setShowSpinner(true);
  };

  return (
    <div className="w-screen py-20 max-w-5xl mx-auto relative z-10">
      <header className="text-center mb-32 font-bold">
        <h1 className="neon-sign text-purple-100 text-[64px]">MUSIC.LE</h1>
        <h3 className="text-gray text-[20px]">WORDLE but music.</h3>
      </header>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-10 justify-evenly mb-11">
          <Card title="Tracks" onClick={handleClick} bgImage={DummyThumb} />
          <Card title="Artists" onClick={handleClick} bgImage={DummyThumb} />
          <Card title="Albums" onClick={handleClick} bgImage={DummyThumb} />
        </div>
        {/* <div className="flex justify-between items-center mb-14 relative">
          <div className='line-separator'></div>
          <div className='circle-separator'></div>
          <div className='line-separator'></div>
        </div>
        <div className="w-fit mx-auto">
          <Card title="Genres"/>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
