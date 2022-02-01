import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../context/GameContext";
import { countries } from "../data/countries";
import {
  addArticleClass,
  addHide,
  answerCorrect,
  removeArticleClass,
} from "../helpers/inputElement";
import InfoGame from "./InfoGame";

import Option from "./Option";
import Subtitle from "./Subtitle";

let initialSecond = 15;

const Game = () => {
  console.log("viendo", countries[98]);
  console.log("viendo", countries[33]);
  console.log("viendo", countries[0]);
  const { questions, answers, setCount, count, disableBtn, whatRegions } =
    useContext(GameContext);

  const [selectAnswer, setSelectAnswer] = useState(false);
  const [myIndex, setMyIndex] = useState(null);
  const [score, setScore] = useState(0);

  const $timer = useRef();
  const $infoGame = useRef();
  const $questionGame = useRef();

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

      removeArticleClass();
    }

    return () => clearInterval(countDown);
  }, [selectAnswer]);

  const handleBtn = (e) => {
    e.preventDefault();

    if (disableBtn) {
      $questionGame.current.classList.add("none");
      $infoGame.current.classList.remove("none");
      return;
    }
    if (!selectAnswer) return;

    setCount(count + 1);
    setSelectAnswer(false);

    addHide();
    addArticleClass();

    let $elements = document.querySelectorAll(".article-option");
    for (let i = 0; i < $elements.length; i++) {
      $elements[i].classList.remove("wrong-answer");
      $elements[i].classList.remove("correct-answer");
    }
  };

  return (
    <div className="body">
      <section>
        <aside className="block-header">
          <h1 className="title">COUNTRY QUIZ</h1>
          <div>
            <p className="count-game">{count + 1}/16</p>
          </div>
          <div>
            <p className="block-timer">
              <span className="material-icons">alarm</span>
              <span ref={$timer} className="seconds"></span>
            </p>
          </div>
        </aside>
        <section className="main">
          <section ref={$questionGame} className="game">
            <div>
              {count <= 7 && (
                <Subtitle
                  title={`${
                    countries[questions[count][answers[count]]].capital
                  } es la capital de...`}
                  flag={false}
                />
              )}
              {count > 7 && count < 12 && (
                <Subtitle
                  title={`¿Qué país es de ${whatRegions[count - 8]}?`}
                  flag={false}
                />
              )}
              {count > 11 && (
                <Subtitle
                  title={`¿A qué país pertenece esta bandera?`}
                  flag={countries[questions[count][answers[count]]].flags.svg}
                />
              )}
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

          <InfoGame score={score} infoGame={$infoGame} />
        </section>
      </section>
    </div>
  );
};

export default Game;
