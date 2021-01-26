import styled from 'styled-components';
import db from '../../../db.json';

const ImgGamer = styled.div`
    width: 100%;
    max-width: 500px;
    height: 400px;
    background-image: url('${db.bg}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    @media screen and (max-width: 1000px) {
        max-width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }
`;

export default ImgGamer;
