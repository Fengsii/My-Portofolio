/* eslint-disable no-unused-vars */
import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef(null);
  const prevScrollY = useMotionValue(0);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Web Developer", "Backend Developer"];
  const typingSpeed = 100;
  const pauseDuration = 1500;

  const { scrollY } = useScroll();

  // Technology icons data with corrected .NET icon path
  const techIcons = [
    { 
      name: "React", 
      icon: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.237 2.237 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
      color: "text-cyan-400 hover:text-cyan-300"
    },
    { 
      name: "C#", 
      icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 2.5c3.32 0 6.5 1.577 6.5 4.5 0 1.5-.5 2.5-1.5 3.5 1 1 1.5 2 1.5 3.5 0 2.923-3.18 4.5-6.5 4.5s-6.5-1.577-6.5-4.5c0-1.5.5-2.5 1.5-3.5-1-1-1.5-2-1.5-3.5 0-2.923 3.18-4.5 6.5-4.5zm.5 2c-2.485 0-4.5 1.119-4.5 2.5s2.015 2.5 4.5 2.5 4.5-1.119 4.5-2.5S14.485 4.5 12 4.5zm0 10c-2.485 0-4.5 1.119-4.5 2.5s2.015 2.5 4.5 2.5 4.5-1.119 4.5-2.5-2.015-2.5-4.5-2.5zM16 8.5h1v1h-1v-1zm2 0h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm2 0h1v1h-1v-1zm-1 1h1v1h-1v-1z",
      color: "text-purple-400 hover:text-purple-300"
    },
    { 
      name: "JavaScript", 
      icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
      color: "text-yellow-400 hover:text-yellow-300"
    },
    { 
      name: ".NET", 
      icon: "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.868 0 0 1-.869.693.868.868 0 0 1-.868-.693.868.868 0 0 1 .868-.692.868.868 0 0 1 .869.692z",
      color: "text-blue-400 hover:text-blue-300"
    }
  ];

  // Handle scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    const previous = prevScrollY.get();
    
    if (current > previous && current > 100) {
      setIsVisible(false);
    } else if (current < previous - 5) {
      setIsVisible(true);
    }
    
    prevScrollY.set(current);
  });

  // Typing animation effect
  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
        }, typingSpeed / 2);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, currentRoleIndex, isTyping, roles, typingSpeed, pauseDuration]);

  // Tech icons animation variants
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 }
    }
  };

  // Floating animation for tech icons
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Pulsing animation for tech icons
  const pulsingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -50
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text Content - Now comes first for better mobile flow */}
        <motion.div 
          className="text-center md:text-left order-2 md:order-1 mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent relative block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Efengsi Rahmanto Zalukhu
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.h1>

          {/* Role text */}
          <motion.div 
            className="h-12 mb-4 md:mb-6 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-semibold min-h-[2.5rem] flex items-center justify-center md:justify-start relative"
              key={currentRoleIndex}
            >
              <span className="text-gray-300 mr-2">I'm a</span>
              <span className="text-cyan-400 font-bold">{displayedRole}</span>
              <motion.span
                className={`ml-1 inline-block w-1 h-6 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full ${!isTyping && displayedRole.length === roles[currentRoleIndex].length ? 'opacity-0' : ''}`}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-6 md:mb-8"
          >
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
              {`Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend. Terampil menggunakan React.js untuk antarmuka pengguna, serta C# dengan framework seperti .NET Framework dan ASP.NET Core dalam membangun aplikasi dan backend yang efisien dan aman.`.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.03,
                    duration: 0.5
                  }}
                  style={{ display: 'inline-block', marginRight: '4px' }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all relative overflow-hidden group text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all relative overflow-hidden group text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image with Tech Icons - Now comes second for mobile */}
        <motion.div
          className="relative flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="relative">
            {/* Main profile image */}
            <motion.div className="relative">
              <motion.img
                src={profile}
                alt="Efengsi Rahmanto Zalukhu"
                className="rounded-full border-4 border-cyan-500/30 shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover relative z-10 mx-auto"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Subtle glowing background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-lg -z-10 mx-auto"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  delay: 0.7,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Rotating border effect */}
              <motion.div
                className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-cyan-500/20 mx-auto"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* Technology Icons - Adjusted for mobile */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              {techIcons.map((tech, index) => {
                const angle = (index * 90) - 45; // 90° apart starting at -45°
                const radius = window.innerWidth < 640 ? 120 : 200; // Smaller radius on mobile
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute"
                    style={{
                      x: x,
                      y: y,
                    }}
                    custom={index}
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    <motion.div
                      className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 shadow-lg ${tech.color} transition-all duration-300 group relative overflow-hidden cursor-pointer`}
                      variants={floatingVariants}
                      animate="animate"
                      whileHover={{
                        backgroundColor: "rgba(6, 182, 212, 0.1)",
                        borderColor: "rgba(6, 182, 212, 0.5)",
                        scale: 1.15,
                      }}
                    >
                      {/* Pulsing border effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                        variants={pulsingVariants}
                        animate="animate"
                      />
                      
                      {/* Icon */}
                      <motion.svg
                        width={window.innerWidth < 640 ? "20" : "28"}
                        height={window.innerWidth < 640 ? "20" : "28"}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="group-hover:scale-110 transition-transform duration-200 relative z-10"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 2
                        }}
                      >
                        <path d={tech.icon} />
                      </motion.svg>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {tech.name}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;