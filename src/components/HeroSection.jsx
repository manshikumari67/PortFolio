import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import Image from "../photos/hs-image.png"


const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Coder",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

   const [menuOpen, setMenuOpen] = useState(false);
  
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // close menu on click
      }
    };

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex));

      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="relative pt-28 h-screen flex justify-evenly bg-radial-[at_25%_35%] from-white to-purple-500 to-95% ">

      <div>
          {/* Faded background name */}
      <div className="absolute select-none text-[7em] font-bold text-gray-200 bottom-[-35px] left-6 z-0">
        Manshi Kumari
      </div>

      {/* Hero section content */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl pl-28">
        <div className="text-4xl font-medium text-purple-800">Hii! Manshi Kumari</div>

        <div className="text-2xl font-medium text-zinc-800 mt-5">
          I am a <span className="text-purple-500 text-3xl">{text}|</span>
        </div>

        <div className="text-gray-700 text-base mt-5">
          I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and bringing ideas to life.
        </div>

      <div className="flex justify-between">
          <div
          onClick={() => scrollToSection('contact')} 
          className="mt-4 inline-block bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 cursor-pointer w-fit"
        >
          Hire Me
        </div>

       <div className="flex gap-x-4 pt-2">
        <a href="https://github.com/manshikumari67" target="_blank" rel="noopener noreferrer">
          <div className="rounded-full h-[50px] w-[50px] shadow-md shadow-gray-800 flex items-center justify-center transition-transform duration-400 hover:scale-110">
           <FiGithub fontSize={24} className="text-purple-900" />
          </div></a>

        <a href="https://www.linkedin.com/in/manshi-kumari-15742b283" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full h-[50px] w-[50px] shadow-md shadow-gray-800 flex items-center justify-center transition-transform duration-400 hover:scale-110">
           <FiLinkedin fontSize={24} className="text-purple-900" />
        </div></a>

        <a href="mailto:manshikumari345@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full h-[50px] w-[50px] shadow-md shadow-gray-800 flex items-center justify-center transition-transform duration-400 hover:scale-110">
          <IoMailOpenOutline fontSize={24} className="text-purple-900"/>
        </div></a>
     </div>
      </div>
      </div>
      </div>


    {/* image section */}
      <div>
        <div className="hero-sec-right">
      <img
         src={Image}
        alt="Hero Section"
        className="h-[330px] w-[300px] object-cover p-8  hover:scale-105 transition-all duration-1000"
      />
    </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
