import styled from 'styled-components';
import db from '../../../db.json';

const Widgets = styled.section`
    width: 100%;
    max-width: 380px;

    @media screen and (max-width: 600px){
        max-width: 260px;
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
    padding: 10px 15px;
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

export default Widgets;
