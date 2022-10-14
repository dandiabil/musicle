export const processSongTrack = (track) => {
  const store = [];
  let innerStore = [];
  let index = 0;
  track.split('').map((letter, idx) => {
    if (letter === ' ') {
      store.push(innerStore);
      innerStore = [];
      index--;
    } else if (idx === track.length - 1) {
      innerStore.push({ value: letter, id: index });
      store.push(innerStore);
    } else {
      innerStore.push({ value: letter, id: index });
    }
    index++;
  });

  return { title: store, length: index };
};
