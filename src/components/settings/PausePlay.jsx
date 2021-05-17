import React from 'react';

import PauseIcon from 'assets/svg/pause.svg';

function PausePlay(props) {
  return (
    <button className="settings-button">
      <PauseIcon />
    </button>
  );
}

export default PausePlay;
