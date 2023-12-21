import React from 'react'
import backImg from '../Assets/Img/back svg.png'
import frontImg from '../Assets/Img/front svg.png'
import fullImg from '../Assets/Img/fullsatck sv.png'

import "../Styles/quizStarter.css"

const QuizStarter = ( {onStartQuiz} ) => {
  return (
    <div>
      <body>
    <h1>Choisissez Votre Stack:</h1>
    <section class="cards">
        <div class="card">
            <img src={backImg} alt="" />
            <h2>Full Stack</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eveniet, r</p>
        </div>
        <div class="card">
            <img src={frontImg} alt="" />
            <h2>Front End</h2>
            <p>Lorem ipsum dolor sit amet,consectetur adipisicin gelit. Dolorume veniet,r</p>
        </div>
        <div class="card">
            <img src={fullImg} alt="" />
            <h2>Back End</h2>
            <p>Lorem ipsumdolo rsitamet,cons ectetur adipisici ngelit.Dolor umevenie t,r</p>
        </div>
    </section>
</body>
    </div>
  )
}

export default QuizStarter