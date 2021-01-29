import styled from 'styled-components';
import db from '../../../db.json';

const Widgets = styled.section`
    width: 100%;
    max-width: 450px;

    @media screen and (max-width: 600px){
        max-width: 320px;
    }
`;

Widgets.Widget = styled.div`
    width: 100%;
    background-color: white;
    border-radius: ${db.theme.borderRadius};
    margin: 40px 0;
    padding-bottom: 10px;
    
    h1{
        padding: 15px;
       font-size: 23px;
    }

    p{
        font-size: 18px;
        padding: 10px 6% 5px 6%;
        text-align: left;
    }

    @media screen and (max-width: 600px){
        h1{
            padding: 10px;
            font-size: 20px;
        }

        p{
            font-size: 16px;
        }
    }

`;

Widgets.Header = styled.header`
    width: 100%;
    padding: 5px 2%;
    background-color: ${db.theme.colors.primary};
    border-top-right-radius: ${db.theme.borderRadius};
    border-top-left-radius: ${db.theme.borderRadius};
`;

Widgets.Content = styled.div`
    width: 100%;
    padding: 10px 2%;

    h2{
        font-size: 20px;
        padding: 10px 2%;
        text-align: center;
        color: ${db.theme.colors.contrastText};
    }

    p{
        font-size: 18px;
        text-align: center;
    }

    ul{
        list-style-type: none;
        list-style-position: inside;
    }

    ul li {
        font-size: 18px;
        text-align: left;
        padding: 5px 4%;
    }
`;

Widgets.InputWraper = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

Widgets.OthersQuizzes = styled.div`
    width: 70%;
    padding: 20px 2%;
    background-color: ${db.theme.colors.secondary};
    color: white;
    margin: 10px auto;
    border-radius: ${db.theme.borderRadius};

    a{
        text-decoration: none;
        color: white;
        transition: all ease 0.3s;
    }

    a:hover{
        color: black;
    }

    @media screen and (max-width: 600px){
        width: 60%;
        padding: 15px 2%;
        background-color: ${db.theme.colors.secondary};
        color: white;
        margin: 10px auto;
        border-radius: ${db.theme.borderRadius};
    }
`;

Widgets.Topic = styled.a`
    outline: 0;
    text-decoration: none;
    color: white;
    background-color: ${db.theme.colors.mainBg};
    padding: 5% 2%;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: .3s;
    display: block;
    
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

Widgets.Alternatives = styled.div`
    width: 100%;
    max-width: 140px;
    padding: 4%;
`;

Widgets.ResultMessage = styled.p`
    width: auto;
    font-weight: bold;
    text-align: center;
`;

Widgets.LinkNext = styled.a`
    color: white;
`;

export default Widgets;
