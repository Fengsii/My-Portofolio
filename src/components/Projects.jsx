/* eslint-disable no-unused-vars */
import drakorinajaImg from '../assets/drakorinaja.png';
import fashionstoreImg from '../assets/FashionStore.jpg';
import bbibbstoreImg from '../assets/BbibbStore.jpg';
import restapiImg from '../assets/RestApi.jpg';
import CarrerConnect from "../assets/CarrerConnect.jpg"

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode,
  FaDatabase,
  FaStar
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

// Mock data untuk demo
const projects = [
  {
    id: 1,
    title: "DrakorinAja",
    image: drakorinajaImg,
    github: "https://github.com/Fengsii/BETA-TEST-Watch-Drakorin.git",
    visit: null,
    techStack: [
      { icon: <FaCode className="text-red-400" />, name: "HTML/CSS/JS" }
    ],
    description: "Aplikasi streaming drakor berbasis web menggunakan HTML, CSS, dan JavaScript."
  },
  {
    id: 2,
    title: "FashionStore",
    image: fashionstoreImg,
    github: "https://github.com/Fengsii/FhasionStoreDesktop.git",
    visit: null,
    techStack: [
      { icon: <FaCode className="text-blue-400" />, name: "C#" },
      { icon: <FaDatabase className="text-yellow-400" />, name: ".NET" },
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" }
    ],
    description: "Aplikasi desktop fashion store menggunakan C# dan .NET Framework."
  },
  {
    id: 3,
    title: "BbbibbStore",
    image: bbibbstoreImg,
    github: "https://github.com/Fengsii/BbibbStore",
    visit: null,
    techStack: [
      { icon: <FaCode className="text-blue-400" />, name: "C#" },
      { icon: <FaDatabase className="text-yellow-400" />, name: ".NET" },
      { icon: <FaCode className="text-blue-500" />, name: "ASP.NET Core" },
      { icon: <FaDatabase className="text-green-400" />, name: "SQL Server" }
    ],
    description: "E-commerce platform dibangun dengan .Net, ASP.NET Core dan SQL Server."
  },
  {
    id: 4,
    title: "RestAPI",
    image: restapiImg,
    github: "https://github.com/Fengsii/UTSCSharp2025.git",
    visit: null,
    techStack: [
      { icon: <FaCode className="text-blue-400" />, name: "C#" },
      { icon: <FaDatabase className="text-yellow-400" />, name: ".NET" },
      { icon: <FaCode className="text-blue-500" />, name: "ASP.NET Core" },
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" }
    ],
    description: "RESTful API untuk manajemen tugas menggunakan .Net, ASP.NET Core dan MySQL."
  },
  // {
  //   id: 5,
  //   title: "CareerConnect",
  //   image: CarrerConnect,
  //   github: "https://github.com/Fengsii/BbibbJobStreetJwtTokenRazor.git",
  //   visit: null,
  //   techStack: [
  //     { icon: <FaCode className="text-blue-400" />, name: "C#" },
  //     { icon: <FaDatabase className="text-yellow-400" />, name: ".NET" },
  //     { icon: <FaCode className="text-blue-500" />, name: "ASP.NET Core" },
  //      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" }
  //   ],
  //   description: "CareerConnect adalah website pencarian lowongan kerja. Dibangun menggunakan C# dengan Framework .NET & ASP.NET Core dengan MySQL sebagai database."
  // },
];

const Projects = () => {
  // Animasi yang lebih ringan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Handler untuk membuka GitHub
  const handleGithubClick = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Handler untuk demo
  const handleDemoClick = (demoUrl) => {
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.section 
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements - Dipermudah */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h1>
          
          <motion.div 
            className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mx-auto w-48"
            initial={{ width: 0 }}
            whileInView={{ width: '12rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover my latest work in web development, from frontend to backend solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 shadow-xl backdrop-blur-sm"
                whileHover={{
                  boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)',
                  borderColor: 'rgba(14, 165, 233, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-cyan-300 border border-cyan-400/30">
                      <FaStar className="inline mr-1" />
                      Featured
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <FaCode className="text-cyan-400" />
                      TECH STACK
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <div
                          key={`${project.id}-${idx}`}
                          className="flex items-center gap-1 bg-gray-700/50 px-2 py-1 rounded-lg text-xs border border-gray-600 hover:border-cyan-400 transition-colors duration-200"
                        >
                          {tech.icon}
                          <span className="text-gray-200">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 text-sm border border-gray-600 hover:border-cyan-400"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGithubClick(project.github)}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.button>
                    
                    {project.visit && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-200 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDemoClick(project.visit)}
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </motion.section>
  );
};

export default Projects;