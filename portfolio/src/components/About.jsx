import React from 'react';
import AboutAuth from './auth/AboutAuth';
import aboutImage from '../assets/images/img/about.png'


function About() {
  return (
    <section className='mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10'>
        <h1 className='text-2xl sm:text-1xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>More about me</h1>
        <span className='flex sm:flex-row flex-col'>
          <div>
            <img src={aboutImage} alt="" />
          </div>
          <div className='flex flex-col justify-between px-10 py-10 gap-10'>
            <p>
            Hi everyone 👋 Im Jhon 20-year-old junior frontend developer 💻 and photo editor 📷 with a passion for learning and exploring new technologies 📲.
            </p>
            <div className='flex justify-end items-end'>
              <AboutAuth/>
            </div>
          </div>
        </span>
    </section>
  )
}

export default About