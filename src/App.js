import React from 'react';
import { render } from 'react-dom';
import Character from './components/Character';
import appLogo from 'assets/images/app-logo.png';

import 'scss/style.scss';

function App(props) {
  return (
    <>
      <img src={appLogo} alt="The Logo" />
      <Character />
    </>
  );
}

render(<App />, document.getElementById('root'));
