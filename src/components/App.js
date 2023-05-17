
//import React from "react";
import './../styles/App.css';

import React, { useState } from 'react';


 const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={handleClick}>Click Me</button>
      <p>Button clicked {count} times.</p>
    </div>
  )
}

export default App;
