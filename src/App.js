import "./App.css";
import Title from "./Title.js";
import React from "react";

import Me from "./Me.js";
import Habilities from "./Habilities.js";
import Projects from "./Projects.js";
import Links from "./Links";

function App() {
  return (
    <div>
      <Title />
      <Me />
      <Habilities />
      <Projects />
      <Links />
    </div>
  );
}

export default App;
