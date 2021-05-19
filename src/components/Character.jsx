import React, { useEffect, useState } from 'react';

function Character() {
  const charArray = [1, 2, 3, 4, 5];
  let [idx, setIdx] = useState(0);

  useEffect(() => {
    let intervalID = setInterval(() => {
      const newIdx = parseInt(Math.random() * charArray.length);

      if (idx === 0 && newIdx === 0) {
        idx = charArray.length - 1;
      } else if (idx === newIdx) {
        idx = 0;
      } else {
        idx = newIdx;
      }

      setIdx(idx);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <span className="number">{charArray[idx]}</span>
    </>
  );
}

export default Character;
