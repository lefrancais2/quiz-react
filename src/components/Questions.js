import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../context/GameContext";
import { countries } from "../data/countries";
import { addHide, answerCorrect } from "../helpers/inputElement";

import Option from "./Option";

let initialSecond = 5;

const Questions = () => {
  const { questions, answers, setCount, count, disableBtn } =
    useContext(GameContext);

  const [selectAnswer, setSelectAnswer] = useState(false);
  const [myIndex, setMyIndex] = useState(null);
  const [score, setScore] = useState(0);

  const $timer = useRef();

  let sec = initialSecond;
  useEffect(() => {
    let countDown = setInterval(() => {
      if (!selectAnswer) {
        $timer.current.textContent = `${sec}`;
        sec -= 1;
      }
      if (sec < 0) {
        clearInterval(countDown);
        answerCorrect(".article-option", answers, count);
        sec = initialSecond;
        setSelectAnswer(true); //
      }
    }, 1000);

    if (selectAnswer) {
      clearInterval(countDown);
      if (myIndex !== answers[count])
        answerCorrect(".article-option", answers, count);

      if (myIndex === answers[count]) setScore(score + 1);

      sec = initialSecond;
    }

    return () => clearInterval(countDown);
  }, [selectAnswer]);

  const handleBtn = (e) => {
    e.preventDefault();

    if (disableBtn) return;
    if (!selectAnswer) return;

    setCount(count + 1);
    setSelectAnswer(false);

    addHide();

    let $elements = document.querySelectorAll(".article-option");
    for (let i = 0; i < $elements.length; i++) {
      $elements[i].classList.remove("wrong-answer");
      $elements[i].classList.remove("correct-answer");
    }
  };
  return (
    <section className="game">
      <div>
        <h3 className="subtitle">
          {countries[questions[count][answers[count]]].capital} es la capital
          de...
        </h3>
      </div>

      <section>
        {questions[count].map((el, index) =>
          index === answers[count] ? (
            <Option
              key={index}
              name={countries[el].translations.es}
              index={index}
              setSelectAnswer={setSelectAnswer}
              setMyIndex={setMyIndex}
            />
          ) : (
            <Option
              key={index}
              name={countries[el].translations.es}
              index={index}
              setSelectAnswer={setSelectAnswer}
              setMyIndex={setMyIndex}
            />
          )
        )}
      </section>
      <section className="btn-next">
        <button onClick={handleBtn}>Next</button>
      </section>
    </section>
  );
};

export default Questions;
