import React from 'react';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

const TeamSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h3 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
             Asanda Portia
             <br></br>Madondo
            </h3>
            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
            My Journey at CodeTribe Academy:
I embarked on my coding journey at CodeTribe Academy, where I completed an immersive full-stack development program. During my time there, I gained hands-on experience working with cutting-edge technologies such as React.js, Tailwind CSS, Node.js, and JavaScript. CodeTribe Academy provided me with a collaborative and supportive environment that nurtured my growth as a developer.

The academy's project-based learning approach helped me build real-world projects, honing my technical skills while fostering a growth mindset. Each project, challenge, and collaborative experience enhanced my ability to solve problems, optimize code, and improve user experience, all of which are essential skills for a web developer.
            </p>
            <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">
              Join our team
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              <img
                src={image1}
                alt="Team member 1"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
              <img
                src={image2}
                alt="Team member 1"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
            <img
                src={image3}
                alt="Team member 1"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
               <img
                src={image4}
                alt="Team member 1"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
              <img
                src="https://pagedone.io/asset/uploads/1696238720.png"
                alt="Team member 5"
                className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
              />
              <img
                src={image1}
                alt="Team member 1"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
