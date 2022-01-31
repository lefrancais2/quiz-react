import { createContext, useEffect, useRef, useState } from "react";
import { countries } from "../data/countries";
import { selectNumbers } from "../helpers/random";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const answers = [];
  const questions = [];

  for (let i = 0; i < 4; i++) {
    questions.push(selectNumbers(countries.length));
    answers.push(Math.floor(Math.random() * 4));
  }

  const letters = ["A", "B", "C", "D"];

  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  //   const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("count,count", count);
    if (count === 3) {
      setDisableBtn(true);
    }
    return () => {};
  }, [count]);

  const data = {
    letters,
    questions,
    answers,
    setCount,
    count,
    disableBtn,
    // score,
    // setScore,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export { GameProvider };

export default GameContext;
