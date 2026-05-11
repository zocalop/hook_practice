

import React, { useState, useMemo } from 'react';

function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  const [dice, setDice] = useState(Math.floor(Math.random() * 10) + 1);
  const playAgain = () => {
    setClicks(0);
    setDice(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <div>
      <p>You rolled a {dice}</p>     

      <button onClick={clicks > dice ? playAgain : handleClicks}>
        {clicks > dice ? "Play again" : " Click me"}
      </button>

      {clicks > dice ? (
        <p>You died.
        Would you like to play again?</p>
        ) : (    
        <p>You clicked {clicks} many times.</p>
      )}

    </div>
  );
}

export default ClickCounter;

