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
    <nav className="flex items-center justify-between bg-purple-100 px-6 py-3 shadow-[0_6px_8px_-2px_rgba(0,0,0,0.7)] w-full fixed z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-950">
        Manshi Kumari
      </h1>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
        <GiHamburgerMenu />
      </button>

      {/* Menu Items */}
      <div
        className={`md:flex md:flex-row md:static absolute top-[64px] left-0 w-full md:w-auto bg-purple-100 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out
          ${menuOpen ? 'flex flex-col' : 'hidden'}`}
      >
        <div onClick={() => scrollToSection('about')} className="cursor-pointer text-lg px-6 py-3 border-b md:border-none text-cyan-950 hover:text-purple-900">About</div>
        <div onClick={() => scrollToSection('skills')} className="cursor-pointer text-lg px-6 py-3 border-b md:border-none text-cyan-950 hover:text-purple-900">Skills</div>
        <div onClick={() => scrollToSection('project')} className="cursor-pointer text-lg px-6 py-3 border-b md:border-none text-cyan-950 hover:text-purple-900">Projects</div>
        <div onClick={() => scrollToSection('contact')} className="cursor-pointer text-lg px-6 py-3 md:border-none text-cyan-950 hover:text-purple-900">Contact</div>
      </div>
    </nav>
  );
};

export default NavBar;
