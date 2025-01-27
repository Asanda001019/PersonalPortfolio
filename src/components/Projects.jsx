import React from 'react';
import Project1 from '../assets/PROJECT1.png';
import Employees from '../assets/Employees.png';
import Hotel from '../assets/Hotel.png';
import MarketPlace from '../assets/MARKET-PLACE.png';
import Todo from '../assets/Todo.png';
import Weather from '../assets/Weather.png';
import Recipe from '../assets/Recipe.png';
import Shopping from '../assets/Shopping.png';

const Projects = () => {
  const projectData = [
    {
      image: Project1,
      name: "User  Interface Challenge",
      description: "A web application that allows users to create and manage their own to-do lists.",
      features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete"],
      technologies: ["React.js", "Tailwind CSS"],
      link: "https://github.com/Asanda001019/TASK4-UI.git" 
    },
    {
      image: Employees,
      name: "Employee Management System",
      description: "A web application that allows employees to manage their details.",
      features: ["Add new employee", "Edit employee detail", "Remove employee", "View employee details"],
      technologies: ["React.js", "Tailwind CSS, Local Storage"],
      link: "https://task6-employees-application-front.onrender.com"
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
      image: MarketPlace,
      name: "Market Place",
      description: "A web application that allows users to browse and purchase products.",
      features: ["Browse products", "Add to cart", "Checkout", "Pay for purchase"],
      technologies: ["React.js", "Tailwind CSS, Firebase"],
      link: "https://github.com/Asanda001019/CodeTribe-Marketplace.git"
    },
    {
        image: Todo,
        name: "To-do List Application",
        description: "A web application that allows users to create and manage their own to-do lists.",
        features: ["Create tasks", "Edit tasks", "Delete tasks", "Mark tasks as complete", "Add tags"],
        technologies: ["React.js", "Tailwind CSS, Sqlite"],
        link: "https://github.com/Asanda001019/Task7.git"
      },
    {
      image: Weather,
      name: "Weather Application",
      description: "A web application that allows users to view weather information.",
      features: ["View current weather", "View weather forecast", "View historical weather data"],
      technologies: ["React.js", "Tailwind CSS, OpenWeather API"],
      link: "https://github.com/Asanda001019/Weather-App.git" 
    },
    {
      image: Recipe,
      name: "Recipe Application",
      description: "A web application that allows users to create and share recipes.",
      features: ["Create recipes", "Share recipes", "Add ingredients", "Add instructions"],
      technologies: ["React.js", "Tailwind CSS, Firebase"],
      link: "https://github.com/Asanda001019/Task9-Online-Recipe.git"
    },
    {
      image: Shopping,
      name: "Shopping Cart Application",
      description: "A web application that allows users to add items to their shopping cart.",
      features: ["Add items to cart", "Remove items from cart", "Checkout"],
      technologies: ["React.js", "Tailwind CSS, Firebase"],
      link: "https://github.com/Asanda001019/Shopping-List-App.git"
    }
  ];

  return (
    <section id='projects' className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-14 text-center">
            <span className="py-1 px-4 bg-indigo-100 rounded-full text-md font-medium text-indigo-600 text-center">
              Projects 
            </span>
          </div>
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow -md overflow-hidden transition-transform transform hover:scale-105">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;