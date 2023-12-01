import React from 'react'
import logo from '../assets/images/my_person.png'
import LinksAuth from './auth/LinksAuth'

function Hero() {
  return (
    <div className='mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10'>
        <section className='flex flex-col sm:flex-row items-center gap-5'>
            <div className=' w-44 h-44 shadow-lg rounded-full border-8 border-[#f7f7f7] dark:border-[#383c3dd6]'>
                <img src={logo} alt="" className='rounded-full bg-[#9ec5e9da] dark:bg-[#404243]'/>
            </div>
        </section>
        <section className='flex flex-col items-center sm:items-start gap-3'>
            <div className='flex flex-col items-left gap-2'>
                <h1 className='text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>Jhon K. Calsina</h1>
                <h2 className=' font-custom track text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl rounded-2xl'>Explore the fusion of design and code</h2>
            </div>
            <div>
                <LinksAuth/>
            </div>
        </section>
    </div>
  )
}

export default Hero