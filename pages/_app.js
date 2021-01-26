import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: sans-serif;
    text-align: center;
  }

  html, body {
    background-color: ${db.theme.colors.mainBg};
    height: 100%;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="Quiz Games da Imersão React da Alura" />
        <meta name="description" content="Projeto da Imersão Alura, um quiz sobre Games" />

        <meta property="og:title" content="Quiz Games da Imersão React da Alura" />
        <meta property="og:site_name" content="Quiz Games" />
        <meta property="og:description" content="Projeto da Imersão Alura, um quiz sobre Games" />
        <meta property="og:url" content="https://quiz-games.gabrielwolf-dev.vercel.app/" />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png" />
        <meta property="og:image:type" content="image/png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-games.gabrielwolf-dev.vercel.app/" />
        <meta property="twitter:title" content="Quiz Games da Imersão React da Alura" />
        <meta property="twitter:description" content="Projeto da Imersão Alura, um quiz sobre Games" />
        <meta property="twitter:image" content="https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png" />

        <title>Games Quiz</title>
        <link rel="shortcut icon" href="https://cdn.pixabay.com/photo/2016/10/30/23/05/controller-1784573_960_720.png" />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
