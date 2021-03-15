import { useContext } from "react";
import { challengesContext } from "../Contexts/ChallengesContexts";
import { CountdownContext } from "../Contexts/CountdownCotext";
import style from "../Styles/Components/ChallengeBox.module.css";

export function ChallengeBox(){ 

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);
    const { resetCountDown } = useContext(CountdownContext);

    function hanldleChallengeSucceded(){
        completeChallenge();
        resetCountDown();
    }

    function hanldleChallengeFailed(){
        resetChallenge();
        resetCountDown();
    }

    return(
        <div className={style.ChallengeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={style.ChallengeActive}>
                        <header>
                            Ganhe {activeChallenge.amount} xp
                        </header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button 
                                type="button"
                                className={style.ChallengeFailedButton}
                                onClick={hanldleChallengeFailed}
                                >Falhei</button>
                            <button 
                                type="button"
                                className={style.ChallengeSuccedtButton}
                                onClick={hanldleChallengeSucceded}
                                >Completei</button>
                        </footer>
                    </div>
                ) : (
                    <div className={style.ChallengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}