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
            <img src={wrong} alt="" />
          ) : score <= 5 ? (
            <img src={notBad} />
          ) : score >= 6 ? (
            <img src={win} />
          ) : (
            <img src="" alt="No se pudo cargar la imagen" />
          )}
        </figure>
      </div>
      <div className="results">
        <h3>Results</h3>
        <p>
          you got <span>{score}</span> correct answer{" "}
        </p>
        <div>
          <button onClick={handleAgain}>try again</button>
        </div>
      </div>
    </section>
  );
};

export default InfoGame;
