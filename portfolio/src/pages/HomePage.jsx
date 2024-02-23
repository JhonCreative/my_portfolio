import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Experience from "../components/Experience";

export default function HomePages(){
    return(
        <div className="mx-auto max-w-3xl">
            <Navbar/>
            <Hero/>
            <div className="h-[1px] mx-5 rounded-full bg-slate-600 dark:bg-slate-300 bg-opacity-50 dark:bg-opacity-50 my-10"></div>
            <About/>
            <Experience/>
            <Proyects/>
            <section className="h-screen text-white"></section>
        </div>
    );
}