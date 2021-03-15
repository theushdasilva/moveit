import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { challengesContext } from "./ChallengesContexts";

interface CountdownContextData{
    minutes: number,
    seconds: number,
    hastFinish: boolean,
    IsActive: boolean,
    startCountDown: () => void,
    resetCountDown: () => void
}

interface CountdownProviderProps{
    children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData)

let countDownTimeOut: NodeJS.Timeout;


export function CountdownProvider({children}){

    const { StartNewChallenge } = useContext(challengesContext);


    const [time, setTime] = useState(25 * 60);
    const [IsActive, setIsActive] = useState(false);
    const [hastFinish, setHastFinish] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown(){
        setIsActive(true);
    }
    
    function resetCountDown(){
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(25 * 60);
        setHastFinish(false);
    }
    
    useEffect(()=>{
        if(IsActive && time > 0){
            countDownTimeOut = setTimeout(()=> {
                setTime(time - 1);
            }, 1);
        }else if (IsActive && time === 0){
            setHastFinish(true);
            setIsActive(false);
            startCountDown();
            StartNewChallenge();
        }
    }, [IsActive, time])

    return(
        <CountdownContext.Provider 
        value={{
            minutes,
            seconds,
            hastFinish,
            IsActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}