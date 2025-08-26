import React, { useState } from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import JS from '../icons/js.png';
import REACT from '../icons/react.png';
import TailWind from '../icons/tailwind.png'
import HireNext from '../videos/HireNext.mp4';
import AquaVeda from '../videos/AquaVeda.mp4';
import ShoppingCart from '../videos/ShoppingCart.mp4';
import Course from '../videos/CourseStarter.mp4';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', video: '', description: '', github: '', live: '' });

  // Function to open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div id='project' className='h-full w-full bg-gradient-to-br from-purple-600 via-white to-indigo-300 py-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-7xl pt-4'>Projects</h1>
        <div className='border-2 w-[160px] mt-2 border-purple-800'></div>
        <p className='pt-3'>Here are some of my recent projects that showcase my skills and experience in web development.</p>
      </div>

      <div className='mt-10 flex flex-col gap-10'>

        {/* Project 1 */}
        <div className="relative w-[70%] h-[415px] mt-5 rounded-lg shadow-[0px_0px_40px_#1f1f1f] ml-[30px] group overflow-hidden sm:w-[70%] sm:ml-[5%]">
          <video className="absolute inset-0 w-full h-full object-cover" src={HireNext} autoPlay loop muted />
          <div className="absolute inset-0 z-0">
            <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="absolute top-[-90px] right-[-10px] text-[170px] font-bold text-white z-10 sm:text-[100px] sm:top-[-50px]">01</div>
            <div className="absolute bottom-4 left-4 text-white p-5 rounded-lg max-w-[65%] z-10 sm:max-w-[90%]">
              <div className="flex gap-3 mb-3">
                <img className="w-8 h-8" src={HTML} alt="HTML" />
                <img className="w-8 h-8" src={CSS} alt="CSS" />
                <img className="w-8 h-8" src={JS} alt="JavaScript" />
                <img className="w-8 h-8" src={REACT} alt="React" />
                <img className="w-8 h-8" src={TailWind} alt="TailWind" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 sm:text-xl">HireNext</h2>
              <p className="text-sm mb-4">Smart interview preparation platform with Q&A forums, quizzes, and leaderboard features.</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => openModal({
                    title: 'HireNext',
                    video: HireNext,
                    description: 'HireNext is a smart interview preparation platform that allows users to practice questions, participate in quizzes, and track their progress through leaderboard stats. It provides topic-wise Q&A forums and interactive discussions to improve peer learning and engagement. Built with React and TailwindCSS.',
                    github: 'https://github.com/manshikumari67/NextHire-Smart-Interview-Preparation-Platform',
                    live: ''
                  })}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
                >
                  Read More
                </button>
                <a href="https://github.com/manshikumari67/NextHire-Smart-Interview-Preparation-Platform" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-gray-300" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-xl hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative w-[70%] h-[415px] mt-[50px] shadow-[0px_0px_40px_#1f1f1f] rounded-lg ml-auto mr-[30px] group overflow-hidden sm:w-[70%] sm:mr-auto">
          <video className="absolute inset-0 w-full h-full object-cover z-0" src={AquaVeda} autoPlay loop muted />
          <div className="absolute inset-0 z-10">
            <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
            <div className="absolute top-[-90px] text-[170px] font-bold text-white z-10 sm:text-[100px] sm:top-[-50px]">02</div>
            <div className="absolute bottom-4 left-4 text-white p-5 rounded-lg max-w-[65%] z-10 sm:max-w-[90%]">
              <div className="flex gap-3 mb-3">
                <img className="w-8 h-8" src={HTML} alt="HTML" />
                <img className="w-8 h-8" src={CSS} alt="CSS" />
                <img className="w-8 h-8" src={JS} alt="JavaScript" />
                <img className="w-8 h-8" src={REACT} alt="React" />
                 <img className="w-8 h-8" src={TailWind} alt="TailWind" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 sm:text-xl">AquaVeda</h2>
              <p className="text-sm mb-4">AquaVeda is a platform focused on water recycling awareness, providing resources and educational content to promote sustainable water usage and environmental responsibility.</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => openModal({
                    title: 'AquaVeda',
                    video: AquaVeda,
                    description: 'AquaVeda is a comprehensive platform to raise awareness about water recycling. It offers educational content, tips, and interactive resources to encourage sustainable water usage. Built with React and TailwindCSS.',
                    github: 'https://github.com/manshikumari67/AquaVeda',
                    live: ''
                  })}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
                >
                  Read More
                </button>
                <a href="https://github.com/manshikumari67/AquaVeda" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-gray-300" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-xl hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

         {/* Project 3 */}
        <div className="relative w-[70%] h-[415px] mt-5 rounded-lg shadow-[0px_0px_40px_#1f1f1f] ml-[30px] group overflow-hidden sm:w-[70%] sm:ml-[5%]">
          <video className="absolute inset-0 w-full h-full object-cover z-0" src={ShoppingCart} autoPlay loop muted />
          <div className="absolute inset-0 z-10">
            <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
            <div className="absolute top-[-90px] right-[-10px] text-[170px] font-bold text-white z-10 sm:text-[100px] sm:top-[-50px]">03</div>
            <div className="absolute bottom-4 left-4 text-white p-5 rounded-lg max-w-[65%] z-10 sm:max-w-[90%]">
              <div className="flex gap-3 mb-3">
                <img className="w-8 h-8" src={HTML} alt="HTML" />
                <img className="w-8 h-8" src={CSS} alt="CSS" />
                <img className="w-8 h-8" src={JS} alt="JavaScript" />
                <img className="w-8 h-8" src={REACT} alt="React" />
                 <img className="w-8 h-8" src={TailWind} alt="TailWind" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 sm:text-xl">Shopping Cart</h2>
              <p className="text-sm mb-4">A shopping cart application that fetches products from API, allows adding/removing items, and calculates total summary and bill.</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => openModal({
                    title: 'Shopping Cart',
                    video: ShoppingCart,
                    description: ' This shopping cart app fetches product data from an API, allows users to add or delete items, shows the total summary, and generates the final bill. Built with React and TailwindCSS for a responsive, smooth user experience.',
                    github: 'https://github.com/manshikumari67/Shoping_Cart',
                    live: ''
                  })}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
                >
                  Read More
                </button>
                <a href="https://github.com/manshikumari67/Shoping_Cart" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-gray-300" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-xl hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>





         {/* Project 4 */}
        <div className="relative w-[70%] h-[415px] mt-[50px] shadow-[0px_0px_40px_#1f1f1f] rounded-lg ml-auto mr-[30px] group overflow-hidden sm:w-[70%] sm:mr-auto">
          <video className="absolute inset-0 w-full h-full object-cover z-0" src={Course} autoPlay loop muted />
          <div className="absolute inset-0 z-10">
            <div className="h-full w-0 bg-gray-800 opacity-60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
            <div className="absolute top-[-90px] text-[170px] font-bold text-white z-10 sm:text-[100px] sm:top-[-50px]">04</div>
            <div className="absolute bottom-4 left-4 text-white p-5 rounded-lg max-w-[65%] z-10 sm:max-w-[90%]">
              <div className="flex gap-3 mb-3">
                <img className="w-8 h-8" src={HTML} alt="HTML" />
                <img className="w-8 h-8" src={CSS} alt="CSS" />
                <img className="w-8 h-8" src={JS} alt="JavaScript" />
                <img className="w-8 h-8" src={REACT} alt="React" />
                 <img className="w-8 h-8" src={TailWind} alt="TailWind" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 sm:text-xl">CourseStarter</h2>
              <p className="text-sm mb-4">A course starter platform featuring different fields and related courses, with like/dislike options to improve recommendations.</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => openModal({
                    title: 'CourseStarter',
                    video: Course,
                    description: 'Course Starter is a platform that offers courses in various fields. Users can explore related courses and provide feedback using like/dislike options to improve course recommendations. Built with React and TailwindCSS for a responsive and smooth experience.',
                    github: 'https://github.com/manshikumari67/Course_Starter',
                    live: ''
                  })}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
                >
                  Read More
                </button>
                <a href="https://github.com/manshikumari67/Course_Starter" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-gray-300" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-xl hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Common Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full relative p-6 overflow-auto max-h-[90vh]">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-700 font-bold text-xl">&times;</button>
              <h2 className="text-2xl font-semibold mb-4">{modalContent.title}</h2>
              <video src={modalContent.video} controls className="w-full rounded mb-4"></video>
              <p className="text-gray-700 mb-4">{modalContent.description}</p>
              <div className="flex items-center gap-4">
                {modalContent.github && <a href={modalContent.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">GitHub</a>}
                {modalContent.live && <a href={modalContent.live} target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">Live Demo</a>}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects;
