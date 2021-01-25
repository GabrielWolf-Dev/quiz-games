import styled from 'styled-components'
import db from '../db.json'
import ImgGamer from '../src/components/BackgroundHome'
import Widgets from '../src/components/Widgets'
import Header from '../src/components/Header'
import IconGitHub from '../src/components/IconGitHub'
import MetaTags from '../src/components/MetaTags';

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

`

export default function Home() {
  return (
    <>
      <MetaTags/>
      <Header>
        <Header.Container>
          <a href="https://www.alura.com.br/">
            <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
          </a>
          <span>Orgulhosamente criado durante a Imersão React da <a href="https://www.alura.com.br/">Alura</a></span>
        </Header.Container>
      </Header>
      <ContainerHome>
        <ImgGamer/>

        <Widgets>
          <Widgets.Widget>
            <Widgets.Header>
              <h1>{db.title}</h1>
            </Widgets.Header>

            <Widgets.Content>
              <p>{db.description}</p>
            </Widgets.Content>

            <Widgets.InputsWraper>
              <input type="text" placeholder="Insira o seu nome" />
              <input type="submit" value="Jogar" />
            </Widgets.InputsWraper>
          </Widgets.Widget>


          <Widgets.Widget>
            <h1>Quizzes da galera</h1>

            <Widgets.OthersQuizzes>
              <a href="#">lorem ipsum dolor</a>
            </Widgets.OthersQuizzes>

            <Widgets.OthersQuizzes>
              <a href="#">lorem ipsum dolor</a>
            </Widgets.OthersQuizzes>
            
            <Widgets.OthersQuizzes>
              <a href="#">lorem ipsum dolor</a>
            </Widgets.OthersQuizzes>
          </Widgets.Widget>
        </Widgets>
      </ContainerHome>
      <IconGitHub projectUrl="https://github.com/GabrielWolf-Dev" />
    </>
  )
}
