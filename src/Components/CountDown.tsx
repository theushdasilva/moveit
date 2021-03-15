import { useContext } from 'react';
import { CountdownContext } from '../Contexts/CountdownCotext';
import style from '../Styles/Components/CountDown.module.css'


export function CountDown(){

    const { minutes,
            seconds,
            startCountDown,
            resetCountDown,
            hastFinish,
            IsActive } = useContext(CountdownContext)

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    
    return(
        <div>
            <div className={style.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            { /**Isso é um IF tbm */
                hastFinish ? (
                    <button 
                        disabled
                        className={style.StartCountDownButton}> 
                        Ciclo Encerrado...
                        <img src="icons/ok.svg" alt="icon-ok"/>           
                    </button>
                ) : (
                   <>
                       {IsActive ? (
                            <button 
                                type="button" 
                                className={`${style.StartCountDownButton} ${style.StartCountDownButtonActive}`}
                                onClick={resetCountDown}> 
                                Abandonar ciclo              
                            </button>
                        ):(
                            <button 
                                type="button" 
                                className={style.StartCountDownButton} 
                                onClick={startCountDown}>
                                Iniciar um ciclo              
                            </button>
                        )}   
                   </> 
                )
            }         

            
        </div>
    );
}