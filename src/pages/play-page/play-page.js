import React, { useEffect, useRef, useState } from 'react';
import BackButton from '../../components/back-button';
import GuessContainer from '../../components/guess-container';
import KeyboardContainer from '../../components/keyboard-container';
import Thumbnail from '../../components/thumbnail';
// import { useAppContext } from '../../context';
import DATA from '../../data/DUMMY_DATA.json';
import { processSongTrack } from '../../lib/process-track';

const PlayPage = () => {
  // const { showSpinner, setShowSpinner } = useAppContext();
  const inputRef = useRef();
  const [input, setInput] = useState([]);
  const { title, length } = processSongTrack(DATA[0]?.title);

  useEffect(() => {
    if (!input) return;
    console.log(input);
  }, [input]);

  const keyboardHandler = (e) => {
    if (input.length === length) return;
    setInput((prev) => [...prev, e.target.innerText]);
    // console.log(e.target.innerText);
  };

  const enterHandle = () => {
    if (input.length !== length) return;
    console.log('enter clicked');
  };

  const backspaceHandle = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="z-10 max-w-5xl mx-auto">
      <BackButton />
      <header className="uppercase font-bold flex items-center justify-around w-full gap-14 mb-[76px]">
        <h1 className="neon-sign text-5xl">Now Playing</h1>
        <h1 className="text-4xl bg-slate-300/20 border-[1px] border-gray rounded-md text-center py-2 px-8 text-white">
          TOP 50 GLOBAL
        </h1>
      </header>
      <div>
        <div className="mb-14">
          <Thumbnail />
        </div>
        <div className="mb-10 flex gap-6 justify-center">
          {title.map((row, idx) => {
            return (
              <div key={idx} className="flex gap-1">
                {row.map((letter) => {
                  return (
                    <GuessContainer key={letter.id} value={letter.value} input={input[letter.id]} inputRef={inputRef} />
                  );
                })}
              </div>
            );
          })}
          {/* <div className="flex gap-1">
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
          </div>
          <div className="flex gap-1">
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
            <GuessContainer letter={'A'} />
          </div> */}
        </div>
        <div>
          <KeyboardContainer onClick={keyboardHandler} backspaceHandle={backspaceHandle} enterHandle={enterHandle} />
        </div>
      </div>
    </div>
  );
};

export default PlayPage;
