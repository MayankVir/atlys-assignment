import React, { useState, useEffect, useRef, useContext } from "react";
import FunctionCard from "./components/FunctionCard/FunctionCard";
import ConnectionLines from "./components/ConnectionLines";
import { FunctionData } from "./types/types";
import "./App.css";
import AppContextProvider, { AppContext } from "./context/appContext";

const App: React.FC = () => {
  const { functions } = useContext(AppContext);

  return (
    <div className="app">
      <div className="cards-container">
        {functions.map((func) => (
          <FunctionCard
            key={func.id}
            id={func.id}
            equation={func.equation}
            input={func.input}
            output={func.output}
          />
        ))}
      </div>
      <ConnectionLines functions={functions} />
    </div>
  );
};

export default App;
