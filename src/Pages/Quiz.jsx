import React, { useState } from 'react'
import QuizStarter from '../Composants/QuizStarter';
import QuizQuestions from '../Composants/QuizQuestions';
import QuizResult from '../Composants/QuizResult';
import data from '../Data/Question'
import '../Styles/quiz.css'


const Quiz = () => {
  const [quizType, setQuizType] = useState(null);
  const [quizFinish, setQuizFinish] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const startQuiz = (type) => {
    setQuizType(type);
    setQuizStarted(true);
  };

  const score = (MyScore) => {
    setCorrectAnswers((correctAnswers) => correctAnswers + MyScore)
  }

  const showScore = () => {
    setQuizFinish(!quizFinish)
  }

  return (
    <div >
      {!quizStarted && <QuizStarter beginQuiz={startQuiz} />}
      {(quizStarted && !quizFinish) && <QuizQuestions quizType={quizType} updateScore={score} finishQuiz={showScore} />}
      {(quizStarted && quizFinish) && <QuizResult finalScore={correctAnswers} />}
  </div>
  )
}

export default Quiz