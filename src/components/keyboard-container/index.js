import React, { useEffect } from 'react';
import { Backspace, Enter } from '../../../public/icons';
import { useGetLetters } from '../../lib/get-letters';

const KeyboardContainer = ({ onClick, backspaceHandle, enterHandle }) => {
  const { firstRow, secondRow, thirdRow } = useGetLetters();

  return (
    <div>
      <div className="flex gap-1 justify-center mb-1">
        {firstRow.map((item, i) => (
          <div
            key={i}
            onClick={onClick}
            className="keyboard-container w-[60px] h-[60px] rounded-md bg-gray flex items-center justify-center cursor-pointer"
          >
            <h1 className="text-4xl font-bold text-black">{item}</h1>
          </div>
        ))}
      </div>
      <div className="flex gap-1 justify-center mb-1">
        {secondRow.map((item, i) => (
          <div
            key={i}
            onClick={onClick}
            className="keyboard-container w-[60px] h-[60px] rounded-md bg-gray flex items-center justify-center cursor-pointer"
          >
            <h1 className="text-4xl font-bold text-black">{item}</h1>
          </div>
        ))}
      </div>
      <div className="flex gap-1 justify-center">
        <div
          className="keyboard-container px-4 rounded-md bg-gray flex items-center justify-center cursor-pointer"
          onClick={enterHandle}
        >
          <Enter />
        </div>
        {thirdRow.map((item, i) => (
          <div
            key={i}
            onClick={onClick}
            className="keyboard-container w-[60px] h-[60px] rounded-md bg-gray flex items-center justify-center cursor-pointer"
          >
            <h1 className="text-4xl font-bold text-black">{item}</h1>
          </div>
        ))}
        <div
          className="keyboard-container px-4 rounded-md bg-gray flex items-center justify-center cursor-pointer"
          onClick={backspaceHandle}
        >
          <Backspace fill="#1A1A1A" />
        </div>
      </div>
    </div>
  );
};

export default KeyboardContainer;
