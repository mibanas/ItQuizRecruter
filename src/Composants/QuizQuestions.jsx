import React, { useState } from 'react';
import '../Styles/quizQuestions.css';
import data from '../Data/Question';

const QuizQuestions = ({ quizType }) => {
    const mydata = data[quizType]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = mydata[currentQuestionIndex];

  const handleOptionSelect = (optionIndex) => {
    // Implement logic to handle the selected option
    // You can compare optionIndex with currentQuestion.correctAnswerIndex
  };

  
  return (
    <div className="content">
      <small id="timer">29</small>
      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((option, index) => (
          <div key={index} className="choice">
            <input
              type="checkbox"
              name="options"
              id={`option-${index}`}
              onChange={() => handleOptionSelect(index)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
        Next Question
      </button>
    </div>
  );
};

export default QuizQuestions;
