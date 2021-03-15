import { useContext } from 'react';
import { challengesContext } from '../Contexts/ChallengesContexts';
import style from '../Styles/Components/ExperienceBar.module.css';


export function ExperienceBar(){

    const { currentExperience, experienceToNextLevel } = useContext(challengesContext);

    const parcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${parcentToNextLevel}%`}}>
                    <span className={style.currentExperience} style={{left: `${parcentToNextLevel}%`}}>
                        {currentExperience} px
                    </span>
                </div>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>        
    );
}