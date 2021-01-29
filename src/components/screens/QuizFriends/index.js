import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Widgets from '../../Widgets';
import ImgGamer from '../../ImgGamer';
import Submit from '../../Submit';
import LoadingAnimation from '../../LoadingAnimation';
import Form from '../../Form';
import BackLinkArrow from '../../BackLinkArrow';

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

function ResultWidget({ results, externalTheme }) {

  return (
    <Widgets>
      <Widgets.Widget
        as={motion.section}
        variants={{
          show: {scale: 1},
          hidden: {scale: 0}
        }}
        transition= {{
          delay: 0.3,
          duration: 0.5
        }}
        initial="hidden"
        animate="show"
      >
        <Widgets.Header>
          <h1>
            Resultado:
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
                  ? <span style={{ color: externalTheme.colors.success }}>Acertou</span>
                  : <span style={{ color: externalTheme.colors.wrong }}>Errou</span>}
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
      <Widgets.Widget
        as={motion.section}
        variants={{
          show: {scale: 1},
          hidden: {scale: 0}
        }}
        transition= {{
          delay: 0.3,
          duration: 0.5
        }}
        initial="hidden"
        animate="show"
      >
        <Widgets.Header>
            <BackLinkArrow href="/" />
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

export default function Quiz({ externalQuestions, externalTheme }) {
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const questionIndex = currentQuestion;
  const questions = externalQuestions[questionIndex];
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
        {screenState === screenStates.RESULT && <ResultWidget externalTheme={externalTheme} results={results} />}
        ;
      </QuizContainer>
    </>
  );
}