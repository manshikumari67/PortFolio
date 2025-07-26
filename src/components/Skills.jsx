import React from 'react';
import CSS from '../icons/css.png'
import HTML from '../icons/html.png'
import JS from '../icons/js.png'
import REACT from '../icons/react.png'
import NODE from '../icons/nodejs.png';
import EXPRESS from '../icons/express.png';
import MONGO from '../icons/mongodb.png';
import GIT from '../icons/git.png';
import GITHUB from '../icons/github.png';
import TAILWIND from '../icons/tailwind.png';
import VSCODE  from '../icons/vscode.jpeg';


// 🔧 Skill data object
const skills = {
  frontend: [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JS },
    { name: "React", icon: REACT },
    { name: "Tailwind", icon: TAILWIND },
  ],
  backend: [
    { name: "Node.js", icon: NODE },
    { name: "Express", icon: EXPRESS },
    { name: "MongoDB", icon: MONGO },
  ],
  tools: [
    { name: "Git", icon: GIT },
    { name: "GitHub", icon: GITHUB },
    { name: "VS Code", icon: VSCODE },
  ]
};

const Skills = () => {
  return (
    <section className="relative px-8 py-20 bg-purple-100 text-black" id="skills">

          {/* Faded background name */}
      <div className="absolute select-none text-[10em] font-bold text-gray-500 bottom-[-35px] right-3.5 z-0">
        Skills
      </div>

      <h2 className="text-6xl font-bold mb-6 text-center">My Skills</h2>
      <div className=" w-[90px] h-1  bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-3"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-4">
            {skills.frontend.map((skill, i) => (
              <div key={i} className=" p-4 rounded-lg bg-no-repeat bg-cover shadow-[10px_10px_20px_#1f1f1f] flex flex-col items-center w-35 hover:scale-105 transition">
                <img src={skill.icon} alt={skill.name} className="w-12 h-10 mb-2" />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap gap-4">
            {skills.backend.map((skill, i) => (
              <div key={i} className="p-4 rounded-lg bg-no-repeat bg-cover shadow-[10px_10px_20px_#1f1f1f]  flex flex-col items-center w-35 hover:scale-105 transition">
                <img src={skill.icon} alt={skill.name} className="w-11 h-10 mb-2" />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-4">
            {skills.tools.map((skill, i) => (
              <div key={i} className="bg-no-repeat bg-cover shadow-[10px_10px_20px_#1f1f1f] p-4 rounded-lg flex flex-col items-center w-35 hover:scale-105 transition">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
