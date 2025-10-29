import React from 'react';

const LanguageLevel = ({language, level}) => {
    return (
        <div className='flex my-2'>
            <div className='flex justify-start items-center w-20'>
        <p className="text-xl text-white pr-2">{language}</p>
    </div>
  <div className="w-2/3 md:w-1/3 flex items-center gap-x-1">
    
    {Array.from({ length: 4 }).map((_, index) => (
      <div 
        key={index}
        className={`w-full h-4 flex flex-col justify-center overflow-hidden ${index < level ? 'bg-teal-500' : 'bg-gray-700'} text-md text-white text-center whitespace-nowrap transition duration-500`}
        role="progressbar" 
        aria-valuenow={10} 
        aria-valuemin={0} 
        aria-valuemax={100}
      ></div>
    ))}
  </div>
  <div className="text-white text-md ml-2 flex justify-center items-center w-10">
    {Math.round((level/4)*100)}%
        </div>
        </div>
    );
};

export default LanguageLevel;