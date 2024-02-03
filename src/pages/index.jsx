import React, { useEffect, useState } from 'react';
import Thumbnail from '../components/thumbnail';
import GuessContainer from '../components/guess-container';
import { processSongTrack } from '../lib/process-track';
import DATA from '../data/DUMMY_DATA.json';
import KeyboardContainer from '../components/keyboard-container';
import { checkAnswer } from '../lib/check-answer';

const HomePage = () => {
  const [guessChances, setGuessChances] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [gameOver, setGameOver] = useState(false);
  const [guessAnswer, setGuessAnswer] = useState([]);
  const [input, setInput] = useState([]);
  const [selectedSong, setSelectedSong] = useState([]);
  const songLength = selectedSong.length - selectedSong.filter((i) => i.value === '').length;

  useEffect(() => {
    if (selectedSong.length > 0) return;
    setSelectedSong(processSongTrack(DATA[0].title));
  }, []);

  const keyboardHandler = (e) => {
    if (input.length === songLength) return;
    setInput((prev) => [...prev, e.target.innerText.toLowerCase()]);
  };

  const enterHandle = () => {
    if (input.length !== songLength) return;
    // check for answer
    const answer = checkAnswer(
      input,
      selectedSong.map((item) => item.value),
    );
    setSelectedSong((prev) =>
      prev.map((item, idx) =>
        answer.length > 0
          ? answer.find((chr) => chr === item.value)
            ? answer[idx] === item.value
              ? { ...item, status: 'GUESSED' }
              : { ...item, status: 'ALMOST_GUESSED' }
            : item
          : item,
      ),
    );

    setGuessAnswer((prev) => [...prev, input]);

    if (answer.length === songLength) {
      setGameOver(true);
      return;
    }

    setGuessChances((prev) => prev + 1);
    setInput([]);
  };

  const backspaceHandle = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-[#180006] h-full overflow-auto relative">
      <div className="">
        <header className="h-[106px] bg-[#370A16] px-4">
          <div className="max-w-7xl w-full mx-auto h-full flex items-center">
            <h1 className="neon-sign text-purple-100 text-[32px]">MUSIC.LE</h1>
          </div>
        </header>
        <div className="grid grid-cols-2 max-w-7xl mx-auto items-center h-[500px]">
          <div className="mr-20 w-fit ml-auto">
            <Thumbnail />
          </div>
          <div className="w-fit ml-20 mr-auto flex flex-col gap-2">
            {Array.from({ length: 5 }, (_, i) => i).map((_, idx) => (
              <GuessContainer
                key={idx}
                selectedSong={selectedSong}
                input={input}
                guessChance={guessChances === idx}
                guessAnswer={guessAnswer[idx]}
              />
            ))}
          </div>
        </div>
        <div>
          <KeyboardContainer
            onClick={keyboardHandler}
            backspaceHandle={backspaceHandle}
            enterHandle={enterHandle}
            selectedSong={selectedSong}
            guessAnswer={guessAnswer}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
