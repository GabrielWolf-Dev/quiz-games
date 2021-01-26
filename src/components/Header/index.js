import styled from 'styled-components';
import db from '../../../db.json';

const Header = styled.header`
    width: 100%;
    padding: 20px 2%;
    background-color: ${db.theme.colors.primary};
    color: black;
    margin-bottom: 40px;
    
    span{
        font-size: 22px;
    }

    span a {
        text-decoration: none;
        font-size: 22px;
        color: white;
        transition: all ease 0.3s;
        margin-left: 10px;
    }

    a:hover {
        color: black;
    }

    @media screen and (max-width: 1000px){
        span{
            display: none;
        }
    }

`;

Header.Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1000px){
        justify-content: center;
    }
`;
export default Header;
