import React, { useState } from 'react'
import QuizStarter from '../Composants/QuizStarter';
import QuizQuestions from '../Composants/QuizQuestions';
import QuizResult from '../Composants/QuizResult';

const Quiz = () => {
  const [quizType, setQuizType] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (type) => {
    setQuizType(type);
    setQuizStarted(true);
  };

  return (
    <div>
      {!quizStarted && <QuizStarter onStartQuiz={startQuiz} />}
      {quizStarted && <QuizQuestions quizType={quizType} />}
      {quizStarted && <QuizResult />}
  </div>
  )
}

export default Quiz