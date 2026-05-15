import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Journey />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
