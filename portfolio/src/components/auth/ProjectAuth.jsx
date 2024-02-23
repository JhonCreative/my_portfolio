// ProjectCard.js
import React from 'react';
import { Link, Button } from "@nextui-org/react";

const ProjectAuth = ({ title, description, imageUrl, link }) => {
  return (
    <div className=" h-full flex sm:flex-row flex-col sm:gap-10 gap-5">
      <div className='sm:w-1/2 sm:h-60 flex overflow-hidden bg-[#9ec5e965] dark:bg-[#35383a] bg-opacity-80 rounded-3xl '>
        <img src={imageUrl} alt={title} className="rounded-2xl transition-all sm:translate-x-10 sm:translate-y-8 sm:hover:translate-x-7 sm:hover:translate-y-7"/>
      </div>
      <section className='my-auto gap-3 flex flex-col sm:w-1/2'>
         <h3 className='text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>{title}</h3>
         <p className=' '>{description}</p>
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
