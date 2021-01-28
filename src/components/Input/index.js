import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import db from '../../../db.json';

const InputName = styled.input`
    width: 100%;
    max-width: 200px;
    height: 45px;        
    font-size: 18px;
    text-align: left;
    border: 2px solid ${db.theme.colors.mainBg};
    border-radius: ${db.theme.borderRadius};
    padding: 10px;
    margin: 10px 0;

    @media screen and (max-width: 600px){
        width: 100%;
        max-width: 150px;
        height: 45px;
        margin: 0 0 10px 0;
        font-size: 14px;
    }
`;

export default function Input({ onChange }) {
  return (
    <>
      <InputName onChange={onChange} type="text" placeholder="Insira o seu nome" />
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};
