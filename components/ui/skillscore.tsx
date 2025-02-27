import React from 'react';
import { Progress } from "@/components/ui/progress";

interface ISkillScores {
    skill: string,
    score: number,
    backgroundColor: string,
    indicatorColor:string,
    percentageColor: string
}
const Skillscore = ({ skill, score, backgroundColor,indicatorColor, percentageColor }: ISkillScores) => {
    return (
        <div>
            <p className='text-gray-500 text-sm font-semibold'>{skill}</p>
            <div className='flex items-center gap-5 mt-1'>
                <Progress backgroundColor={backgroundColor}
                    indicatorColor={indicatorColor} value={score} />
                <p className={`${percentageColor} font-bold`}>{score}%</p>
            </div>
        </div>
    )
}

export default Skillscore;
