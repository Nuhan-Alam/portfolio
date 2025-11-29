
import { AiOutlineHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { CgMail } from "react-icons/cg";


const NavBar = ({introRef,projectsRef,contactRef,scrollToSection}) => {
    return (
        <div className="fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 bottom-3 md:bottom-0  md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col items-center justify-center gap-6 p-2 py-0 md:py-10 rounded-4xl z-50 bg-gradient-to-tr from-gray-800 to-gray-900">
            <button className="text-white hover:text-black hover:bg-white p-2 rounded-full relative group"
                onClick={() => scrollToSection(introRef)}
                >
                <span className="absolute bottom-full md:bottom-auto md:right-full mb-2 md:mb-0 md:mr-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Introduction
                </span>
                <AiOutlineHome className=" h-6 w-6 " />
            </button>
            
            <button className="text-white hover:text-black hover:bg-white p-2 rounded-full relative group"
                onClick={() => scrollToSection(projectsRef)}
                >
                <span className="absolute bottom-full md:bottom-auto md:right-full mb-2 md:mb-0 md:mr-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Projects
                </span>
                <GoProjectRoadmap className=" h-6 w-6" />
            </button>

            <button className="text-white hover:text-black hover:bg-white p-2 rounded-full relative group"
                onClick={() => scrollToSection(contactRef)}
                >
                <span className="absolute bottom-full md:bottom-auto md:right-full mb-2 md:mb-0 md:mr-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Contact Me
                </span>
                <CgMail className="h-6 w-6 " />
            </button>
        </div>
    );
};

export default NavBar;