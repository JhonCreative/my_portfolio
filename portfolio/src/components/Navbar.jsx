import React, { useEffect, useState } from "react";
import image from '../assets/images/my_person.png';
import sun from '../assets/images/svg/sun.svg'
import moon from '../assets/images/svg/moon.svg'

function Navbar() {
  // animacion de aparecer y desaparecer
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

  // modo claro y oscuro
  // Efecto de luna y sol
  const [moonIcon, setMoonIcon] = useState('../assets/images/svg/moon.svg');
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark')
      setMoonIcon(moon);
    } else {
      document.querySelector('html').classList.remove('dark')
      setMoonIcon(sun);
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <div
      className={`mx-auto max-w-3xl sticky top-0 z-10 text-white font-custom font-bold `}
    >
      <header className="-full bottom-0 static flex justify-between items-center py-3 px-5 z-20 dark:bg-[#25282a] bg-[#f9f9f9] bg-opacity-80 backdrop-blur-sm">
        <section className={`${showNavbar ? 'opacity-100' : 'opacity-0 invisible'} transition-all`}>
          <a href="" className="flex items-center gap-4">
            <img className="rounded-full bg-[#9ec5e9da] dark:bg-[#404243] h-12 w-12 border-4 border-[#f7f7f7] dark:border-[#383c3dd6]" src={image} alt="logo" />
            <h1 className=" font-semibold text-lg whitespace-nowrap dark:text-slate-300 text-slate-600">Jhon Calsina</h1>
          </a>
        </section>
        <div>
          <button onClick={handleChangeTheme}>
            <img src={moonIcon} alt="" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
