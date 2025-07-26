import React from 'react'

const About = () => {
  return (
    <div id='about'
    className='w-full h-full py-20 bg-gradient-to-br from-indigo-100 via-white to-purple-700 '>
        <div className='flex flex-col items-center pt-4'>
            <div className='font-medium text-6xl '>
          About Me
      </div>

       <div className='border-2 w-[90px]  border-purple-400 '></div>
        </div>
         <div className='mt-9 w-9/12 mx-auto h-[400px] flex flex-col shadow-[0_4px_10px_rgba(0,0,0,0.7)] p-4 bg-white rounded-3xl pb-3.5 mb-3.5'>
        
      {/* Decorative top-left circle */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-300 opacity-30 rounded-full blur-2xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Hi! I’m <span className="text-purple-700">Manshi Kumari</span></h2>

        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          A passionate <span className="text-blue-600 font-medium">frontend developer</span> with strong skills in <span className="text-blue-600 font-medium">HTML, CSS, JavaScript,</span> and <span className="text-blue-600 font-medium">React</span>.
          I love turning ideas into clean, responsive user interfaces. I've built several projects including a 
          <span className="font-medium text-green-700"> portfolio site</span>, <span className="font-medium text-green-700">e-commerce UI</span>, and a 
          <span className="font-medium text-green-700"> discussion forum frontend</span>.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
          I enjoy working with modern tools like <span className="font-semibold text-pink-600">Tailwind CSS</span>, <span className="font-semibold text-pink-600">Vite</span>, and <span className="font-semibold text-pink-600">Framer Motion</span>.
          Currently exploring full-stack development and sharpening my <span className="text-purple-600 font-medium">DSA skills in Java</span>.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
          I’m looking for opportunities to work on impactful projects, grow as a developer, and collaborate with teams that value <span className="font-semibold text-indigo-600">creativity</span> and <span className="font-semibold text-indigo-600">clean code</span>.
        </p>

        {/* Call to action */}
        <p className="mt-5 text-2xl sm:text-3xl font-semibold text-red-700 italic tracking-wide animate-bounce">
          Let’s build something amazing together!
        </p>
      </div>

         </div>
    </div>
  )
}

export default About
