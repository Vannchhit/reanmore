import React from "react";
import Greeting from "./components/Greeting";
import Name from "./components/Name";
import Message from "./components/Message";
import "./App.css";

// Functional component with JSX returned properly
function App () {
  return (
    <div>
      <h2>
        <Greeting />
      </h2>
      <h2>
        <Name />
      </h2>
      <h3><Message/></h3>
    </div>
  );
};

export default App;
