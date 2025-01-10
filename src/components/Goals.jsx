import React from 'react';

const Goals = () => {
  const goalsData = [
    {
      title: "Short Term Goals",
      description: "Achieve specific objectives within the next 6 months.",
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m-3-3H9m3-4a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    },
    {
      title: "Long Term Goals",
      description: "Plan for achievements over the next 1-5 years.",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: "Project Implementation",
      description: "Execute projects effectively and efficiently.",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
        </svg>
      ),
    },
    {
      title: "Personal Development",
      description: "Focus on self-improvement and skill enhancement.",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: "Financial Goals",
      description: "Set and achieve financial stability and growth.",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">


        <div className="mb-14 text-center">
     <span className="py-1 px-4 bg-indigo-100 rounded-full text-md font-medium text-indigo-600 text-center">
         Goals
       </span>
       </div>

          <h2 className="text-4xl font-bold text-gray-900 py-5">Post-Program Goals</h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Here are my goals after completing the program.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {goalsData.slice(0, 3).map((goal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center w-72">
              <div className="flex justify-center mb-4">
                {goal.icon}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">{goal.title}</h4>
              <p className="text-sm font-normal text-gray-500">{goal.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-10">
          {goalsData.slice(3).map((goal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center w-72">
              <div className="flex justify-center mb-4">
                {goal.icon}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">{goal.title}</h4>
              <p className="text-sm font-normal text-gray-500">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;