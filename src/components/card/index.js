import React, { useRef } from 'react';
// const dummyImage = 'images/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg';

const Card = ({ title, bgImage, onClick, subtitle }) => {
  const cardRef = useRef();
  // const []
  // useEffect(() => {
  //   if()
  // }, [])

  const onEnter = () => {
    cardRef.current.firstChild.firstChild.classList.add('card-hover');
  };

  const onLeave = () => {
    cardRef.current.firstChild.firstChild.classList.remove('card-hover');
  };
  return (
    <div
      className="max-w-[280px] mx-auto cursor-pointer transition-all duration-300 shadow-xl"
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <figure className="w-full h-fit">
        <div className="w-full h-full overflow-hidden rounded-t-xl ">
          <img src={bgImage} alt="dummy" className="transition-all duration-300" />
        </div>
      </figure>
      <div className="pb-8 pt-4 px-6 bg-dark-purple rounded-b-xl text-gray">
        <h3 className="text-2xl font-bold uppercase mb-2">{title}</h3>
        <p className="mb-2">{subtitle}</p>
        <button
          className="border-gray outline-none rounded-3xl border-[1px] py-1 px-7 font-bold uppercase hover:bg-gray hover:text-dark-purple transition-all duration-75"
          onClick={onClick}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Card;
