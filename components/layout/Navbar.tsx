import { WhatBytesLogo } from '@/assets/icons';
import { Profile } from '@/assets/images';
import { AlignRight, AwardIcon, ChartNoAxesColumn, File } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='px-5 py-3 flex items-center justify-between border-b border-gray-200'>
      <div>
        <Image className='w-36 md:w-40' src={WhatBytesLogo} alt='WhatsBytes Logo' />
      </div>
      <div className='hidden md:flex border-2 border-gray-200 p-1  items-center gap-2 rounded-md text-sm font-bold'>
        <Image className='h-6 w-6 md:h-8 md:w-8 rounded-full object-cover' src={Profile} alt="profile" />
        <p className='capitalize text-[0.9rem] md:text-sm'>Rowhan sequek</p>
      </div>
      {/**This is for Mobile */}
      <div className='md:hidden'>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button className='border-1 active:border-2 text-3xl bg-transparent p-0 shadow-none text-black hover:bg-transparent'><AlignRight /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative z-50 bg-black text-white md:hidden">
            <DropdownMenuLabel>
              <div className='flex p-1 items-center gap-2 rounded-md text-sm font-bold'>
                <Image className='h-6 w-6 md:h-8 md:w-8 rounded-full object-cover' src={Profile} alt="profile" />
                <p className='capitalize text-[0.9rem] md:text-sm'>Rowhan sequek</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link className='hover:underline flex gap-3' href={"/dashboard"}><ChartNoAxesColumn /><span>Dashboard</span></Link>
            </DropdownMenuItem>
            <DropdownMenuItem> <Link className='hover:underline flex gap-3' href={"/skilltest"}><AwardIcon /> <span>Skill test</span></Link></DropdownMenuItem>
            <DropdownMenuItem> <Link className='hover:underline flex gap-3' href={"/internship"}><File /><span>Internship</span></Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar;
