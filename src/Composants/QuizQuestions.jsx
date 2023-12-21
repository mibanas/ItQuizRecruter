import React from 'react'
import '../Styles/quizQuestions.css'



const QuizQuestions = ({quizType}) => {
  return (
    <div className="content">
        <small id="timer">29</small>
        <h2>Quels outils et frameworks préférez-vous pour le développement frontend?</h2>
        <div>
            <div className="choice">
                <input type="checkbox" name="same" id="first" />
                <label for="first">ReactJs</label>
            </div>
            <div className="choice">
                <input type="checkbox" name="same" id="second" />
                <label for="second">Angular</label>
            </div>
            <div className="choice">
                <input type="checkbox" name="same" id="third" />
                <label for="third">VueJS</label>
            </div>
        </div>
        <button>Submit</button>
    </div>
  )
}

export default QuizQuestions