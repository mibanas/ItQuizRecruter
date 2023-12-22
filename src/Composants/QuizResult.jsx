import React from 'react'

const QuizResult = ({finalScore}) => {
  return (
    <div>
        <h3>Quiz Results</h3>
        <h3>{finalScore}</h3>
        {/* Affichez les résultats du quiz ici */}
  </div>
  )
}

export default QuizResult