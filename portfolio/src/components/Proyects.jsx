// Proyects.js
import React from 'react';
import ProjectAuth from './auth/ProjectAuth';
import img_artisys from '../assets/images/img/Project_artisys.png';
import img_Licor from '../assets/images/img/Licor_koa.png'

const projects = [
  {
    title: 'Project Artisys',
    description: 'Artysis simplifica la gestión de proyectos, permitiéndote enfocarte en tus tareas y creatividad de manera eficiente.',
    imageUrl: img_artisys,
    link: 'https://example.com/project1',
  },
  {
    title: 'Licor de K0A',
    description: 'rtysis simplifica la gestión de proyectos, permitiéndote enfocarte en tus tareas y creatividad de manera eficiente.',
    imageUrl: img_Licor,
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

const Proyects = () => {
  return (
   <section className='mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-5 font-custom'>
      <h1 className='text-2xl sm:text-1xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>My Projects</h1>
      <div className="flex flex-col gap-10">
         {projects.map((project, index) => (
         <ProjectAuth key={index} {...project} />
         ))}
      </div>
   </section>
  );
};

export default Proyects;
