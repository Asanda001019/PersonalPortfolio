import React from 'react';
import Project1 from '../assets/PROJECT1.png';

const Project = () => {
  const myProjectData = [
    {
      image: Project1,
      name: "User  Interface Challenge",
      description: "A web application that allows users to create and manage their own to-do lists.",
      features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete"],
      technologies: ["React.js", "Tailwind CSS"]
    },
    {
      image: "https://example.com/my-project2.png",
      name: "My Second Project",
      description: "An innovative solution for managing personal finances.",
      features: ["Budget tracking", "Expense categorization", "Financial reports"],
      technologies: ["Vue.js", "Bootstrap"]
    },
    {
      image: "https://example.com/my-project3.png",
      name: "My Third Project",
      description: "A social media platform for connecting with friends.",
      features: ["User  profiles", "Messaging", "Photo sharing"],
      technologies: ["Angular", "Material UI"]
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">My Projects2</h2>
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