import React from 'react';
import backImg from '../Assets/Img/back svg.png';
import frontImg from '../Assets/Img/front svg.png';
import fullImg from '../Assets/Img/fullsatck sv.png';
import "../Styles/quizStarter.css";

const QuizStarter = ({ beginQuiz }) => {
  const handleCardClick = (stackType) => {
    beginQuiz(stackType);
  };

  return (
    <div>
      <h1>Choisissez Votre Stack:</h1>
      <section className="cards">
        <div className="card" onClick={() => handleCardClick('fullStack')}>
          <img src={backImg} alt="" />
          <h2>Full Stack</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eveniet, r</p>
        </div>
        <div className="card" onClick={() => handleCardClick('frontEnd')}>
          <img src={frontImg} alt="" />
          <h2>Front End</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicin gelit. Dolorume veniet,r</p>
        </div>
        <div className="card" onClick={() => handleCardClick('backEnd')}>
          <img src={fullImg} alt="" />
          <h2>Back End</h2>
          <p>Lorem ipsumdolo rsitamet,cons ectetur adipisici ngelit.Dolor umevenie t,r</p>
        </div>
      </section>
    </div>
  );
};

export default QuizStarter;
