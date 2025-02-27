"use client"
import { CheckedIcon, HTMLIcon, ListIcon, TrophyIcon } from '@/assets/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import Statistic from '@/components/ui/statistic';
import Skillscore from '@/components/ui/skillscore';
import Chart from '@/components/layout/chart';
import { COURSE_DURATION, HEADER_SKILL_NAME, SKILLS_SECTION } from '@/lib/constants';
import UpdateModal from '@/components/layout/update-modal';

const Page = () => {
    const [currentStats, setCurrentStats] = useState({ rank: 1, percentile: 75, score: 5 });

    return (
        <div className='p-6 pb-15 w-full'>
            <h1 className='capitalize text-gray-500 font-medium mb-6'>skill test</h1>
            <section className='flex flex-col w-full md:grid md:grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-5'>
                <section className='flex flex-col gap-5'>
                    {/** Programming Language Test Overview */}
                    <article className='flex flex-col md:flex-row justify-between gap-4 border-1 border-gray-300 p-6 rounded-md'>
                        <Image className='w-10 h-10' src={HTMLIcon} alt="Html Icon" />
                        <div>
                            <h2 className='font-bold'>{HEADER_SKILL_NAME}</h2>
                            <p className='text-gray-600 text-xs font-semibold'>{COURSE_DURATION}</p>
                        </div>
                        {/**Updates Skill Test Scores */}
                        <UpdateModal setCurrentStats={setCurrentStats} />
                    </article>

                    {/**Quick Statistics Overview */}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold'>Quick Statistics</h2>
                        <div className='flex flex-col md:flex-row gap-5 justify-between p-4'>
                            {/**Overview*/}
                            <Statistic icon={TrophyIcon} score={(currentStats.rank).toString()} statisticType='your rank' />
                            <Statistic icon={ListIcon} score={currentStats.percentile + '%'} statisticType='percentile' />
                            <Statistic icon={CheckedIcon} score={`${currentStats.score} / 15`} statisticType='correct answers' />
                        </div>
                    </article>

                    {/**Comparison graph*/}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold'>Comparison Graph</h2>
                        <div className="flex items-center justify-between gap-2">
                            <p className='text-sm md:text-lg mt-5 w-[450px] text-gray-500 font-medium'>
                                <span className='font-bold'>
                                    You scored {currentStats.percentile}% percentile
                                </span>
                                which is {currentStats.percentile < 72 ? "lower" : "higher"} than the average percentile 72% of all the engineers who took the assessment
                            </p>
                            <div className='hidden bg-gray-100 h-9 w-9 md:flex items-center justify-center rounded-[100%] border-2 border-gray-200'>
                                <p>📈</p>
                            </div>
                        </div>
                        <div className='h-[200px] w-full mt-5'>
                            <Chart />
                        </div>
                    </article>
                </section>

                {/**Right Section*/}
                <section className='flex flex-col gap-5'>
                    {/**Syllabus*/}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold mb-5 '>Syllabus Wise Analysis</h2>
                        <div className='flex flex-col gap-6'>
                            {
                                /**Skill Scores */
                                SKILLS_SECTION.map((value) => (
                                    <Skillscore key={value.skillName}
                                        skill={value.skillName}
                                        score={value.score} backgroundColor={value.backgroundColor} indicatorColor={value.indicatorColor} percentageColor={value.textColor} />
                                )
                                )
                            }
                        </div>
                    </article>

                    {/**Question*/}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold'>Question Analysis</h2>
                        <p className='mt-5 mb-5 text-gray-500 font-medium'>
                            <span className='font-bold'>
                                You scored {currentStats.score} questions correct out of 15,
                            </span>
                            {currentStats.score < 10 ? "You need to study more 😔" : currentStats.score < 15 ? "however it still needs some improvements" : "Keep up the good work 🧚🏼‍♀️"}
                        </p>
                        <div role='progress'
                            style={{
                                background: `conic-gradient( oklch(0.623 0.214 259.815) ${(currentStats.score / 15) * 100}%, #dbeafe  0)`,
                                transition: "background ease-in 2s"
                            }}
                            className='w-[180px] text-[3rem] h-[180px] rounded-[100%] m-auto'>
                        </div>                  
                    </article>

                </section>
            </section>
        </div>
    )
}

export default Page;
