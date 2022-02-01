import { createContext, useEffect, useRef, useState } from "react";
import { countries } from "../data/countries";
import { questionsRegions, questionsReally } from "../helpers/random";

const GameContext = createContext();
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const letters = ["A", "B", "C", "D"];

const firstMax = 8;
const max = 16;

const GameProvider = ({ children }) => {
  const answers = [],
    questions = [],
    whatRegions = [];

  // for (let i = 0; i < firstMax; i++) {
  //   questions.push(selectNumbers(countries.length, 4));
  //   answers.push(Math.floor(Math.random() * 4));
  // }
  questionsReally(0, firstMax, questions, answers, countries);

  questionsRegions(regions, whatRegions, answers, questions, countries);

  // for (let i = firstMax; i < max - 4; i++) {
  //   let aux = Math.floor(Math.random() * 5);
  //   let continentes =
  //     regions[aux] === "Americas"
  //       ? "America"
  //       : regions[aux] === "Europe"
  //       ? "Europa"
  //       : regions[aux];
  //   whatRegions.push(continentes);
  //   answers.push(Math.floor(Math.random() * 4));
  //   questions.push(
  //     selectCountriesByRegion(countries, answers[i], regions[aux])
  //   );
  // }

  questionsReally(12, 16, questions, answers, countries);

  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    if (count === max - 1) {
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
    whatRegions,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export { GameProvider };

export default GameContext;
