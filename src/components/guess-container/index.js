import clsx from 'clsx';
import React, { useState } from 'react';

const GuessContainer = ({ value, onChange, input = '', inputRef }) => {
  const [hideLetter, setHideLetter] = useState(false);
  const rightValue = value;

  return (
    <div className="guess-container w-[60px] h-[60px] rounded-md bg-[#353535]">
      {/* <h1 className={clsx('text-4xl font-bold text-white uppercase', hideLetter && 'hidden')}>{letter}</h1> */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        readOnly
        className={clsx(
          'w-full h-full rounded-md bg-transparent text-center text-4xl font-bold text-white uppercase border-none outline-none',
          // hideLetter && 'hidden',
        )}
        onChange={onChange}
      />
    </div>
  );
};

export default GuessContainer;
