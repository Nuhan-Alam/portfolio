import React from 'react';
import Carouseldefault from '../Carouseldefault';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl ml-auto">
        {/* Main Title Section */}
        <div className="mb-12">
          <div className="text-white mb-4 flex items-center gap-2">
            <span class="relative flex size-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-white"></span>
            </span>
            <span className="text-lg">Projects</span>
          </div>

          <p
            className="text-white block animate-slide-in-right text-lg max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Here are some projects I recently worked on &#128071;
          </p>

          <div className='flex flex-col'>
            <ProjectDetails/>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Projects;