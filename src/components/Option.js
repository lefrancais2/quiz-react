import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../context/GameContext";

const Option = ({ name, index, setSelectAnswer, setMyIndex }) => {
  const $article = useRef();
  const $rightAnswer = useRef();

  const [thisIndex, setThisIndex] = useState(null);

  const { letters, answers, count } = useContext(GameContext);

  useEffect(() => {
    setThisIndex(index);
  });

  const handleSelect = (e) => {
    e.preventDefault();

    setSelectAnswer(true);
    setMyIndex(thisIndex);

    $article.current.classList.remove("article");

    if (index === answers[count]) {
      $article.current.classList.add("correct-answer");
      $rightAnswer.current.innerHTML = `<span class="material-icons">check_circle</span>`;
    } else {
      $article.current.classList.add("wrong-answer");
      $rightAnswer.current.innerHTML = `<span class="material-icons">cancel</span>`;
    }

    $rightAnswer.current.classList.remove("hide");
  };

  return (
    <article
      ref={$article}
      onClick={handleSelect}
      className="article-option article"
    >
      <div>
        <div>
          <span className="letter">{letters[index]}</span>
        </div>
        <div className="country-name">
          <p>{name}</p>
        </div>

        <div ref={$rightAnswer} className="right-answer"></div>
      </div>
    </article>
  );
};

export default Option;
