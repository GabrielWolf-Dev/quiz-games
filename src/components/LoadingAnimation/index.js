import styled from 'styled-components';
import db from '../../../db.json';

const LoadingAnimation = styled.div`
    margin-top: 100px;
    display: inline-block;
    border: 18px solid #ccc;
    border-top-color: ${db.theme.colors.primary};
    border-radius: 50%;
    width: 100%;
    max-width: 300px;
    height: 300px;
    animation: rotating 1s infinite;

    @keyframes rotating {
    to{
        transform: rotate(1turn);
    }
    }
`;

export default LoadingAnimation;
