import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widgets from '../src/components/Widgets';
import ImgGamer from '../src/components/ImgGamer';
import Submit from '../src/components/Submit';
import LoadingAnimation from '../src/components/LoadingAnimation';

const QuizContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 

    h1{
        font-size: 30px;
        color: white;
    }
`;

function QuestionWidget({
  questionIndex, totalQuestions, questions, onSubmit,
}) {
  const questionId = `question ${questionIndex}`;

  function subNextQuestion(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Widgets>
      <Widgets.Widget>
        <Widgets.Header>
          <h1>
            Pergunta de
            {questionIndex + 1}
            {' '}
            a
            { totalQuestions }
          </h1>
        </Widgets.Header>
        <img
          src={questions.image}
          style={{
            width: '100%',
            height: '150px',
          }}
        />
        <Widgets.Content>
          <h2>{questions.title}</h2>
          <p>{questions.description}</p>
        </Widgets.Content>
        <Widgets.InputWraper>
          <form key={questionId} onSubmit={subNextQuestion}>
            {questions.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `Alternativa ${alternativeIndex}`;

              return (
                <Widgets.Topic as="label" htmlFor={alternativeId}>
                  <input name={questionId} id={alternativeId} type="radio" />

                  {alternative}
                </Widgets.Topic>
              );
            })}
            <Submit value="Confirmar" />
          </form>
        </Widgets.InputWraper>
      </Widgets.Widget>
    </Widgets>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const questions = db.questions[questionIndex];
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <>
      <QuizContainer>
        <ImgGamer />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget onSubmit={handleSubmit} questionIndex={questionIndex} totalQuestions={totalQuestions} questions={questions} />
        )}
        ;
        {screenState === screenStates.LOADING && (
        <LoadingAnimation />
        )}
        ;
        {screenState === screenStates.RESULT && (<div>Resultado do seu quiz</div>)}
        ;
      </QuizContainer>
    </>
  );
}
