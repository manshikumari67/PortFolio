import React from 'react'

const About = () => {
  return (
    <div
      id="about"
      className="w-full py-20 bg-gradient-to-br from-indigo-100 via-white to-purple-700"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center pt-4">
        <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl text-center">
          About Me
        </h1>
        <div className="border-2 w-[70px] sm:w-[90px] mt-2 border-purple-400"></div>
      </div>

      {/* About Card */}
      <div className="mt-9 w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex flex-col shadow-[0_4px_10px_rgba(0,0,0,0.7)] p-6 sm:p-8 bg-white rounded-3xl relative overflow-hidden">

        {/* Decorative top-left circle */}
        <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-purple-300 to-pink-300 opacity-30 rounded-full blur-2xl animate-pulse"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Hi! I’m <span className="text-purple-700">Manshi Kumari</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            A passionate <span className="text-blue-600 font-medium">frontend developer</span> with strong skills in <span className="text-blue-600 font-medium">HTML, CSS, JavaScript</span>, and <span className="text-blue-600 font-medium">React</span>. I love turning ideas into clean, responsive user interfaces. I've built several projects including a <span className="font-medium text-blue-600">portfolio site</span>, <span className="font-medium text-blue-600">e-commerce UI</span>, and a <span className="font-medium text-blue-600">discussion forum frontend</span>.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            I enjoy working with modern tools like <span className="font-semibold text-blue-600">Tailwind CSS</span>, <span className="font-semibold text-blue-600">Vite</span>, and <span className="font-semibold text-blue-600">Framer Motion</span>. Currently exploring full-stack development and sharpening my <span className="text-blue-600 font-medium">DSA skills in Java</span>.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            I’m looking for opportunities to work on impactful projects, grow as a developer, and collaborate with teams that value <span className="font-semibold text-blue-600">creativity</span> and <span className="font-semibold text-blue-600">clean code</span>.
          </p>

          {/* Call to action */}
          <p className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 italic tracking-wide animate-bounce">
            Let’s build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
