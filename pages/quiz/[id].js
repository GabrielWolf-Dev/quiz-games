import React from 'react';
import Quiz from '../../src/components/screens/QuizFriends';

export default function Quizzes({ dbexterno }){
    return(
        <Quiz externalTheme={dbexterno.theme} externalQuestions={dbexterno.questions}>
            {/*<pre>
                {JSON.stringify(props, null, 4)}
            </pre>*/}
        </Quiz>
    );
}


export async function getServerSideProps(context) {
    const [projectName, gitHubUser] = context.query.id.split('___');
    try{
        const dbexterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
        .then(responseServer => {
            if(responseServer.ok){
                return responseServer.json();
            }
            throw new Error('Falha em pegar os dados');
        })
        .then(responseConvertObj => responseConvertObj);
        //console.log(dbexterno);
        //console.log('Infos que o Next da para nós: ', context.query.id);
        return{
            props: {
                dbexterno,
            },
        }
    }catch(err){
        console.error(err);
    }
} 