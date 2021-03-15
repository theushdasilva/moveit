import { useContext } from 'react';
import { challengesContext } from '../Contexts/ChallengesContexts';
import style from '../Styles/Components/Profile.module.css'

export function Profile(){

    const { level } = useContext(challengesContext);

    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/theushdasilva.png" alt="Meu perfil"/>
            <div>
                <strong>Matheus H. da Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="level Up"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}