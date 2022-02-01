import React from "react";
import win from "../assets/youwin.gif";
import wrong from "../assets/wrong.gif";
import notBad from "../assets/notBad.gif";

const InfoGame = ({ score, infoGame }) => {
  const handleAgain = () => {
    window.location.reload();
  };
  return (
    <section ref={infoGame} className="info-game none">
      <div className="image">
        <figure>
          {score <= 2 ? (
            <img src={wrong} alt="wrong_answer" />
          ) : score <= 7 ? (
            <img src={notBad} alt="not_bad" />
          ) : score >= 8 ? (
            <img src={win} alt="you_win" />
          ) : (
            <img src="" alt="No se pudo cargar la imagen" />
          )}
        </figure>
      </div>
      <div className="results">
        <h3>Results</h3>
        <p>
          You got <span>{score}</span> correct answer{" "}
        </p>
        <div>
          <button onClick={handleAgain}>try again</button>
        </div>
      </div>
    </section>
  );
};

export default InfoGame;
