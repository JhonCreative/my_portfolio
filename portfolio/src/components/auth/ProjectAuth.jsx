// ProjectCard.js
import React from 'react';
import { Link, Button } from "@nextui-org/react";

const ProjectAuth = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white dark:bg-[#35383a] rounded-3xl shadow-md flex sm:flex-row flex-col sm:gap-10 gap-5 bg-opacity-40 dark:bg-opacity-40">
      <img src={imageUrl} alt={title} className="rounded-2xl" />
      <section className='my-auto gap-3 flex flex-col'>
         <h3 className='text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>{title}</h3>
         <p className=' font-custom track text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl rounded-2xl'>{description}</p>
         <Button
               href={link}
               as={Link}
               color="primary"
               showAnchorIcon
               variant="solid"
            >
            Button Link
         </Button>
      </section>
    </div>
  );
};

export default ProjectAuth;
