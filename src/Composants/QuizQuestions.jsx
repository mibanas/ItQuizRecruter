import React, { useState } from 'react'
import '../Styles/quizQuestions.css'

const QuizQuestions = ({quizType}) => {
  return (

    <div className="content">
        <small id="timer">29</small>
        <h2>Quels outils et frameworks préférez-vous pour le développement frontend?</h2>
        <div >
            <div className="choice">
                <input type="checkbox" name="same" id="first" />
                <label for="first">ReactJs</label>
            </div>
            <div className="choice">
                <input type="checkbox" name="same" id="first" />
                <label for="first">ReactJs</label>
            </div>
            <div className="choice">
                <input type="checkbox" name="same" id="first" />
                <label for="first">ReactJs</label>
            </div>
            <div className="choice">
                <input type="checkbox" name="same" id="first" />
                <label for="first">ReactJs</label>
            </div>
        </div>
        <button>Submit</button>
    </div>
  )
}

export default QuizQuestions