import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import CSS from '../icons/css.png'
import HTML from '../icons/html.png'
import JS from '../icons/js.png'
import REACT from '../icons/react.png'



const Projects = () => {
  return (
    <div id='project'
    className='h-full w-full bg-gradient-to-br from-purple-600 via-white to-indigo-300 py-20'>
       <div className=' flex flex-col items-center ' >
          <h1 className='text-7xl pt-4'>Projects</h1>
          <div className='border-2 w-[160px] mt-2 border-purple-800'></div>
          <div>
            <p className='pt-3'>Here are some of my recent projects that showcase my skills and experience in web development.</p>
          </div>
       </div>


       <div className='mt-10'>
         
         {/* project1 */}
           <div
      className="relative w-[70%] h-[415px] bg-center mt-5 bg-no-repeat bg-cover shadow-[0px_0px_40px_#1f1f1f] rounded-lg ml-[30px] group overflow-hidden"
      style={{ backgroundImage: `url(${null})` }}
    >
      {/* Sliding gray overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
      </div>

      <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

        {/* Project number */}
      <div className="absolute top-[-90px]  right-[-10px] text-[170px] font-bold text-white z-10">
        01
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4  text-white p-5 rounded-lg max-w-[65%] z-10">
        {/* Skills */}
        <div className="flex gap-3 mb-3">
          <img className="w-8 h-8" src={HTML} alt="HTML" />
          <img className="w-8 h-8" src={CSS} alt="CSS" />
          <img className="w-8 h-8" src={JS} alt="JavaScript" />
          <img className="w-8 h-8" src={REACT} alt="React" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">Tint & Orange</h2>

        {/* Description */}
        <p className="text-sm mb-4">
          It's a car modification company which provides you sheets to protect
          your car from scratches.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition">
            Read More
          </button>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLink className="text-xl hover:text-gray-300" />
          </a>
        </div>
      </div>

      </div>
    </div>

      {/* project2 */}
       <div
      className="relative w-[70%] h-[415px] mt-[50px] bg-center bg-no-repeat bg-cover shadow-[0px_0px_40px_#1f1f1f] rounded-lg ml-auto mr-[30px] group overflow-hidden"
      style={{ backgroundImage: `url(${null})` }}
    >
      {/* Sliding gray overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
      </div>

      <div  className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

        {/* Project number */}
      <div className="absolute top-[-90px]  text-[170px] font-bold text-white z-10">
        02
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4  text-white p-5 rounded-lg max-w-[65%] z-10">
        {/* Skills */}
        <div className="flex gap-3 mb-3">
          <img className="w-8 h-8" src={HTML} alt="HTML" />
          <img className="w-8 h-8" src={CSS} alt="CSS" />
          <img className="w-8 h-8" src={JS} alt="JavaScript" />
          <img className="w-8 h-8" src={REACT} alt="React" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">Tint & Orange</h2>

        {/* Description */}
        <p className="text-sm mb-4">
          It's a car modification company which provides you sheets to protect
          your car from scratches.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition">
            Read More
          </button>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLink className="text-xl hover:text-gray-300" />
          </a>
        </div>
      </div>

      </div>
    </div>

      
       {/* project3 */}
       <div
      className="relative w-[70%] h-[415px] bg-center mt-[50px] bg-no-repeat bg-cover shadow-[0px_0px_40px_#1f1f1f] rounded-lg ml-[30px] group overflow-hidden"
      style={{ backgroundImage: `url(${null})` }}
    >
      {/* Sliding gray overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
      </div>


      <div  className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      {/* Project number */}
      <div className="absolute top-[-90px]  right-[-10px] text-[170px] font-bold text-white z-10">
        03
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 text-white p-5 rounded-lg max-w-[65%] z-10">
        {/* Skills */}
        <div className="flex gap-3 mb-3">
          <img className="w-8 h-8" src={HTML} alt="HTML" />
          <img className="w-8 h-8" src={CSS}alt="CSS" />
          <img className="w-8 h-8" src={JS} alt="JavaScript" />
          <img className="w-8 h-8" src={REACT} alt="React" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">Tint & Orange</h2>

        {/* Description */}
        <p className="text-sm mb-4">
          It's a car modification company which provides you sheets to protect
          your car from scratches.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition">
            Read More
          </button>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLink className="text-xl hover:text-gray-300" />
          </a>
        </div>
        </div>
      </div>
    </div>


     {/* project4 */}
      <div
      className="relative w-[70%] h-[415px] mt-[50px] bg-center bg-no-repeat bg-cover shadow-[0px_0px_40px_#1f1f1f] rounded-lg ml-auto mr-[30px] group overflow-hidden"
      style={{ backgroundImage: `url(${null})` }}
    >
      {/* Sliding gray overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
      </div>


      <div  className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      {/* Project number */}
      <div className="absolute top-[-90px] text-[170px] font-bold text-white z-10">
        04
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4  text-white p-5 rounded-lg max-w-[65%] z-10">
        {/* Skills */}
        <div className="flex gap-3 mb-3">
          <img className="w-8 h-8" src={HTML} alt="HTML" />
          <img className="w-8 h-8" src={CSS} alt="CSS" />
          <img className="w-8 h-8" src={JS} alt="JavaScript" />
          <img className="w-8 h-8" src={REACT} alt="React" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">Tint & Orange</h2>

        {/* Description */}
        <p className="text-sm mb-4">
          It's a car modification company which provides you sheets to protect
          your car from scratches.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition">
            Read More
          </button>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLink className="text-xl hover:text-gray-300" />
          </a>
        </div>
      </div>
      </div>
    </div>

       </div>


    </div>
  )
}

export default Projects
