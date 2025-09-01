import React from 'react';

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-montserrat mb-4">
          Deals & Projects
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Explore high-impact opportunities. Discover exciting ventures, from strategic partnerships to funding opportunities.
        </p>
        
        {/* Placeholder for project listings */}
        <div className="text-center p-16 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">Project listings will be displayed here.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;