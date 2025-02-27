"use client";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useState } from "react";
import { FORMSCHEMA } from "@/lib/constants";
import Image from "next/image";
import { HTMLIcon } from "@/assets/icons";


interface Istats {
    rank: number;
    percentile: number;
    score: number;
}

const UpdateModal = ({ setCurrentStats }: { setCurrentStats: React.Dispatch<React.SetStateAction<Istats>> }) => {
    const [open, setOpen] = useState<boolean>(false)
    //Defined Form
    const form = useForm<z.infer<typeof FORMSCHEMA>>({
        resolver: zodResolver(FORMSCHEMA),
    })

    //Set New Stats
    const onSubmit = (values: z.infer<typeof FORMSCHEMA>) => {
        setCurrentStats(values)
        form.reset()
        setOpen(false)
    }

    //Open Menu Box
    const onOpen = (value: boolean) => {
        setOpen(value);
        form.clearErrors()
    }
    return (
        <Dialog open={open} onOpenChange={(open) => onOpen(!open)}>
            <Button className='self-end' onClick={() => onOpen(true)}>Update</Button>
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

                            <Button className='bg-transparent text-blue-800 hover:text-white border-2' onClick={() => onOpen(false)} >Cancel</Button>

                            <Button type='submit'>Save <ArrowRight /> </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateModal;
