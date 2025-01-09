import React from 'react';
import Project1 from '../assets/PROJECT1.png';

const Projects = () => {
  const projectData = [
    {
      image: Project1,
      name: "User  Interface Challenge",
      description: "A web application that allows users to create and manage their own to-do lists.",
      features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete"],
      technologies: ["React.js", "Tailwind CSS"]
    },
    {
      image: Project1,
      name: "User  Interface Challenge",
      description: "A web application that allows users to create and manage their own to-do lists.",
      features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete"],
      technologies: ["React.js", "Tailwind CSS"]
    },
    {
      image: Project1,
      name: "User  Interface Challenge",
      description: "A web application that allows users to create and manage their own to-do lists.",
      features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete"],
      technologies: ["React.js", "Tailwind CSS"]
    },
    {
      image: Project1,
      name: "User  Interface Challenge",
      description: "A web application that allows users to create and manage their own to-do lists.",
      features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete"],
      technologies: ["React.js", "Tailwind CSS"]
    },
    {
      image: "https://pagedone.io/asset/uploads/1696238396.png",
      name: "Patricia Angely",
      description: "A project description for Patricia's project.",
      features: ["Feature 1", "Feature 2"],
      technologies: ["Tech 1", "Tech 2"]
    },
    {
      image: "https://pagedone.io/asset/uploads/1696238411.png",
      name: "Jerom Bell",
      description: "A project description for Jerom's project.",
      features: ["Feature 1", "Feature 2"],
      technologies: ["Tech 1", "Tech 2"]
    },
    {
      image: "https://pagedone.io/asset/uploads/1696238425.png",
      name: "Yasmine Tano",
      description: "A project description for Yasmine's project.",
      features: ["Feature 1", "Feature 2"],
      technologies: ["Tech 1", "Tech 2"]
    },
    {
      image: "https://pagedone.io/asset/uploads/1696238446.png",
      name: "Martin Darbys",
      description: "A project description for Martin's project.",
      features: ["Feature 1", "Feature 2"],
      technologies: ["Tech 1", "Tech 2"]
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <h5 className="font-semibold text-gray-900">Features:</h5>
                <ul className="list-disc list-inside mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <h5 className="font-semibold text-gray-900">Technologies Used:</h5>
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

export default Projects;