import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widgets from '../src/components/Widgets';
import ImgGamer from '../src/components/ImgGamer';
import Submit from '../src/components/Submit';
import LoadingAnimation from '../src/components/LoadingAnimation';
import Form from '../src/components/Form';

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

function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widgets>
      <Widgets.Widget>
        <Widgets.Header>
          <h1>
            Resultado de
            {' '}
            {name}
          </h1>
        </Widgets.Header>
        <Widgets.Content>
          <h2>
            Você acertou:
            {' '}
            {/* results.reduce((currentAdd, currentResult) => {
                const isGot = currentResult === true;
                isGot ? currentAdd += 1 : currentAdd += 0;
                return currentAdd;
              }, 0) */}
            {/*
              Por default o filter retorna true
              Após o retorno da array de trues, foi inserido .length para contar o total.
              */}
            {results.filter((result) => result).length}
            {' '}
            questões
          </h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <strong style={{
                  fontWeight: 'bold',
                }}
                >
                  Pergunta
                  {` ${index + 1}: `}
                </strong>

                {result === true
                  ? <span style={{ color: db.theme.colors.success }}>Acertou</span>
                  : <span style={{ color: db.theme.colors.wrong }}>Errou</span>}
              </li>
            ))}
          </ul>
        </Widgets.Content>
      </Widgets.Widget>
    </Widgets>
  );
}

function QuestionWidget({
  questionIndex, totalQuestions, questions, onSubmit, addResults,
}) {
  const [selectedAlternative, setAlternativeSelected] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question ${questionIndex}`;
  const isCorrect = selectedAlternative === questions.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  function subNextQuestion(e) {
    e.preventDefault();
    setIsQuestionSubmited(true);

    setTimeout(() => {
      addResults(isCorrect);
      setIsQuestionSubmited(false);
      onSubmit();
      setAlternativeSelected(undefined);
    }, 1000);
  }

  return (
    <Widgets>
      <Widgets.Widget>
        <Widgets.Header>
          <h1>
            Pergunta de
            {' '}
            {questionIndex + 1}
            {' '}
            a
            {' '}
            { totalQuestions }
          </h1>
        </Widgets.Header>
        <img
          src={questions.image}
          style={{
            width: '100%',
            height: '250px',
          }}
        />
        <Widgets.Content>
          <h2>{questions.title}</h2>
          <p>{questions.description}</p>
        </Widgets.Content>
        <Widgets.InputWraper>
          <Form key={questionId} onSubmit={subNextQuestion}>
            {questions.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `Alternativa ${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;

              return (
                <Widgets.Topic key={alternativeIndex} data-selected={isSelected} data-status={isQuestionSubmited && alternativeStatus} as="label" htmlFor={alternativeId}>
                  <Widgets.Alternatives>
                    <input
                      style={{
                        display: 'none',
                        width: '100%',
                        maxWidth: '140px',
                      }}
                      onChange={() => { setAlternativeSelected(alternativeIndex); }}
                      name={questionId}
                      id={alternativeId}
                      type="radio"
                    />

                    {alternative}
                  </Widgets.Alternatives>
                </Widgets.Topic>
              );
            })}
            <Submit value="Confirmar" disabled={!hasAlternativeSelected} />
            {isQuestionSubmited && isCorrect ? <Widgets.ResultMessage>Você acertou!!!</Widgets.ResultMessage> : undefined}
            {isQuestionSubmited && !isCorrect ? <Widgets.ResultMessage>Você errou :(</Widgets.ResultMessage> : undefined }
          </Form>
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
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const questionIndex = currentQuestion;
  const questions = db.questions[questionIndex];
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);

  function addResults(result) {
    setResults([
      ...results,
      result,
    ]);
  }

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
          <QuestionWidget addResults={addResults} onSubmit={handleSubmit} questionIndex={questionIndex} totalQuestions={totalQuestions} questions={questions} />
        )}
        ;
        {screenState === screenStates.LOADING && (
        <LoadingAnimation />
        )}
        ;
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        ;
      </QuizContainer>
    </>
  );
}
