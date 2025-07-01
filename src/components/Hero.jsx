// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import profile from "../assets/profile.jpg";

// // Animation variants for Hero section
// const heroVariants = {
//   initial: { opacity: 0, y: 50 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Animation variants for child elements
// const childVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// // Animation variants for image
// const imageVariants = {
//   initial: { opacity: 0, scale: 0.8 },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
//   hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
// };

// const Hero = () => {
//   return (
//     <motion.section
//       id="hero"
//       aria-label="Hero section"
//       className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-800 relative overflow-hidden"
//       initial="initial"
//       animate="animate"
//       variants={heroVariants}
//       viewport={{ once: true }}
//     >
//       {/* Subtle Background Particles */}
//       <div className="absolute inset-0 -z-10">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               y: [null, -50],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
//         {/* Teks Utama */}
//         <motion.div className="w-full lg:w-1/2 text-center lg:text-left" variants={heroVariants}>
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
//             variants={childVariants}
//           >
//             Efengsi Rahmanto Zalukhu
//           </motion.h1>

//           <motion.h2
//             className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 mb-6"
//             variants={childVariants}
//           >
//             Web Developer
//           </motion.h2>

//           <motion.p
//             className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
//             variants={childVariants}
//           >
//             Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend.
//             Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta
//             database untuk membangun backend yang efisien dan aman. Selalu bersemangat untuk
//             menjelajahi alat dan framework baru serta meningkatkan keterampilan saya dalam industri
//             yang terus berkembang.
//           </motion.p>

//           <motion.a
//             href="#projects"
//             className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
//             variants={childVariants}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label="View my projects"
//           >
//             View My Work
//           </motion.a>
//         </motion.div>

//         {/* Gambar Profil */}
//         <motion.div
//           className="w-full lg:w-1/2 flex justify-center"
//           variants={heroVariants}
//         >
//           <motion.img
//             src={profile}
//             alt="Foto profil Ahmad Wahyudi Tanjung"
//             loading="lazy"
//             role="img"
//             className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25 object-cover w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72"
//             variants={imageVariants}
//             whileHover="hover"
//             viewport={{ once: true }}
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;






















// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import profile from "../assets/profile.jpg";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { FaFileDownload } from "react-icons/fa";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// };

// const floatingVariants = {
//   float: {
//     y: [0, -15, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

// const typingVariants = {
//   hidden: { width: 0 },
//   visible: {
//     width: "100%",
//     transition: {
//       duration: 1.5,
//       ease: "easeInOut"
//     }
//   }
// };

// const Hero = () => {
//   const [currentRole, setCurrentRole] = useState("");
//   const roles = ["Web Developer", "Backend Developer .NET", "Fullstack Developer"];
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [typing, setTyping] = useState(true);

//   useEffect(() => {
//     let timeout;
    
//     const typeRole = () => {
//       let currentText = "";
//       let charIndex = 0;
//       const role = roles[roleIndex];
      
//       const typingInterval = setInterval(() => {
//         if (charIndex < role.length) {
//           currentText += role[charIndex];
//           setCurrentRole(currentText);
//           charIndex++;
//         } else {
//           clearInterval(typingInterval);
//           setTyping(false);
//           timeout = setTimeout(() => {
//             setTyping(true);
//             setRoleIndex((prev) => (prev + 1) % roles.length);
//           }, 2000);
//         }
//       }, 100);
//     };

//     if (typing) {
//       typeRole();
//     }

//     return () => {
//       clearTimeout(timeout);
//     };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [roleIndex, typing]);

//   return (
//     <motion.section
//       id="hero"
//       className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Text Content */}
//         <div className="text-center md:text-left">
//           <motion.div variants={itemVariants}>
//             <h1 className="text-4xl md:text-5xl font-bold mb-2">
//               <span className="text-cyan-400">Hi, I'm</span><br />
//               <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
//                 Efengsi Rahmanto Zalukhu
//               </span>
//             </h1>
//           </motion.div>

//           <motion.div 
//             className="h-12 mb-4 overflow-hidden"
//             variants={itemVariants}
//           >
//             <motion.h2
//               className="text-xl md:text-2xl font-semibold text-cyan-400"
//               variants={typingVariants}
//               initial="hidden"
//               animate="visible"
//               key={roleIndex}
//             >
//               {currentRole}
//             </motion.h2>
//           </motion.div>

//           <motion.p 
//             className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0"
//             variants={itemVariants}
//           >
//             Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend.
//             Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta
//             database untuk membangun backend yang efisien dan aman.
//           </motion.p>

//           {/* <motion.div className="flex gap-4 justify-center md:justify-start mb-8" variants={itemVariants}>
//             {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
//               <motion.a
//                 key={i}
//                 href="#"
//                 className="text-gray-400 hover:text-cyan-400 text-xl"
//                 whileHover={{ y: -5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </motion.div> */}

//           <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" variants={itemVariants}>
//             <motion.a
//               href="#projects"
//               className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View My Projects
//             </motion.a>
//             {/* <motion.a
//               href="#"
//               className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full flex items-center gap-2 hover:bg-cyan-400/10 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaFileDownload /> Download My CV
//             </motion.a> */}
//           </motion.div>
//         </div>

//         {/* Profile Image */}
//         <motion.div
//           className="relative flex justify-center"
//           variants={floatingVariants}
//           animate="float"
//         >
//           <div className="relative">
//             <motion.img
//               src={profile}
//               alt="Efengsi Rahmanto Zalukhu"
//               className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25 w-64 h-64 md:w-80 md:h-80 object-cover"
//               whileHover={{ scale: 1.05 }}
//             />
//             {/* Glow effect */}
//             <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl -z-10" />
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

























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
  const roles = ["Web Developer", "Backend Developer .NET", "Fullstack Developer"];
  const typingSpeed = 100;
  const pauseDuration = 1500;

  const { scrollY } = useScroll();

  // Handle scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    const previous = prevScrollY.get();
    
    if (current > previous && current > 100) {
      // Scrolling down
      setIsVisible(false);
    } else if (current < previous - 5) {
      // Scrolling up
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

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -50
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="text-cyan-400 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Efengsi Rahmanto Zalukhu
            </motion.span>
          </motion.h1>

          {/* Role text */}
          <motion.div 
            className="h-12 mb-4 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-cyan-400 min-h-[2.5rem] flex items-center"
              key={currentRoleIndex}
            >
              {displayedRole}
              <motion.span
                className={`ml-1 inline-block w-1 h-6 bg-cyan-400 ${!isTyping && displayedRole.length === roles[currentRoleIndex].length ? 'opacity-0' : ''}`}
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
          >
            <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
              {`Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend. Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta database untuk membangun backend yang efisien dan aman.`.split(" ").map((word, i) => (
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
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="relative">
            <motion.img
              src={profile}
              alt="Efengsi Rahmanto Zalukhu"
              className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25 w-64 h-64 md:w-80 md:h-80 object-cover"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1.2,
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                delay: 0.7,
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;