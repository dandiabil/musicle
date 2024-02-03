import clsx from 'clsx';
import React from 'react';

const GuessContainer = ({ input, selectedSong, guessChance, guessAnswer }) => {
  return (
    <div className="flex gap-1 justify-center">
      {selectedSong.map((item, idx, arr) => (
        <div
          className={clsx(
            'w-[60px] h-[60px] rounded-md',
            guessAnswer?.length > 0
              ? guessAnswer[idx] === item.value
                ? 'bg-[#28CF59]'
                : arr?.find((char) => char.value === guessAnswer[idx])
                ? 'bg-[#FF9111]'
                : 'bg-gray/80'
              : guessChance
              ? 'bg-gray'
              : 'bg-[#353535]',
          )}
          key={idx}
        >
          {/* {console.log(guessAnswer?.find((char) => char === item.value))} */}
          <input
            // ref={inputRef}
            type="text"
            value={(guessAnswer ? guessAnswer[idx] : guessChance && input[idx]) || ''}
            readOnly
            className={clsx(
              'w-full h-full rounded-md bg-transparent text-center text-4xl font-bold text-white uppercase border-none outline-none cursor-default',
              guessAnswer?.length > 0 || guessChance ? 'text-black' : 'text-white',
            )}
            // onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export default GuessContainer;
