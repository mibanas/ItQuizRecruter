import React, { useEffect, useState } from 'react';
import '../Styles/quizQuestions.css';
import data from '../Data/Question';

const QuizQuestions = ({ quizType, updateScore, finishQuiz}) => {
    const mydata = data[quizType]
    const nbreQuestion = data[quizType].length
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = mydata[currentQuestionIndex];
    const [myAnswer, setMyAnswer] = useState(-1)

    const handleOptionSelect = (optionIndex) => {
        setMyAnswer(optionIndex)
    };

    const nextQuestion = (event) => {
        if(currentQuestionIndex >= nbreQuestion - 1) {
            finishQuiz()
        }
        if(currentQuestion.correctAnswerIndex === myAnswer) {
            updateScore(1)
        } else {
            updateScore(0)
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setTimer(3)
        setMyAnswer(-1)
    } 

    const [timer, setTimer] = useState(3); 

    useEffect(() => {
        const intervalId = setTimeout(() => {
            if (currentQuestionIndex >= nbreQuestion - 1) {
                finishQuiz()
            }
            setTimer((timer) => {
                if (timer === 0) {
                    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
                    return 3;
                }
                return timer - 1;
            });
        }, 1000);
    
        return () => clearTimeout(intervalId);
    }, [timer]);

    

    return (
        <div className="content">
        <small id="timer">{timer}</small>
        <small id="timer">{currentQuestionIndex + 1}  : {nbreQuestion}</small>
        <h2>{currentQuestion.question}</h2>
        <div>
            {currentQuestion.options.map((option, index) => (
            <div key={index} className="choice">
                <input
                checked={index === myAnswer}
                    type="radio"
                    name="options"
                    id={`option-${index}`}
                    onChange={() => handleOptionSelect(index)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
            </div>
            ))}
        </div>
        <button id='validerbtn' onClick={nextQuestion}>
            Valider
        </button>
        </div>
    );
    };

export default QuizQuestions;
