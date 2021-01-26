import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

const QuizContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;

    h1{
        font-size: 30px;
        color: white;
    }
`;

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <QuizContainer>
        <h1>
          Seja bem vindo { name }!!
        </h1>
      </QuizContainer>
    </>
  );
}
