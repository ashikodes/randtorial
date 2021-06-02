import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import CharArrayContext from 'contexts/charArray';
import Character from 'components/Character';
import CharRange from 'components/settings/CharRange';
import CharType from './components/settings/CharType';

import AppIcon from 'assets/svg/app-icon.svg';
import getRange from './utils/getRange';

import 'scss/style.scss';

function App() {
  const [lowerRange, setLowerRange] = useState(1);
  const [upperRange, setUpperRange] = useState(5);

  const [charArray, setCharArray] = useState(getRange(lowerRange, upperRange));
  useEffect(() => {
    setCharArray(getRange(lowerRange, upperRange));
  }, [lowerRange, upperRange]);

  return (
    <CharArrayContext.Provider value={charArray}>
      <div className="container-header">
        <AppIcon className="app-icon" />
        <h1 className="header-text">
          <span className="text-random">Random</span>
          <span className="text-character">Numbers</span>
        </h1>
      </div>
      <Character />
      <CharRange
        lowerRange={lowerRange}
        setLowerRange={setLowerRange}
        upperRange={upperRange}
        setUpperRange={setUpperRange}
      />
    </CharArrayContext.Provider>
  );
}

render(<App />, document.getElementById('root'));
