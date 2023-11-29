import React, { useEffect, useState } from "react";
import image from '../assets/images/my_person.png';
import sun from '../assets/images/svg/sun.svg'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentScrollPos = window.pageYOffset;
        const isNavbarVisible = currentScrollPos > 0;

        setShowNavbar(isNavbarVisible);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mx-auto max-w-3xl sticky top-0 z-10 text-white font-custom font-bold `}
    >
      <header className="-full bottom-0 static flex justify-between items-center py-2 px-5 z-20 bg-[#25282a] bg-opacity-80 backdrop-blur-sm">
        <section className={`${showNavbar ? 'opacity-100' : 'opacity-0 invisible'} transition-all`}>
          <a href="" className="flex items-center gap-4">
            <img className=" rounded-full bg-[#404243]  h-12 w-12 border-4 border-[#383c3dd6]" src={image} alt="logo" />
            <h1 className="font-semibold text-lg whitespace-nowrap text-slate-300">Jhon Calsina</h1>
          </a>
        </section>
        <div>
          <button>
            <img src={sun} alt="" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
