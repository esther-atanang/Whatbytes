"use client"
import { CheckedIcon, HTMLIcon, ListIcon, TrophyIcon } from '@/assets/icons';
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Statistic from '@/components/ui/statistic';
import Skillscore from '@/components/ui/skillscore';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { z } from 'zod';
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Chart from '@/components/layout/chart';

const formSchema = z.object({
    rank: z.number({
        coerce: true,
        required_error: "Please pass a rank!",
        message: "It's required and it must be a number!"
    }),
    percentile: z.number({
        coerce: true,
        required_error: "Please pass a percentile!",
        message: "It's required and it must be a number!",
    }).lte(100, { message: "You are going over board now!" }),
    score: z.number({
        coerce: true,
        required_error: "Please pass a score!",
        message: "It's required and it must be a number!",
    }).lte(
        15,
        { message: "You can't score pass 15!" }
    )
})
const Page = () => {
    const [currentStats, setCurrentStats] = useState({ rank: 1, percentile: 75, score: 5 });
    const[open, setOpen] = useState<boolean>(false)
    //Defined Form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues:{...currentStats}
    })

   //Set New Stats
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setCurrentStats(values)
        form.reset()
        setOpen(false)
    }

    //Open Menu Box
    const onOpen = (value:boolean) =>{
        setOpen(value);
        form.clearErrors()
    }

    return (
        <div className='p-6 pb-15 w-full'>
            <h1 className='capitalize text-gray-500 font-medium mb-6'>skill test</h1>
            <section className='flex flex-col w-full md:grid md:grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-5'>
                <section className='flex flex-col gap-5'>
                    {/** Programming Language Test Overview */}
                    <article className='flex flex-col md:flex-row justify-between gap-4 border-1 border-gray-300 p-6 rounded-md'>
                        <Image className='w-10 h-10' src={HTMLIcon} alt="Html Icon" />
                        <div>
                            <h2 className='font-bold'>Hyper Text Markup Language</h2>
                            <p className='text-gray-600 text-xs font-semibold'>Questions: 08 | Duration: 15 mins | Submitted on 27th Feburary 2025 </p>
                        </div>
                        {/**Updates Skill Test Scores */}
                        <Dialog open={open} onOpenChange={(open)=>onOpen(!open)}>
                           <Button className='self-end' onClick={()=>onOpen(true)}>Update</Button>
                            <DialogContent className='bg-white'>
                                <DialogHeader>
                                    <DialogTitle className='flex items-center justify-between mb-5'>
                                        <p>Update Scores</p>
                                        <Image className='w-10 h-10' src={HTMLIcon} alt="Html Icon" />
                                    </DialogTitle>
                                </DialogHeader>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-5'>
                                        <FormField
                                            control={form.control}
                                            name="rank"
                                            render={({ field }) => (
                                                <FormItem className='w-full grid grid-cols-4 items-center '>
                                                    <FormLabel className='col-span-2'>Update your <span className='font-bold'>Rank</span> </FormLabel>
                                                    <FormControl>
                                                        <Input  {...field} className='col-span-2' />
                                                    </FormControl>
                                                    <FormMessage className='text-sm col-start-1 col-end-5 text-end text-red-400' />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="score"
                                            render={({ field }) => (
                                                <FormItem className='w-full grid grid-cols-4 items-center gap-4'>
                                                    <FormLabel className='col-span-2'>Update your <span className='font-bold'>Score</span> </FormLabel>
                                                    <FormControl>
                                                        <Input  {...field} className='col-span-2' />
                                                    </FormControl>
                                                    <FormMessage className='text-sm col-start-1 col-end-5 text-end text-red-400' />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="percentile"
                                            render={({ field }) => (
                                                <FormItem className='w-full grid grid-cols-4 items-center gap-4'>
                                                    <FormLabel className='col-span-2'>Update your <span className='font-bold'>Percentile</span> </FormLabel>
                                                    <FormControl>
                                                        <Input  {...field} className='col-span-2' />
                                                    </FormControl>
                                                    <FormMessage className='text-sm col-start-1 col-end-5 text-end text-red-400' />
                                                </FormItem>
                                            )}
                                        />

                                        <DialogFooter className='flex'>
                                          
                                         <Button className='bg-transparent text-blue-800 hover:text-white border-2' onClick={()=>onOpen(false)} >Cancel</Button>
                                            
                                            <Button type='submit'>Save <ArrowRight /> </Button>
                                        </DialogFooter>
                                    </form>
                                </Form>
                            </DialogContent>
                        </Dialog>

                    </article>
                    {/**Quick Statistics Overview */}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold'>Quick Statistics</h2>
                        <div className='flex flex-col md:flex-row gap-5 justify-between p-4'>
                            {/**Overview*/}
                            <Statistic icon={TrophyIcon} score={String(currentStats.rank)} statisticType='your rank' />
                            <Statistic icon={ListIcon} score={currentStats.percentile + '%'} statisticType='percentile' />
                            <Statistic icon={CheckedIcon} score={`${currentStats.score} / 15`} statisticType='correct answers' />
                        </div>
                    </article>
                    {/**Comparison graph*/}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold'>Comparison Graph</h2>
                        <div className="flex items-center justify-between gap-2">
                        <p className='text-sm md:text-lg mt-5 w-[450px] text-gray-500 font-medium'> <span className='font-bold'>You scored {currentStats.percentile}% percentile</span> which is {currentStats.percentile < 72 ? "lower" : "higher"} than the average percentile 72% of all the engineers who took the assessment</p>
                        <div className='hidden bg-gray-100 h-9 w-9 md:flex items-center justify-center rounded-[100%] border-2 border-gray-200'>
                            <p>📈</p> 
                        </div>
                        </div>
                        <div className='h-[200px] w-full mt-5'>
                           <Chart/>
                        </div>
                    </article>
                </section>
                {/**Right Section*/}
                <section className='flex flex-col gap-5'>
                    {/**Syllabus*/}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold mb-5 '>Syllabus Wise Analysis</h2>
                        <div className='flex flex-col gap-6'>
                            {/**Skill Scores */}
                            <Skillscore skill='HTML Tools, Forms, History' score={80} backgroundColor='bg-blue-300/10' indicatorColor='bg-blue-400' percentageColor='text-blue-500' />

                            <Skillscore skill='Tags & References in HTML'
                                indicatorColor='bg-orange-400' score={60} backgroundColor='bg-orange-300/10' percentageColor='text-orange-500' />

                            <Skillscore skill='Table & References in HTML'
                                indicatorColor='bg-red-400' score={24} backgroundColor='bg-red-300/10' percentageColor='text-red-500' />

                            <Skillscore skill='Tables & CSS Basics' score={96} indicatorColor='bg-green-400' backgroundColor='bg-green-300/10' percentageColor='text-green-500' />
                        </div>
                    </article>
                    {/**Question*/}
                    <article className='border-1 border-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold'>Question Analysis</h2>
                        <p className='mt-5 mb-5 text-gray-500 font-medium'> <span className='font-bold'>You scored {currentStats.score} questions correct out of 15,</span> {currentStats.score < 10 ? "You need to study more 😔" : currentStats.score < 15 ? "however it still needs some improvements" : "Keep up the good work 🧚🏼‍♀️"}</p>
                        <div role='progress' 
                        style={{
                            background: `conic-gradient( oklch(0.623 0.214 259.815) ${(currentStats.score/15) * 100}%, #dbeafe  0)`,
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
