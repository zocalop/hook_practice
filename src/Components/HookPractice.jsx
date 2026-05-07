import React, { useState } from 'react';

function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <p>You clicked {clicks} many times.</p>
      <button onClick={() => setClicks(clicks + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default ClickCounter;

