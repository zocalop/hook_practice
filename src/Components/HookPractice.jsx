
 

import React, { useState } from 'react';

function ClickCounter() {
  const [diceFaces, setDiceFaces] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [placeholder, setPlaceholder] = useState(`Your die has ${diceFaces} faces.`);
  const [value, setValue] = useState();
  const random = Math.floor(Math.random() * diceFaces) + 1;
  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  const [roll, setRoll] = useState(random);
  const playAgain = () => {
    setClicks(0);
    setRoll(random);
  };
  const changeHandler = () => {
    setClicks(0);
    setRoll(random);
    setPlaceholder(`Your die has ${diceFaces} faces.`);
    setDiceFaces(value);
  };  

  return (
    <div>
      <p>You rolled a {roll}</p>
      <button onClick={clicks > roll ? playAgain : handleClicks}>
        {clicks > roll ? "Play again" : " Click me"}
      </button>

      {clicks > roll ? (
        <p>You died.
        Would you like to play again?</p>
        ) : (    
        <p>You clicked {clicks} times.</p>
      )}   
      <form>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
	  placeholder={placeholder}
        />
        <div></div>
        <button type="button" onClick={changeHandler}>
          Change Dice
        </button>
      </form>
    </div>
  )
};

export default ClickCounter;


