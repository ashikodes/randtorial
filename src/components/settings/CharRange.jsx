import React, { useState } from 'react';

import ArrowUp from 'assets/svg/arrow-up.svg';
import ArrowDown from 'assets/svg/arrow-down.svg';
import Dots from 'assets/svg/dots.svg';

function CharRange({ lowerRange, setLowerRange, upperRange, setUpperRange }) {
  return (
    <div class="char-range">
      <div className="value-range">
        <button
          className="settings-button"
          onClick={() =>
            setLowerRange(value => {
              return upperRange - value > 1 ? value + 1 : value;
            })
          }
        >
          <ArrowUp />
        </button>
        {lowerRange}
        <button
          className="settings-button"
          onClick={() =>
            setLowerRange(value => {
              return value > 1 ? value - 1 : value;
            })
          }
        >
          <ArrowDown />
        </button>
      </div>
      <span className="separator">
        <Dots />
      </span>
      <div className="value-range">
        <button
          className="settings-button"
          onClick={() =>
            setUpperRange(value => {
              return value < 100 ? value + 1 : value;
            })
          }
        >
          <ArrowUp />
        </button>
        {upperRange}
        <button
          className="settings-button"
          onClick={() =>
            setUpperRange(value => {
              return value - lowerRange > 1 ? value - 1 : value;
            })
          }
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
}

export default CharRange;
