import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Character from 'components/Character';
import CharRange from 'components/settings/CharRange';
import AppIcon from 'assets/svg/app-icon.svg';

import CharArrayContext from 'contexts/charArray';

import 'scss/style.scss';
import getRange from './utils/getRange';

function App(props) {
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
        <h1>Randtorial</h1>
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
