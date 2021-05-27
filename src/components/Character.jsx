import React, { useEffect, useState, useContext } from 'react';
import CharArrayContext from 'contexts/charArray';

function Character() {
  const charArray = useContext(CharArrayContext);
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
    }, 2000);

    return () => clearInterval(intervalID);
  }, [charArray]);

  return (
    <>
      <span className="number">{charArray[idx] || charArray[0]}</span>
    </>
  );
}

export default Character;
