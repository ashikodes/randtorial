import React from 'react';
import { render } from 'react-dom';
import Character from './components/Character';

import 'scss/style.scss';

function App(props) {
  return (
    <>
      <Character />
    </>
  );
}

render(<App />, document.getElementById('root'));
