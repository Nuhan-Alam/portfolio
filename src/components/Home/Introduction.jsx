
import LanguageLevel from "./LanguageLevel";
import Skills from "./Skills";

const Introduction = () => {



  const languages = ["C / C++","Python", "Javascript","HTML", "CSS" , "MySQL"];
  const frameworks= ["Django","Django REST Framework",  "React", "Tailwind CSS"];
  const version_management= ["Git", "Github"];
  const other_technologies= ["Supabase", "npm" , "Vite" , "Render" , "Cloudinary" , "Netlify",];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl ml-auto">
        {/* Main Title Section */}
        <div className="mb-12">
          <div className="text-white mb-4 flex items-center gap-2">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-white"></span>
            </span>
            <span className="text-lg">Introduction</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white">
            <span className="block animate-slide-in-right">
              Full-Stack Developer
            </span>
          </h1>

          <p
            className="text-white block animate-slide-in-right text-lg max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            I'm a web developer with a genuine passion for the field, constantly
            learning new technologies and improving my skills.
          </p>
        </div>

        <Skills heading='Languages' tags={languages}/>
        <Skills heading='Main Frameworks / Libraries' tags={frameworks}/>
        <Skills heading='Version Manager' tags={version_management}/>
        <Skills heading='Other Technologies I used' tags={other_technologies}/>

         <p className="text-2xl text-white">Communication:</p>
        <LanguageLevel language="English" level={4}/>
        <LanguageLevel language="Bangla" level={4}/>
        <LanguageLevel language="Arabic" level={3}/>

      </div>
    </div>
  );
};

export default Introduction;
