import React from 'react';
import Introduction from './Introduction';
import Projects from './Projects';
import ContactForm from './ContactForm';

const HomeDetails = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Introduction/>
            <Projects/>
            <ContactForm/>
        </div>
    );
};

export default HomeDetails;