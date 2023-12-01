// Proyects.js
import React from 'react';
import ProjectAuth from './auth/ProjectAuth';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1.',
    imageUrl: 'https://placekitten.com/300/200',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2.',
    imageUrl: 'https://placekitten.com/300/200',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

const Proyects = () => {
  return (
   <section className='mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-5 font-custom'>
      <h1 className='text-2xl sm:text-1xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>More about me</h1>
      <div className="flex flex-col gap-10">
         {projects.map((project, index) => (
         <ProjectAuth key={index} {...project} />
         ))}
      </div>
   </section>
  );
};

export default Proyects;
