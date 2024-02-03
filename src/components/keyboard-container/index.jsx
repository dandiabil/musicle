import React from 'react';
import clsx from 'clsx';

const LETTERS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

// eslint-disable-next-line no-unused-vars
const KeyboardContainer = ({ onClick, backspaceHandle, enterHandle, guessAnswer, selectedSong }) => {
  return (
    <div>
      {LETTERS.map((item, idx) => (
        <div className="flex gap-1 justify-center mb-1" key={idx}>
          {idx === 2 && (
            <div
              className="px-4 rounded-md bg-gray flex items-center justify-center cursor-pointer"
              onClick={enterHandle}
            >
              <h1 className="text-lg font-bold text-black">ENTER</h1>
            </div>
          )}
          {item
            .toUpperCase()
            .split('')
            .map((letter, id) => (
              <>
                <div
                  key={`${letter}+${id}`}
                  onClick={onClick}
                  className={clsx(
                    'w-[60px] h-[60px] rounded-md flex items-center justify-center cursor-pointer',
                    selectedSong?.find((item) => item.value === letter.toLowerCase())?.status === 'GUESSED'
                      ? 'bg-[#28CF59]'
                      : selectedSong?.find((item) => item.value === letter.toLowerCase())?.status === 'ALMOST_GUESSED'
                      ? 'bg-[#FF9111]'
                      : 'bg-gray',
                  )}
                >
                  <h1 className="text-4xl font-bold text-black">{letter}</h1>
                </div>
              </>
            ))}

          {idx === 2 && (
            <div
              className="px-4 rounded-md bg-gray flex items-center justify-center cursor-pointer"
              onClick={backspaceHandle}
            >
              <h1 className="text-lg font-bold text-black">BACKSPACE</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(KeyboardContainer);
