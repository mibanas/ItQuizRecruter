import React, { useState } from 'react'
import QuizStarter from '../Composants/QuizStarter';
import QuizQuestions from '../Composants/QuizQuestions';
import QuizResult from '../Composants/QuizResult';
import data from '../Data/Question'

const Quiz = () => {
  const [quizType, setQuizType] = useState(null);
  const [quizFinish, setQuizFinish] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (type) => {
    setQuizType(type);
    setQuizStarted(true);
  };

  return (
    <div>
      {!quizStarted && <QuizStarter beginQuiz={startQuiz} />}
      {quizStarted && <QuizQuestions quizType={quizType}  />}
      {!quizFinish && <QuizResult />}
  </div>
  )
}

export default Quiz