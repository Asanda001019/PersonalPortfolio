import React from 'react';
import Project1 from '../assets/PROJECT1.png';
import Hotel from '../assets/Hotel.png';
import Utmost from '../assets/utmost-trip.png';

const Project = () => {
  const myProjectData = [
      {
        image: Utmost,
        name: "Weather Application",
        description: "A web application that allows users to view weather information.",
        features: ["View current weather", "View weather forecast", "View historical weather data"],
        technologies: ["React.js", "Tailwind CSS, OpenWeather API"],
        link: "https://github.com/Asanda001019/Weather-App.git" 
      },
  {
         image: Hotel,
         name: "Hotel booking application",
         description: "A web application that allows users to book hotel rooms and manage their bookings.",
         features: ["Book hotel rooms", "Manage bookings", "Pay for bookings", "Cancel bookings"],
         technologies: ["React.js", "Tailwind CSS, Firebase"],
         link: "https://github.com/Asanda001019/BreezeBoutique.git"
       },
       {
        image: Utmost,
        name: "Weather Application",
        description: "A web application that allows users to view weather information.",
        features: ["View current weather", "View weather forecast", "View historical weather data"],
        technologies: ["React.js", "Tailwind CSS, OpenWeather API"],
        link: "https://github.com/Asanda001019/Weather-App.git" 
      },
 
  ];

  return (
    <section id='project' className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">


        <div className="mb-14 text-center">
     <span className="py-1 px-4 bg-indigo-100 rounded-full text-md font-medium text-indigo-600 text-center">
         Projects 
       </span>
       </div>

          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">Group Projects</h2>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {myProjectData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <h5 className="font-semibold text-gray-800">Features:</h5>
                <ul className="list-disc list-inside mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <h5 className="font-semibold text-gray-800">Technologies Used:</h5>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="text-gray-600">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;