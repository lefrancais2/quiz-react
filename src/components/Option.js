import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../context/GameContext";

const Option = ({ check, name, index, setSelectAnswer, setMyIndex }) => {
  const $select = useRef();
  const $article = useRef();
  const $rightAnswer = useRef();

  //   const [go, setGo] = useState(false);
  const [thisIndex, setThisIndex] = useState(null);

  const { letters, answers, count } = useContext(GameContext);

  useEffect(() => {
    setThisIndex(index);
    //if (!go) return;
    // if (index === answers[count])
    //   $article.current.classList.add("correct-answer");
    // else $article.current.classList.add("wrong-answer");
    //setGo(false);
    //   }, [go]);
  });

  const handleSelect = (e) => {
    e.preventDefault();
    // setGo(true);
    setSelectAnswer(true);
    setMyIndex(thisIndex);

    if (index === answers[count]) {
      $article.current.classList.add("correct-answer");
    } else {
      $article.current.classList.add("wrong-answer");
    }

    $rightAnswer.current.classList.remove("hide");
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
        {/* <div className="right-answer">
          {go && <span className="material-icons">{check}</span>}
        </div> */}
        <div ref={$rightAnswer} className="right-answer hide">
          <span className="material-icons">{check}</span>
        </div>
      </div>
    </article>
  );
};

export default Option;
