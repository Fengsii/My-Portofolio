import profileImg from '../assets/pp.jpg';
import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  // eslint-disable-next-line no-unused-vars
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  // eslint-disable-next-line no-unused-vars
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Skills data with enhanced styling
  const skills = [
    { name: "C#", color: "from-purple-500/20 to-indigo-500/30", text: "text-purple-400", icon: "🔷" },
    { name: "ASP.NET Core", color: "from-blue-500/20 to-cyan-500/30", text: "text-blue-400", icon: "🌐" },
    { name: "Microservices", color: "from-blue-500/20 to-indigo-500/30", text: "text-blue-400", icon: "🏗️" },
    { name: "REST API", color: "from-purple-500/20 to-violet-500/30", text: "text-purple-400", icon: "🔌" },
    { name: "Docker", color: "from-cyan-500/20 to-teal-500/30", text: "text-cyan-400", icon: "🐳" },
    { name: "Problem Solving", color: "from-yellow-500/20 to-orange-500/30", text: "text-yellow-400", icon: "🧩" },
  ];

  const achievements = [
    { number: "4+", label: "Projects Built" },
    { number: "2+", label: "Years Learning" },
    { number: "Growing", label: "Skill Set" },
    { number: "Eager", label: "To Learn" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles - Reduced for mobile */}
        {[...Array(window.innerWidth > 768 ? 20 : 10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 relative"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About
              </span>
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Crafting robust backend solutions with passion and precision
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Profile */}
            <motion.div className="space-y-8 sm:space-y-10 lg:space-y-12 order-2 lg:order-1" variants={itemVariants}>
              
              {/* Profile Card */}
              <motion.div
                className="relative group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
                   
                    <motion.div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden shadow-xl flex-shrink-0">
                      <img 
                        src={profileImg}
                        alt="Your Profile" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white" style={{display: 'none'}}>
                        EZ
                      </div>
                    </motion.div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Efengsi Rahmanto Zalukhu</h3>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">Backend Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 text-center sm:text-left">
                    <p className="leading-relaxed text-sm sm:text-base">
                      Junior backend developer yang antusias mempelajari pengembangan sistem 
                      <span className="text-cyan-400 font-medium"> scalable</span> menggunakan{" "}
                      <span className="text-cyan-400 font-medium">C# dan ASP.NET Core</span>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">Technical Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className={`group relative bg-gradient-to-r ${skill.color} border border-cyan-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer`}
                      variants={cardVariants}
                      custom={index}
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-lg sm:text-2xl">{skill.icon}</span>
                        <span className={`font-medium text-sm sm:text-base ${skill.text}`}>{skill.name}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Quote */}
            <motion.div className="space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-2" variants={itemVariants}>
              
              {/* Stats Cards */}
              <motion.div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6" variants={itemVariants}>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-purple-400/50 transition-all duration-300"
                    variants={cardVariants}
                    custom={index}
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative text-center">
                      <motion.div
                        className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
                      >
                        {achievement.number}
                      </motion.div>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">{achievement.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote Card */}
              <motion.div
                className="relative group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-purple-400/50 transition-all duration-300">
                  <motion.div className="text-4xl sm:text-5xl lg:text-6xl text-purple-400/50 mb-2 sm:mb-4">❝</motion.div>
                  <blockquote className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                    "Passionate about creating elegant solutions to complex problems through clean code and innovative architecture."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">Efengsi Rahmanto Zalukhu</p>
                      <p className="text-gray-400 text-xs sm:text-sm">Backend Developer</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Action Button */}
              <motion.div 
                className="flex justify-center lg:justify-start"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-0.5 h-2 sm:w-1 sm:h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;