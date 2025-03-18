import React from 'react';

const About = () => {
    
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 bg-gray-100">
      
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-gray-300">

        <img
          src="https://i.pinimg.com/736x/70/b1/ec/70b1ec9356a859100debef06b4bb4623.jpg"
          alt="Profile"
          className="w-full h-full object-cover border-blue-700"
        />

      </div>
      
      
      <div className="md:ml-8 mt-6 md:mt-0 max-w-lg text-center md:text-left">

        <h2 className="text-2xl font-serif font-bold md:text-3xl text-gray-700">About Me</h2>

        <p className="mt-4 text-gray-600">
          Hi, I'm Hrithik Roshan, a passionate web developer with a love for creating interactive and visually appealing user experiences. I specialize in React, Tailwind CSS, and modern web technologies.
        </p>
        
        <div className="mt-6">

          <h3 className="text-xl font-semibold font-serif text-gray-700">Skills</h3>

          <div className="mt-4 space-y-4">

            {[
              { name: 'React',  level: '80%' }, 

              { name: 'JavaScript', level: '85%' },

              { name: 'Tailwind CSS', level: '75%' },

              { name: 'HTML & CSS', level: '90%' },

              { name: 'Node.js', level: '70%' }

            ].map((skill) => (

              <div key={skill.name}>

                <p className="text-sm font-bold text-gray-800 flex justify-between">{skill.name} {skill.level}</p>

                <div className="w-full bg-gray-300 rounded-full h-3">

                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: skill.level }}>
                    
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
