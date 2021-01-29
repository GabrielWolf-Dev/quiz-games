import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const StyledLink = styled(Link)`
  float: left;
  background-color: white;
  padding: 1.6%;
  margin-top: 3%;
  margin-left: 2%;
  border-radius: 22px;

  transition: .3s;
  &:hover {
    opacity: .5;
  }
`;

const SVG = styled.svg`
  vertical-align: middle;
`;

export default function BackLinkArrow({ href }) {
  return (
    <StyledLink href={href} style={{ width: '38px', height: '38px', display: 'inline-block' }}>
      <SVG xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="black" fillOpacity="0.87" />
      </SVG>
    </StyledLink>
  );
}