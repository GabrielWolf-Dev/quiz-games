import styled from 'styled-components';
import db from '../../../db.json';

const ErrorForm = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 10px 2%;
    background-color: ${db.theme.colors.secondary};
    border-radius: ${db.theme.borderRadius};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 3%;
    left: 2%;
    display: none;

    p{
        font-size: 18px;
    }

    i{
        font-size: 26px;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px){
        position: relative;
        left: 50%;
        transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
    }

    @media screen and (max-width: 460px){
        width: 100%;
        max-width: 280px;

        p{
            font-size: 18px;
        }

        i{
            font-size: 20px;
            cursor: pointer;
        }
    }
`;

export default ErrorForm;