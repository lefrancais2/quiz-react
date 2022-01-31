import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../context/GameContext";

const Option = ({ check, name, index, setSelectAnswer }) => {
  const $select = useRef();
  const $article = useRef();

  const [go, setGo] = useState(false);

  const { letters, correct } = useContext(GameContext);

  useEffect(() => {
    if (!go) return;
    if (index === correct) $article.current.classList.add("correct-answer");
    else $article.current.classList.add("wrong-answer");
  }, [go]);

  const handleSelect = (e) => {
    e.preventDefault();
    setGo(true);
    setSelectAnswer(true);
  };

  const handleOverDiv = (e) => {
    e.preventDefault();
    $article.current.classList.add("article-option-over");
  };

  const handleOutDiv = (e) => {
    e.preventDefault();
    $article.current.classList.remove("article-option-over");
  };

  return (
    <article
      ref={$article}
      onMouseOver={handleOverDiv}
      onMouseOut={handleOutDiv}
      onClick={handleSelect}
      className="article-option"
    >
      <div>
        <div>
          <span className="letter">{letters[index]}</span>
        </div>
        <div className="country-name">
          <p ref={$select}>{name}</p>
        </div>
        <div className="right-answer">
          {go && <span className="material-icons">{check}</span>}
        </div>
      </div>
    </article>
  );
};

export default Option;
