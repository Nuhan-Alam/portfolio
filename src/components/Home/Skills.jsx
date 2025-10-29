import React from 'react';

const Skills = ({heading,tags}) => {
    return (
        <div className="space-y-2 pb-5">
          <p className="text-lg text-white">{heading}:</p>
          {/* Tags */}
          <ul className="flex flex-wrap gap-3 pl-3">
            {tags.map((tag, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="inline-block px-6 py-2 rounded-full text-white bg-gray-700 hover:text-black hover:bg-white transition-colors duration-300"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default Skills;