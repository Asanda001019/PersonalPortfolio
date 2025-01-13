import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced', usage: 'Used in all web projects' },
    { name: 'CSS', level: 'Advanced', usage: 'Used in styling web applications' },
    { name: 'JavaScript', level: 'Advanced', usage: 'Used in dynamic web applications' },
    { name: 'React', level: 'Advanced', usage: 'Used in building user interfaces' },
    { name: 'Node.js', level: 'Intermediate', usage: 'Used in backend development' },
    { name: 'React Native', level: 'Intermediate', usage: 'Used in building user interfaces' },
    { name: 'Mongo Db', level: 'Intermediate', usage: 'Used in backend development' },
  ];

  return (
    <section id='skills' className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">


      <div className="mb-14 text-center">
     <span className="py-1 px-4 bg-indigo-100 rounded-full text-md font-medium text-indigo-600 text-center">
         Skills 
       </span>
       </div>
        
        <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
          Programming Language Skills
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center w-full">
                <p className="font-medium text-lg text-black mr-0.5">{skill.name}</p>
                <p className="font-medium text-lg text-black ml-2">{skill.level}</p>
                <p className="font-normal text-gray-500 ml-4">{skill.usage}</p>
              </div>
              <div className="h-2 w-full rounded-3xl bg-amber-50">
                <span
                  className="h-full rounded-3xl bg-gray-900 flex"
                  style={{
                    width: skill.level === 'Advanced' ? '100%' : skill.level === 'Intermediate' ? '66%' : '33%',
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;