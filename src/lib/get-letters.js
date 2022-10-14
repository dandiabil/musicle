import { useEffect, useState } from 'react';

export function useGetLetters() {
  const LETTERS = 'qwertyuiopasdfghjklzxcvbnm';
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);

  useEffect(() => {
    LETTERS.split('').map((i, idx) => {
      if (idx < 10) {
        setFirstRow((prev) => [...prev, i.toUpperCase()]);
      } else if (idx > 9 && idx < 19) {
        setSecondRow((prev) => [...prev, i.toUpperCase()]);
      } else if (idx > 18) {
        setThirdRow((prev) => [...prev, i.toUpperCase()]);
      }
    });

    return () => {
      setSecondRow([]);
      setFirstRow([]);
      setThirdRow([]);
    };
  }, []);

  return { firstRow, secondRow, thirdRow };
}
