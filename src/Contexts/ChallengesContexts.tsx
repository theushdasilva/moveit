import {createContext, useState, ReactNode, useEffect} from "react";
import Cookies from 'js-cookie'; /**Para usar os Cookies é preciso instalar a tipagem dele por conta do typeScript "npm install @types/js-cookie -D" */
import challenges from "../../challenges.json"

interface challenge {
    type: 'body' | 'eye';
    description: String;
    amount: number;
}

interface ChallengesContextData{
    level: number; 
    currentExperience: number; 
    challengesComplited: number;
    activeChallenge: challenge; 
    experienceToNextLevel: number;
    levelUp: ()=> void;
    StartNewChallenge: ()=> void;
    resetChallenge: ()=>void;
    completeChallenge: ()=>void;
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesComplited, setchallengesComplited] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        /**Quardando as 3 informações com cookies, !Mais é claro que se vc zerar os cookies as informações Zerão! */
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesComplited', String(challengesComplited));

    },[level, currentExperience, challengesComplited]);

    function levelUp(){
        setLevel(level + 1);
    }

    function StartNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
        
        new Audio('/notification.mp3').play();

        if(Notification.permission === "granted"){
            new Notification('Novo Desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
       if(!activeChallenge) {
           return;
       }

       const { amount } = activeChallenge;

       let finalExperience = currentExperience + amount;

       if(finalExperience > experienceToNextLevel) {
        finalExperience = finalExperience - experienceToNextLevel;    
        levelUp();
       }

       setCurrentExperience(finalExperience);
       setActiveChallenge(null);
       setchallengesComplited(challengesComplited + 1);
    }


    return(
        <challengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengesComplited, 
                levelUp,
                StartNewChallenge,
                resetChallenge,
                completeChallenge,
                activeChallenge,
                experienceToNextLevel}}>
                    {children}
        </challengesContext.Provider>
    );
}