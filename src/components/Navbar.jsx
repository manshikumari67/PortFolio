import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on click
    }
  };

  return (
    <nav className="flex items-center justify-evenly bg-purple-100 px-4 py-3 shadow-[0_6px_8px_-2px_rgba(0,0,0,0.7)] w-full fixed z-50">
      <h1 className="text-2xl font-bold text-purple-950">M<span className="text-4xl">K</span></h1>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
        <GiHamburgerMenu />
      </button>

      {/* Menu Items */}
      <div className={`flex-col md:flex-row md:flex gap-6 ${menuOpen ? 'flex' : 'hidden'} absolute md:static top-[60px] left-0 w-full md:w-auto md:bg-transparent items-center`}>
       
        <div onClick={() => scrollToSection('about')} className="cursor-pointer text-lg text-cyan-950 hover:text-purple-900">About</div>
        <div onClick={() => scrollToSection('skills')} className="cursor-pointer text-lg text-cyan-950 hover:text-purple-900">Skills</div>
        <div onClick={() => scrollToSection('project')} className="cursor-pointer text-lg text-cyan-950 hover:text-purple-900">Projects</div>
        <div onClick={() => scrollToSection('contact')} className="cursor-pointer text-lg text-cyan-950 hover:text-purple-900">Contact</div>
      </div>
    </nav>
  );
};

export default NavBar;
