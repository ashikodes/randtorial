import React, { useEffect, useState, useContext } from 'react';
import CharArrayContext from 'contexts/charArray';

function Character() {
  const charArray = useContext(CharArrayContext);
  let [idx, setIdx] = useState(0);
  const [pause, setPause] = useState(false);

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
    }, 2000);

    if (pause) clearInterval(intervalID);

    return () => clearInterval(intervalID);
  }, [charArray, pause]);

  return (
    <>
      <button
        onClick={() => setPause(!pause)}
        className={`number ${pause ? 'active' : ''}`}
      >
        {charArray[idx] || charArray[0]}
      </button>
    </>
  );
}

export default Character;
