export const processSongTrack = (track) => {
  return track
    .replace(/\s/g, '')
    .split('')
    .map((letter, idx) => {
      if (letter == ' ') {
        return;
      }
      return {
        status: 'NOT_GUESSED',
        value: letter.toLowerCase(),
        id: idx,
      };
    });
};
