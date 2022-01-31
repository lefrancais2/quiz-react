import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../context/GameContext";
import { countries } from "../data/countries";
import Option from "./Option";

const Game = () => {
  const { country, correct } = useContext(GameContext);
  const [selectAnswer, setSelectAnswer] = useState(false);
  const $timer = useRef();

  let sec = 30;
  useEffect(() => {
    let countDown = setInterval(() => {
      if (!selectAnswer) {
        $timer.current.textContent = `${sec}`;
        sec -= 1;
      }
      if (sec < 0) {
        clearInterval(countDown);
      }
    }, 1000);

    if (selectAnswer) {
      clearInterval(countDown);
      let $elements = document.querySelectorAll(".article-option");
      for (let i = 0; i < $elements.length; i++) {
        if (i === correct) {
          $elements[i].classList.add("correct-answer");
          let $el = $elements[i].querySelector(".right-answer");
          $el.innerHTML = `<span class="material-icons">check_circle</span>`;
          break;
        }
      }
    }
    return () => clearInterval(countDown);
  }, [selectAnswer]);

  return (
    <div className="body">
      <section>
        <aside className="block-header">
          <h1 className="title">COUNTRY QUIZ</h1>
          <div>
            <p className="block-timer">
              <span className="material-icons">alarm</span>
              <span ref={$timer} className="seconds"></span>
            </p>
          </div>
        </aside>
        <section className="main">
          <div>
            <h3 className="subtitle">
              {countries[country[correct]].capital} es la capital de...
            </h3>
          </div>
          <section>
            {country.map((el, index) =>
              index === correct ? (
                <Option
                  key={index}
                  check="check_circle"
                  name={countries[el].translations.es}
                  index={index}
                  setSelectAnswer={setSelectAnswer}
                />
              ) : (
                <Option
                  key={index}
                  check="cancel"
                  name={countries[el].translations.es}
                  index={index}
                  setSelectAnswer={setSelectAnswer}
                />
              )
            )}
            {/* <Option check="check_circle" letter="A" name="Pais 1" />
            <Option check="cancel" letter="B" name="Pais 1" />
            <Option check="cancel" letter="C" name="Pais 1" />
            <Option check="cancel" letter="D" name="Pais 1" /> */}
          </section>
          <section className="btn-next">
            <button>Next</button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Game;
