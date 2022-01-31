import React, { useContext, useEffect, useRef } from "react";
import GameContext from "../context/GameContext";

const Option = ({ check, name, index }) => {
  const $select = useRef();
  const $article = useRef();

  const { letters, selected } = useContext(GameContext);

  useEffect(() => {
    if (!selected) return;
    $article.current.classList.add("correct-answer");
  }, [selected]);

  const handleSelect = (e) => {
    e.preventDefault();
  };

  return (
    <article ref={$article} onClick={handleSelect} className="article-option">
      <div>
        <div>
          <span className="letter">{letters[index]}</span>
        </div>
        <div className="country-name">
          <p ref={$select}>{name}</p>
        </div>
        <div>{selected && <span className="material-icons">{check}</span>}</div>
      </div>
    </article>
  );
};

export default Option;
