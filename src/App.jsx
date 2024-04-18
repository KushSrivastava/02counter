import { useState } from "react";

import "./App.css";

function App() {
  //let counter = 15;
  const [counter, setcounter] = useState(15);
  const addvalue = () => {
    // counter = counter + 1;
    //console.log(counter);
    setcounter((prevcount) => prevcount + 1);
    setcounter((prevcount) => prevcount + 1);
  };

  const removevalue = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>React COurse {counter}</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addvalue}>Add Value</button>{" "}
      <button onClick={removevalue}>remove value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
