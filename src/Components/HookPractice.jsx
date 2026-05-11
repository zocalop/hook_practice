import React, { useState, useMemo } from 'react';

function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  const number = useMemo(() => {
    return Math.floor(Math.random() * 10) + 1;
  }, []);
  const [buttonText, setButtonText] = useState();
  const dice = useMemo(() => {
    return setButtonText("Click Me");
  }, []);

  return (
    <div>
      <p>You rolled a {number}</p>     

      <button onClick={() => setClicks(clicks + 1)}>
        {buttonText}
      </button>

      {clicks > number ? (
        setButtonText("Play again."),
        <p>You died.
        Would you like to play again?</p>
        ) : (    
        <p>You clicked {clicks} many times.</p>
      )}

    </div>
  );
}

export default ClickCounter;

