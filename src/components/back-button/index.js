import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Backspace } from '../../icons/backspace-icon.svg';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="back-button absolute top-5 left-4 z-20 text-white flex items-center pr-4 py-3 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <Backspace fill="#FFF" className="w-12 h-6" />
      <h3 className="uppercase font-bold">Back</h3>
    </div>
  );
};

export default BackButton;
