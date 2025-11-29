import React from 'react';
import Introduction from './Introduction';
import Projects from './Projects';
import ContactForm from './ContactForm';
import { useRef } from 'react';
import NavBar from '../NavBar';

const HomeDetails = () => {
    const introRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        };
    return (
        <div className='flex flex-col justify-start items-start'>
            <NavBar 
                introRef={introRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
                scrollToSection={scrollToSection}
            />
            <section ref={introRef}>
                <Introduction/>
            </section>
            
            <section ref={projectsRef} >
                <Projects/>
            </section>
            
            <section ref={contactRef}>
            <ContactForm/>
            </section>

        </div>
    );
};

export default HomeDetails;