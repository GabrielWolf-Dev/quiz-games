import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const InputSubmit = styled.input`
    width: 100%;
    max-width: 150px;
    height: 45px;
    font-size: 18px;
    color: white;
    background-color: ${db.theme.colors.secondary};
    border: 0;
    border-radius: ${db.theme.borderRadius};
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        opacity: 0.8;
    }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }

    @media screen and (max-width: 600px){
        width: 100%;
        max-width: 120px;
        height: 45px;
        font-size: 16px;
    }
`;

export default function Submit(props) {
  return (
    <>
      <InputSubmit type="submit" disabled={props.disabled} value={props.value} />
    </>
  );
}
