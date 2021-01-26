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
    padding: 10px 0;
`;

Widgets.InputsWraper = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type='text'] {
        width: 100%;
        max-width: 200px;
        height: 45px;
        font-size: 18px;
        text-align: left;
        border: 2px solid ${db.theme.colors.mainBg};
        border-radius: ${db.theme.borderRadius};
        padding: 10px;
        margin: 10px 0;
    }

    input[type='submit'] {
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
    }

    input[type='submit']:hover{
        opacity: 0.8;
    } 

    @media screen and (max-width: 600px){
        input[type='text'] {
            width: 100%;
            max-width: 150px;
            height: 45px;
            margin: 0 0 10px 0;
            font-size: 14px;
        }

        input[type='submit'] {
            width: 100%;
            max-width: 120px;
            height: 45px;
            font-size: 16px;
        }
    }
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

export default Widgets;
