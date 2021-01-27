import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import ImgGamer from '../src/components/ImgGamer';
import Widgets from '../src/components/Widgets';
import Header from '../src/components/Header';
import ErrorForm from '../src/components/ErrorForm';
import IconGitHub from '../src/components/IconGitHub';
import Input from '../src/components/Input';
import Submit from '../src/components/Submit';

const ContainerHome = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
  }

`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function formReq() {
    router.push(`/quiz?name=${name}`);
    console.log('request success');
  }

  function changeInput(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function validation(e) {
    e.preventDefault();
    const errorPopUp = document.getElementById('errorPopUp');

    if (name.length === 0) {
      errorPopUp.style.display = 'flex';
    } else {
      errorPopUp.style.display = 'none';
      formReq();
    }
  }

  function closeError() {
    const errorPopUp = document.getElementById('errorPopUp');
    errorPopUp.style.display = 'none';
  }

  return (
    <>
      <Header>
        <Header.Container>
          <a href="https://www.alura.com.br/">
            <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
          </a>
          <span>
            Orgulhosamente criado durante a Imersão React da
            <a href="https://www.alura.com.br/">Alura</a>
          </span>
        </Header.Container>
      </Header>
      <ErrorForm id="errorPopUp">
        <p>Por favor, insira o seu nome</p>
        <i onClick={closeError} className="fas fa-times" />
      </ErrorForm>
      <ContainerHome>
        <ImgGamer />

        <Widgets>
          <Widgets.Widget>
            <Widgets.Header>
              <h1>{db.title}</h1>
            </Widgets.Header>

            <Widgets.Content>
              <p>{db.description}</p>
            </Widgets.Content>

            <Widgets.InputWraper>
              <form  onSubmit={validation}>
                <Input onChange={changeInput} />
                <Submit value="Jogar" />
              </form>
            </Widgets.InputWraper>
          </Widgets.Widget>

          <Widgets.Widget>
            <h1>Quizzes da galera</h1>

            <Widgets.OthersQuizzes>
              <a target="_blank" href="https://imersao-react-next-js.nathanaquino.vercel.app/">Assasin's Creed</a>
            </Widgets.OthersQuizzes>

            <Widgets.OthersQuizzes>
              <a target="_blank" href="https://bladequiz.vercel.app/">Rocket League</a>
            </Widgets.OthersQuizzes>

            <Widgets.OthersQuizzes>
              <a target="_blank" href="https://wowquizz-alura.vercel.app/">World of WarCraft</a>
            </Widgets.OthersQuizzes>
          </Widgets.Widget>
        </Widgets>
      </ContainerHome>
      <IconGitHub projectUrl="https://github.com/GabrielWolf-Dev" />
    </>
  );
}
