import React from 'react'
import logo from '../assets/images/my_person.png'
import LinksAuth from './auth/LinksAuth'

function Hero() {
  return (
    <div className='mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10'>
        <section className='flex flex-col sm:flex-row items-center gap-5'>
            <div className=' w-44 h-44 shadow-lg rounded-full border-8 border-[#383c3dd6]'>
                <img src={logo} alt="" className='rounded-full bg-[#404243]'/>
            </div>
            <div></div>
        </section>
        <section className='flex flex-col items-center sm:items-start gap-3'>
            <div className='flex flex-col items-left gap-2'>
                <h1 className='text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-100'>Jhon K. Calsina</h1>
                <h2 className='text-sm sm:text-lg text-slate-300 max-w-xl rounded-2xl'>Explore the fusion of design and code</h2>
            </div>
            <div>
                <LinksAuth/>
            </div>
        </section>
    </div>
  )
}

export default Hero