import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import Image from "../photos/Profilephoto.png";

const roles = ["Full Stack Developer", "Frontend Developer", "Coder"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
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
    <div className="relative pt-24 md:pt-32 h-screen flex flex-col md:flex-row justify-evenly items-center px-4 md:px-20 bg-gradient-to-br from-white to-purple-500 overflow-hidden">
      
      {/* Hero text content */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-purple-800">
          Hii! Manshi Kumari
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-800 mt-3">
          I am a <span className="text-purple-500 text-2xl sm:text-3xl">{text}|</span>
        </div>

        <p className="text-gray-700 text-base sm:text-lg mt-3 leading-relaxed">
          I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and bringing ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4 items-center">
          <div
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 cursor-pointer w-fit text-center"
          >
            Hire Me
          </div>

          <a
            href="/public/Manshi_Kumari_Resume.pdf"
           target="_blank"
           download="my-resume"
           className="inline-block bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 cursor-pointer w-fit text-center"
          >
            Resume
         </a>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="https://github.com/manshikumari67" target="_blank" rel="noopener noreferrer">
              <div className="rounded-full h-[50px] w-[50px] shadow-md shadow-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-400">
                <FiGithub fontSize={24} className="text-purple-900" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/manshi-kumari-15742b283" target="_blank" rel="noopener noreferrer">
              <div className="rounded-full h-[50px] w-[50px] shadow-md shadow-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-400">
                <FiLinkedin fontSize={24} className="text-purple-900" />
              </div>
            </a>
            <a href="mailto:manshikumari345@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="rounded-full h-[50px] w-[50px] shadow-md shadow-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-400">
                <IoMailOpenOutline fontSize={24} className="text-purple-900" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-8 md:mt-0 flex-shrink-0">
        <div className="hero-sec-right h-[220px] w-[200px] sm:h-[260px] sm:w-[240px] md:h-[280px] md:w-[260px] lg:h-[300px] lg:w-[280px] rounded-lg overflow-hidden shadow-[0_14px_20px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-700">
          <img
            src={Image}
            alt="Hero Section"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Faded background name */}
      <div className="absolute  bottom-[-10px] left-0 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold text-white opacity-20 select-none pointer-events-none whitespace-nowrap">
  Manshi Kumari
</div>
    </div>
  );
};

export default HeroSection;
