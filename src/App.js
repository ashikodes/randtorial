import React from 'react';
import { render } from 'react-dom';
import Character from 'components/Character';
import PausePlay from 'components/settings/PausePlay';
import AppIcon from 'assets/svg/app-icon.svg';

import 'scss/style.scss';

function App(props) {
  return (
    <>
      <div className="container-header">
        <AppIcon className="app-icon" />
        <h1>Randtorial</h1>
      </div>
      <Character />
      <PausePlay />
    </>
  );
}

render(<App />, document.getElementById('root'));
