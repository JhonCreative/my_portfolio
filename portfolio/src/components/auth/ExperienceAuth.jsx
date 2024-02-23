import React from "react";

const ExperienceAuth = ({ startdate, endingdate, title, rol, description}) => {
   return (
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
         <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{startdate} — {endingdate}</header>
         <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
               <div className="text-xl sm:text-1xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100">
                  <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link">{title}</div>
               </div>
               <div>
                  <div className="text-slate-500">{rol}</div>
               </div>
            </h3>
            <p className="mt-2 font-custom track text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl rounded-2xl">{description}</p>
         </div>
      </div>
   )
}

export default ExperienceAuth;