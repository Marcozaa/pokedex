import React from 'react'
import motion from 'framer-motion'
import {AiFillHeart} from 'react-icons/ai'
import { GiCoffeeMug } from 'react-icons/gi'
export default function Footer() {
  return (
    <div 
    className='border rounded-t-full py-3 px-6 font-roboto'>
        <span className='flex items-center justify-center '>
            Made with 

            <AiFillHeart className='mx-1 
            animate-pulse
            '/>

            and

            <GiCoffeeMug className='mx-1' />

        </span>
    </div>
  )
}
