
import { AiOutlineHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { CgMail } from "react-icons/cg";


const NavBar = ({introRef,projectsRef,contactRef,scrollToSection}) => {
    return (
        <div className="fixed md:right-8 bottom-0  md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col items-center justify-center gap-6 p-2 py-0 md:py-10 rounded-4xl z-50 bg-gradient-to-tr from-gray-800 to-gray-900">
            <button className="text-white hover:text-black hover:bg-white p-2 rounded-full"
                onClick={() => scrollToSection(introRef)}
                >
                <AiOutlineHome className=" h-6 w-6 " />
            </button>
            
            <button className="text-white hover:text-black hover:bg-white p-2 rounded-full"
                onClick={() => scrollToSection(projectsRef)}
                >
                <GoProjectRoadmap className=" h-6 w-6" />
            </button>

            <button className="text-white hover:text-black hover:bg-white p-2 rounded-full"
                onClick={() => scrollToSection(contactRef)}
                >
                <CgMail className="h-6 w-6 " />
            </button>
        </div>
    );
};

export default NavBar;