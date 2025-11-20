import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const PortfolioCard = () => {
    return (
          <div className="relative lg:fixed top-0.5 bottom-0.5  left-0 md:left-12  my-3 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 p-2 md:p-5 md:mx-0 flex flex-col items-center  w-full md:w-1/3 lg:w-1/4">
      <div className="flex flex-col justify-center items-center gap-4">
      {/* Heading Section */}
      <div className="flex justify-center items-center gap-5 w-full mb-3">
        <img 
          src="https://wpriverthemes.com/jayden/wp-content/themes/jayden/images/logo/logo-1.svg" 
          alt="Logo"
          className=""
        />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-sm text-white">
            Available
          </div>
        </div>
      </div>

      {/* Avatar Section */}
      <div className=" mb-3 relative">
        <div className="w-auto relative mb-4">
          <img 
            src="https://res.cloudinary.com/dbgsrmvgi/image/upload/v1760707689/photo_2025-10-17_19-27-57_ktr5jy.jpg" 
            alt="Avatar"
            className="w-auto object-cover rounded-lg"
          />
        </div>
        <img 
          src="https://res.cloudinary.com/dbgsrmvgi/image/upload/v1761269022/sign_rckpi0.png" 
          alt="Signature"
          className="absolute bottom-0 right-17 w-36 h-auto"
        />
      </div>
      
        {/* Info Section */}
      <div className="text-center gap-5">
        <h6 className="text-2xl tracking-wide font-semibold text-white">
          nuhanalam@gmail.com
        </h6>
        <div className="tracking-wide text-sm text-white">
          Chittagong,Bangladesh
        </div>
      </div>

      {/* Social Links */}
      <ul className="flex justify-center gap-4">
        {/* LinkedIN */}
        <li>
          <a 
            href="https://www.linkedin.com/in/nu5an/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-white hover:text-black flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaLinkedin className="w-5"/>
          </a>
        </li>

        {/* Youtube */}
        <li>
          <a 
            href="https://www.youtube.com/@BackEndNuhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-white hover:text-black flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            <IoLogoYoutube className="w-6" />
          </a>
        </li>

        {/* LeetCode */}
        <li>
          <a 
            href="https://leetcode.com/u/Nuhan_Alam/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-white hover:text-black flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            <SiLeetcode className="w-6" />
          </a>
        </li>
        {/* GitHub */}
        <li>
          <a 
            href="https://github.com/Nuhan-Alam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-white hover:text-black flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiGithub className="w-8"/>
          </a>
        </li>
      </ul>

      {/* Get Started Button */}
      <a 
        href="#contact"
        className="flex items-center gap-3 bg-gray-900 hover:bg-white text-white hover:text-black px-8 py-3 rounded-full transition-colors group"
      >
        <span className="font-medium">Email Now</span>
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>
      </div>
      
    </div>
    );
};

export default PortfolioCard;