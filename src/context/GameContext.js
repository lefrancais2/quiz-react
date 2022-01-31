import { createContext, useEffect, useRef, useState } from "react";
import { countries } from "../data/countries";
import { selectNumbers } from "../helpers/random";

const GameContext = createContext();

const answers = [];
const questions = [];

const GameProvider = ({ children }) => {
  for (let i = 0; i < 4; i++) {
    questions.push(selectNumbers(countries.length));
    answers.push(Math.floor(Math.random() * 4));
  }

  const letters = ["A", "B", "C", "D"];

  const [count, setCount] = useState(0);

  const data = {
    letters,
    questions,
    answers,
    setCount,
    count,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export { GameProvider };

export default GameContext;
