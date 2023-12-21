import React from 'react'

const QuizStarter = ( {onStartQuiz} ) => {
  return (
    <div>
    <h2>Choose Quiz Type</h2>
        <button onClick={() => onStartQuiz('quiz1')}>Quiz 1</button>
        <button onClick={() => onStartQuiz('quiz2')}>Quiz 2</button>
        <button onClick={() => onStartQuiz('quiz3')}>Quiz 3</button>
  </div>
  )
}

export default QuizStarter