import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const PortfolioCard = () => {
    return (
          <div className="relative md:fixed top-2 left-0 md:left-12 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 p-2 md:p-8 mx-2 md:mx-0 flex flex-col items-center max-w-md">
      {/* Heading Section */}
      <div className="flex justify-center items-center gap-5 w-full mb-8">
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
        <div className="w-64 h-64 relative mb-4">
          <img 
            src="https://res.cloudinary.com/dbgsrmvgi/image/upload/v1760707689/photo_2025-10-17_19-27-57_ktr5jy.jpg" 
            alt="Avatar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <img 
          src="https://res.cloudinary.com/dbgsrmvgi/image/upload/v1761269022/sign_rckpi0.png" 
          alt="Signature"
          className="absolute bottom-0 right-17 w-36 h-auto"
        />
      </div>

      {/* Info Section */}
      <div className="text-center mb-6">
        <h6 className="text-2xl tracking-wide font-semibold text-white mb-2">
          nuhanalam@gmail.com
        </h6>
        <div className="tracking-wide text-sm text-white">
          Chittagong,Bangladesh
        </div>
      </div>

      {/* Social Links */}
      <ul className="flex justify-center gap-4 mb-8">
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
        <li>
          <a 
            href="https://www.facebook.com/Nu7an" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-white hover:text-black flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
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
    );
};

export default PortfolioCard;