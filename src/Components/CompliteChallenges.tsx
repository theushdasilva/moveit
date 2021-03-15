import { useContext } from 'react';
import { challengesContext } from '../Contexts/ChallengesContexts';
import style from '../Styles/Components/CompliteChallenges.module.css';

export function CompliteChallenges(){

    const { challengesComplited } = useContext(challengesContext);

    return(
        <div className={style.CompliteChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesComplited}</span>
        </div>
    );
}