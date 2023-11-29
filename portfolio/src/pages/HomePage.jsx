import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function HomePages(){
    return(
        <div className="mx-auto max-w-3xl">
            <Navbar/>
            <Hero/>
            <section className="h-screen text-white">hola</section>
            <section className="h-screen">hola</section>
        </div>
    );
}