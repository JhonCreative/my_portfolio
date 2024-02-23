import React from "react";
import ExperienceAuth from "./auth/ExperienceAuth";

function Experience() {
   return (
      <section className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
         <div>
            <h2 className='text-2xl sm:text-1xl text-center sm:text-left font-bold text-slate-800 dark:text-slate-100'>My Experience</h2>
         </div>
         <div>
            <ol>
               <li className="mb-12">
                  <ExperienceAuth
                     startdate={2018}
                     endingdate={2022}
                     title={"Enginer the sound"}
                     rol={"Sound"}
                     description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias earum architecto ratione perferendis asperiores fugiat veniam voluptatibus quidem, quae sunt animi consectetur deleniti incidunt ex placeat! Exercitationem debitis possimus eum?"}
                  />
               </li>
               <li className="mb-12">
                  <ExperienceAuth
                     startdate={2021}
                     endingdate={"DEC 2022"}
                     title={"Enginer the sound"}
                     rol={"Sound"}
                     description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias earum architecto ratione perferendis asperiores fugiat veniam voluptatibus quidem, quae sunt animi consectetur deleniti incidunt ex placeat! Exercitationem debitis possimus eum?"}
                  />
               </li>
               <li className="mb-12">
                  <ExperienceAuth
                     startdate={2021}
                     endingdate={"DEC 2022"}
                     title={"Enginer the sound"}
                     rol={"Sound"}
                     description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias earum architecto ratione perferendis asperiores fugiat veniam voluptatibus quidem, quae sunt animi consectetur deleniti incidunt ex placeat! Exercitationem debitis possimus eum?"}
                  />
               </li>
            </ol>
         </div>
         
         hola mundo
      </section>
   )
}

export default Experience;