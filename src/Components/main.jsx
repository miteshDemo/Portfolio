import React from 'react'


const main = () => {
    
  return (
//Example portfolio of hritik roshan
    <div>
      <section className="flex flex-col items-center justify-center text-center py-10 bg-gray-100 min-h-screen gap-1">
      <img
        src="https://i.pinimg.com/736x/70/b1/ec/70b1ec9356a859100debef06b4bb4623.jpg"  
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-700"
      />
      
      <h1 className="mt-4 text-3xl font-bold text-gray-800">Hritik Roshan</h1>
      <p className="text-gray-600 text-lg max-w-md px-4">
      </p>
      <p className='text-gray-600 font-bold'>Front End Developer</p>

      <p className='text-gray-600'>Hi! I'm a passionate web developer with expertise in React, Tailwind CSS, and
          modern frontend technologies. I love building clean, responsive, and user-friendly
          applications.</p>  

      <div className="mt-4 flex space-x-4">
        <a
          href="#"
          className="px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-lg shadow-md hover:bg-blue-500 hover:text-white font-serif font-bold"
        > Download CV</a>
        <a
          href="#"
          className="px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-lg shadow-md hover:bg-blue-500 hover:text-white font-serif font-bold"
        >Contact Me</a>
      </div>
    </section>
    </div>
  )
}

export default main
