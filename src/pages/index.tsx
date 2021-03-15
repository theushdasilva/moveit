
import {ExperienceBar} from '../Components/ExperienceBar';
import {Profile} from '../Components/Profile';
import { CompliteChallenges } from '../Components/CompliteChallenges';
import { CountDown } from '../Components/CountDown';
import { ChallengeBox } from '../Components/ChallengeBox';

import Head from 'next/head';

import style from '../Styles/pages/Home.module.css';
import { CountdownProvider } from '../Contexts/CountdownCotext';

 
export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Inicio - move.it</title>
      </Head>

      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
              <Profile />
              <CompliteChallenges/>
              <CountDown />
          </div>
          <div>
             <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

/**export const getServerSideProps = async () =>{

    

    return{
      porps: {}
    }
}*/
