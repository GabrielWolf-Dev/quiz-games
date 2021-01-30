import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import { motion } from 'framer-motion';

import ImgGamer from '../src/components/ImgGamer';
import Widgets from '../src/components/Widgets';
import Header from '../src/components/Header';
import ErrorForm from '../src/components/ErrorForm';
import IconGitHub from '../src/components/IconGitHub';
import Input from '../src/components/Input';
import Submit from '../src/components/Submit';
import Link from '../src/components/Link';

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

  function validationLink(e){
    if (name.length === 0) {
      errorPopUp.style.display = 'flex';
      e.preventDefault();
    } else {
      errorPopUp.style.display = 'none';
    }
  }

  function closeError() {
    const errorPopUp = document.getElementById('errorPopUp');
    errorPopUp.style.display = 'none';
  }

  return (
    <>
      <Header
        as={motion.section}
        variants={{
          show: {opacity: 1, y: '0'},
          hidden: {opacity: 0, y: '-50px'}
        }}
        transition= {{
          delay: 0.3,
          duration: 0.5
        }}
        initial="hidden"
        animate="show"
      >
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
        <ImgGamer 
          as={motion.section}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          transition= {{
            delay: 0.3,
            duration: 0.5
          }}
          initial="hidden"
          animate="show"
        />

        <Widgets>
          <Widgets.Widget
            transition= {{
              delay: 0.3,
              duration: 0.5
            }}
            as={ motion.section }
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '50%' }
            }}
            initial="hidden"
            animate="show"
          >
            <Widgets.Header>
              <h1>{db.title}</h1>
            </Widgets.Header>

            <Widgets.Content>
              <p>{db.description}</p>
            </Widgets.Content>

            <Widgets.InputWraper>
              <form onSubmit={validation}>
                <Input onChange={changeInput} />
                <Submit value="Jogar" />
              </form>
            </Widgets.InputWraper>
          </Widgets.Widget>

          <Widgets.Widget
            as={ motion.section }
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-50%' },
            }}
            transition={{
              delay: 0.3,
              duration: 0.5
            }}
            initial="hidden"
            animate="show"
          >
            <h1>Quizzes da galera</h1>

            {db.external.map((externalUrl, index) => {
              const [projectName, gitHubUser, otherName] = externalUrl
              .replace(/\/|https:|.vercel.app/g, '')
              .split('.');

              return(
                <Widgets.OthersQuizzes key={index}>
                  <Widgets.LinkNext 
                  onClick={validationLink}
                  as={Link} href={`/quiz/${projectName}___${gitHubUser === undefined ? otherName : gitHubUser}`} 
                  >
                    {`${gitHubUser === undefined ? 'projeto' : gitHubUser}/${projectName}`}
                  </Widgets.LinkNext>
                </Widgets.OthersQuizzes>
              );
            })}

          </Widgets.Widget>
        </Widgets>
      </ContainerHome>
      <IconGitHub projectUrl="https://github.com/GabrielWolf-Dev" />
    </>
  );
}
