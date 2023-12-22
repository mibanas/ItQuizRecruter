import React from 'react'
import "../Styles/quizResults.css"


const QuizResult = ({finalScore}) => {
  return (
    <div className='finalScore'>
        <h3>Quiz Results:</h3>
        <h3 id='lastscore'>{finalScore}/12</h3>
        {/* Affichez les résultats du quiz ici */}

  </div>
  )
}

export default QuizResult