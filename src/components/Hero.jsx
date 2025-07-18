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

























// /* eslint-disable no-unused-vars */
// import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import profile from "../assets/profile.jpg";

// const Hero = () => {
//   const [displayedRole, setDisplayedRole] = useState("");
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const [isVisible, setIsVisible] = useState(true);
//   const heroRef = useRef(null);
//   const prevScrollY = useMotionValue(0);
  
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const roles = ["Web Developer", "Backend Developer", "Fullstack Developer"];
//   const typingSpeed = 100;
//   const pauseDuration = 1500;

//   const { scrollY } = useScroll();

//   // Handle scroll events
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const current = latest;
//     const previous = prevScrollY.get();
    
//     if (current > previous && current > 100) {
//       // Scrolling down
//       setIsVisible(false);
//     } else if (current < previous - 5) {
//       // Scrolling up
//       setIsVisible(true);
//     }
    
//     prevScrollY.set(current);
//   });

//   // Typing animation effect
//   useEffect(() => {
//     let timeout;
//     const currentRole = roles[currentRoleIndex];
    
//     if (isTyping) {
//       if (displayedRole.length < currentRole.length) {
//         timeout = setTimeout(() => {
//           setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
//         }, typingSpeed);
//       } else {
//         timeout = setTimeout(() => {
//           setIsTyping(false);
//         }, pauseDuration);
//       }
//     } else {
//       if (displayedRole.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
//         }, typingSpeed / 2);
//       } else {
//         setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//         setIsTyping(true);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayedRole, currentRoleIndex, isTyping, roles, typingSpeed, pauseDuration]);

//   return (
//     <motion.section
//       ref={heroRef}
//       id="hero"
//       className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center"
//       initial={{ opacity: 1 }}
//       animate={{ 
//         opacity: isVisible ? 1 : 0,
//         y: isVisible ? 0 : -50
//       }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//     >
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Text Content */}
//         <motion.div 
//           className="text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           {/* Name */}
//           <motion.h1 
//             className="text-4xl md:text-5xl font-bold mb-2"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <motion.span 
//               className="text-cyan-400 block"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Hi, I'm
//             </motion.span>
//             <motion.span 
//               className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Efengsi Rahmanto Zalukhu
//             </motion.span>
//           </motion.h1>

//           {/* Role text */}
//           <motion.div 
//             className="h-12 mb-4 overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             <motion.h2
//               className="text-xl md:text-2xl font-semibold text-cyan-400 min-h-[2.5rem] flex items-center"
//               key={currentRoleIndex}
//             >
//               {displayedRole}
//               <motion.span
//                 className={`ml-1 inline-block w-1 h-6 bg-cyan-400 ${!isTyping && displayedRole.length === roles[currentRoleIndex].length ? 'opacity-0' : ''}`}
//                 animate={{ opacity: [0, 1, 0] }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.h2>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
//               {`Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend. Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta database untuk membangun backend yang efisien dan aman.`.split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: 0.8 + i * 0.03,
//                     duration: 0.5
//                   }}
//                   style={{ display: 'inline-block', marginRight: '4px' }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </p>
//           </motion.div>

//           {/* Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.0 }}
//           >
//             <motion.a
//               href="#projects"
//               className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.25)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View My Projects
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Profile Image */}
//         <motion.div
//           className="relative flex justify-center"
//           initial={{ opacity: 0, x: 100, rotate: 20 }}
//           animate={{ opacity: 1, x: 0, rotate: 0 }}
//           transition={{ delay: 0.5, type: "spring" }}
//         >
//           <div className="relative">
//             <motion.img
//               src={profile}
//               alt="Efengsi Rahmanto Zalukhu"
//               className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25 w-64 h-64 md:w-80 md:h-80 object-cover"
//               animate={{
//                 y: [0, -15, 0],
//                 rotate: [0, 2, -2, 0]
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               whileHover={{ 
//                 scale: 1.05,
//                 transition: { duration: 0.3 }
//               }}
//             />
//             <motion.div
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ 
//                 scale: 1.2,
//                 opacity: [0.3, 0.5, 0.3],
//               }}
//               transition={{
//                 delay: 0.7,
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut"
//               }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;




















// /* eslint-disable no-unused-vars */
// import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import profile from "../assets/profile.jpg";

// const Hero = () => {
//   const [displayedRole, setDisplayedRole] = useState("");
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const [isVisible, setIsVisible] = useState(true);
//   const heroRef = useRef(null);
//   const prevScrollY = useMotionValue(0);
  
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const roles = ["Web Developer", "Backend Developer", "Fullstack Developer"];
//   const typingSpeed = 100;
//   const pauseDuration = 1500;

//   const { scrollY } = useScroll();

//   // Social media icons data
//   const socialIcons = [
//     { 
//       name: "GitHub", 
//       icon: "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
//       url: "https://github.com/efengsi",
//       color: "text-gray-400 hover:text-white"
//     },
//     { 
//       name: "LinkedIn", 
//       icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
//       url: "https://linkedin.com/in/efengsi",
//       color: "text-blue-400 hover:text-blue-300"
//     },
//     { 
//       name: "Instagram", 
//       icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
//       url: "https://instagram.com/efengsi",
//       color: "text-pink-400 hover:text-pink-300"
//     },
//     { 
//       name: "Twitter", 
//       icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
//       url: "https://twitter.com/efengsi",
//       color: "text-sky-400 hover:text-sky-300"
//     }
//   ];

//   // Handle scroll events
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const current = latest;
//     const previous = prevScrollY.get();
    
//     if (current > previous && current > 100) {
//       setIsVisible(false);
//     } else if (current < previous - 5) {
//       setIsVisible(true);
//     }
    
//     prevScrollY.set(current);
//   });

//   // Typing animation effect
//   useEffect(() => {
//     let timeout;
//     const currentRole = roles[currentRoleIndex];
    
//     if (isTyping) {
//       if (displayedRole.length < currentRole.length) {
//         timeout = setTimeout(() => {
//           setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
//         }, typingSpeed);
//       } else {
//         timeout = setTimeout(() => {
//           setIsTyping(false);
//         }, pauseDuration);
//       }
//     } else {
//       if (displayedRole.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
//         }, typingSpeed / 2);
//       } else {
//         setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//         setIsTyping(true);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayedRole, currentRoleIndex, isTyping, roles, typingSpeed, pauseDuration]);

//   // Social icons animation variants
//   const iconVariants = {
//     initial: { scale: 0, rotate: -180 },
//     animate: (i) => ({
//       scale: 1,
//       rotate: 0,
//       transition: {
//         delay: 1.2 + i * 0.1,
//         type: "spring",
//         stiffness: 200,
//         damping: 10
//       }
//     }),
//     hover: {
//       scale: 1.2,
//       rotate: 10,
//       transition: { duration: 0.2 }
//     }
//   };

//   return (
//     <motion.section
//       ref={heroRef}
//       id="hero"
//       className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center relative overflow-hidden"
//       initial={{ opacity: 1 }}
//       animate={{ 
//         opacity: isVisible ? 1 : 0,
//         y: isVisible ? 0 : -50
//       }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//     >
//       {/* Background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.3, 0.8, 0.3],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Text Content */}
//         <motion.div 
//           className="text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           {/* Greeting */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             {/* <span className="text-lg text-gray-400">👋 Hello there!</span> */}
//           </motion.div>

//           {/* Name */}
//           <motion.h1 
//             className="text-4xl md:text-5xl font-bold mb-2"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <motion.span 
//               className="text-cyan-400 block"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Hi, I'm
//             </motion.span>
//             <motion.span 
//               className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Efengsi Rahmanto Zalukhu
//               <motion.div
//                 className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl"
//                 animate={{
//                   opacity: [0.3, 0.6, 0.3],
//                   scale: [1, 1.02, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.span>
//           </motion.h1>

//           {/* Role text with enhanced styling */}
//           <motion.div 
//             className="h-12 mb-6 overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             <motion.h2
//               className="text-xl md:text-2xl font-semibold min-h-[2.5rem] flex items-center relative"
//               key={currentRoleIndex}
//             >
//               <span className="text-gray-300 mr-2">I'm a</span>
//               <span className="text-cyan-400 font-bold">{displayedRole}</span>
//               <motion.span
//                 className={`ml-1 inline-block w-1 h-6 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full ${!isTyping && displayedRole.length === roles[currentRoleIndex].length ? 'opacity-0' : ''}`}
//                 animate={{ opacity: [0, 1, 0] }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.h2>
//           </motion.div>

//           {/* Description with better spacing */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="mb-8"
//           >
//             <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
//               {`Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend. Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta database untuk membangun backend yang efisien dan aman.`.split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: 0.8 + i * 0.03,
//                     duration: 0.5
//                   }}
//                   style={{ display: 'inline-block', marginRight: '4px' }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </p>
//           </motion.div>

//           {/* Enhanced Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.0 }}
//           >
//             <motion.a
//               href="#projects"
//               className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all relative overflow-hidden group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">View My Projects</span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>
            
//             <motion.a
//               href="#contact"
//               className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all relative overflow-hidden group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.25)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">Get In Touch</span>
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Enhanced Profile Image with Social Icons */}
//         <motion.div
//           className="relative flex justify-center"
//           initial={{ opacity: 0, x: 100, rotate: 20 }}
//           animate={{ opacity: 1, x: 0, rotate: 0 }}
//           transition={{ delay: 0.5, type: "spring" }}
//         >
//           <div className="relative">
//             {/* Main profile image */}
//             <motion.div className="relative">
//               <motion.img
//                 src={profile}
//                 alt="Efengsi Rahmanto Zalukhu"
//                 className="rounded-full border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25 w-64 h-64 md:w-80 md:h-80 object-cover relative z-10"
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 2, -2, 0]
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 whileHover={{ 
//                   scale: 1.05,
//                   transition: { duration: 0.3 }
//                 }}
//               />
              
//               {/* Enhanced glowing background */}
//               <motion.div
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10"
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 animate={{ 
//                   scale: [1.2, 1.4, 1.2],
//                   opacity: [0.4, 0.7, 0.4],
//                 }}
//                 transition={{
//                   delay: 0.7,
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               {/* Additional glow layers */}
//               <motion.div
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl -z-20"
//                 animate={{
//                   scale: [1.5, 1.8, 1.5],
//                   opacity: [0.2, 0.4, 0.2],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               <motion.div
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl -z-30"
//                 animate={{
//                   scale: [1.3, 1.6, 1.3],
//                   opacity: [0.3, 0.5, 0.3],
//                   rotate: [0, 180, 360],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.div>

//             {/* Animated Social Media Icons */}
//             <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80">
//               {socialIcons.map((social, index) => {
//                 const angle = (index * 360) / socialIcons.length;
//                 const radius = 180; // Increased distance from center
//                 const x = Math.cos((angle * Math.PI) / 180) * radius;
//                 const y = Math.sin((angle * Math.PI) / 180) * radius;
                
//                 return (
//                   <motion.div
//                     key={social.name}
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                     style={{
//                       x: x,
//                       y: y,
//                     }}
//                     custom={index}
//                     variants={iconVariants}
//                     initial="initial"
//                     animate="animate"
//                     whileHover="hover"
//                   >
//                     <motion.a
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex items-center justify-center w-14 h-14 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 shadow-2xl ${social.color} transition-all duration-300 group relative overflow-hidden`}
//                       whileHover={{
//                         backgroundColor: "rgba(6, 182, 212, 0.2)",
//                         borderColor: "rgba(6, 182, 212, 0.8)",
//                         boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
//                       }}
//                       animate={{
//                         rotate: [0, 360],
//                       }}
//                       transition={{
//                         duration: 25,
//                         repeat: Infinity,
//                         ease: "linear"
//                       }}
//                     >
//                       {/* Glow effect background */}
//                       <motion.div
//                         className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-md"
//                         animate={{
//                           scale: [1, 1.2, 1],
//                           opacity: [0.5, 0.8, 0.5],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       />
                      
//                       {/* Rotating border light */}
//                       <motion.div
//                         className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-transparent to-purple-400 p-[1px]"
//                         animate={{
//                           rotate: [0, -360],
//                         }}
//                         transition={{
//                           duration: 3,
//                           repeat: Infinity,
//                           ease: "linear"
//                         }}
//                         style={{
//                           background: "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4)"
//                         }}
//                       >
//                         <div className="w-full h-full rounded-full bg-gray-800/90" />
//                       </motion.div>
                      
//                       <motion.svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         className="group-hover:scale-110 transition-transform duration-200 relative z-10"
//                         animate={{
//                           rotate: [0, -360],
//                         }}
//                         transition={{
//                           duration: 25,
//                           repeat: Infinity,
//                           ease: "linear"
//                         }}
//                       >
//                         <path d={social.icon} />
//                       </motion.svg>
                      
//                       {/* Pulse effect on hover */}
//                       <motion.div
//                         className="absolute inset-0 rounded-full bg-cyan-400/30"
//                         initial={{ scale: 0, opacity: 0 }}
//                         whileHover={{
//                           scale: [1, 1.5],
//                           opacity: [0.5, 0],
//                         }}
//                         transition={{
//                           duration: 0.6,
//                           repeat: Infinity,
//                         }}
//                       />
//                     </motion.a>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Rotating border effect */}
//             <motion.div
//               className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-cyan-500/30"
//               animate={{
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//             />
            
//             {/* Additional light effects */}
//             <motion.div
//               className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full"
//               animate={{
//                 boxShadow: [
//                   "0 0 20px rgba(6, 182, 212, 0.3)",
//                   "0 0 60px rgba(6, 182, 212, 0.6)",
//                   "0 0 20px rgba(6, 182, 212, 0.3)",
//                 ],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
            
//             {/* Orbiting light particles */}
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
//                 style={{
//                   transformOrigin: `${120 + i * 15}px 0px`,
//                 }}
//                 animate={{
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   duration: 8 + i * 2,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: i * 0.5
//                 }}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;


























// /* eslint-disable no-unused-vars */
// import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import profile from "../assets/profile.jpg";

// const Hero = () => {
//   const [displayedRole, setDisplayedRole] = useState("");
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const [isVisible, setIsVisible] = useState(true);
//   const heroRef = useRef(null);
//   const prevScrollY = useMotionValue(0);
  
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const roles = ["Web Developer", "Backend Developer", "Fullstack Developer"];
//   const typingSpeed = 100;
//   const pauseDuration = 1500;

//   const { scrollY } = useScroll();

//   // Social media icons data
//   const socialIcons = [
//     { 
//       name: "GitHub", 
//       icon: "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
//       url: "https://github.com/efengsi",
//       color: "text-gray-400 hover:text-white"
//     },
//     { 
//       name: "LinkedIn", 
//       icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
//       url: "https://linkedin.com/in/efengsi",
//       color: "text-blue-400 hover:text-blue-300"
//     },
//     { 
//       name: "Instagram", 
//       icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
//       url: "https://instagram.com/efengsi",
//       color: "text-pink-400 hover:text-pink-300"
//     },
//     { 
//       name: "Twitter", 
//       icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
//       url: "https://twitter.com/efengsi",
//       color: "text-sky-400 hover:text-sky-300"
//     }
//   ];

//   // Handle scroll events
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const current = latest;
//     const previous = prevScrollY.get();
    
//     if (current > previous && current > 100) {
//       setIsVisible(false);
//     } else if (current < previous - 5) {
//       setIsVisible(true);
//     }
    
//     prevScrollY.set(current);
//   });

//   // Typing animation effect
//   useEffect(() => {
//     let timeout;
//     const currentRole = roles[currentRoleIndex];
    
//     if (isTyping) {
//       if (displayedRole.length < currentRole.length) {
//         timeout = setTimeout(() => {
//           setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
//         }, typingSpeed);
//       } else {
//         timeout = setTimeout(() => {
//           setIsTyping(false);
//         }, pauseDuration);
//       }
//     } else {
//       if (displayedRole.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
//         }, typingSpeed / 2);
//       } else {
//         setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//         setIsTyping(true);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayedRole, currentRoleIndex, isTyping, roles, typingSpeed, pauseDuration]);

//   // Social icons animation variants
//   const iconVariants = {
//     initial: { scale: 0, rotate: -180 },
//     animate: (i) => ({
//       scale: 1,
//       rotate: 0,
//       transition: {
//         delay: 1.2 + i * 0.1,
//         type: "spring",
//         stiffness: 200,
//         damping: 10
//       }
//     }),
//     hover: {
//       scale: 1.2,
//       rotate: 10,
//       transition: { duration: 0.2 }
//     }
//   };

//   return (
//     <motion.section
//       ref={heroRef}
//       id="hero"
//       className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center relative overflow-hidden"
//       initial={{ opacity: 1 }}
//       animate={{ 
//         opacity: isVisible ? 1 : 0,
//         y: isVisible ? 0 : -50
//       }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//     >
//       {/* Background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.3, 0.8, 0.3],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Text Content */}
//         <motion.div 
//           className="text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           {/* Greeting */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             {/* <span className="text-lg text-gray-400">👋 Hello there!</span> */}
//           </motion.div>

//           {/* Name */}
//           <motion.h1 
//             className="text-4xl md:text-5xl font-bold mb-2"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <motion.span 
//               className="text-cyan-400 block"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Hi, I'm
//             </motion.span>
//             <motion.span 
//               className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Efengsi Rahmanto Zalukhu
//               <motion.div
//                 className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl"
//                 animate={{
//                   opacity: [0.3, 0.6, 0.3],
//                   scale: [1, 1.02, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.span>
//           </motion.h1>

//           {/* Role text with enhanced styling */}
//           <motion.div 
//             className="h-12 mb-6 overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             <motion.h2
//               className="text-xl md:text-2xl font-semibold min-h-[2.5rem] flex items-center relative"
//               key={currentRoleIndex}
//             >
//               <span className="text-gray-300 mr-2">I'm a</span>
//               <span className="text-cyan-400 font-bold">{displayedRole}</span>
//               <motion.span
//                 className={`ml-1 inline-block w-1 h-6 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full ${!isTyping && displayedRole.length === roles[currentRoleIndex].length ? 'opacity-0' : ''}`}
//                 animate={{ opacity: [0, 1, 0] }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.h2>
//           </motion.div>

//           {/* Description with better spacing */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="mb-8"
//           >
//             <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
//               {`Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend. Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta database untuk membangun backend yang efisien dan aman.`.split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: 0.8 + i * 0.03,
//                     duration: 0.5
//                   }}
//                   style={{ display: 'inline-block', marginRight: '4px' }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </p>
//           </motion.div>

//           {/* Enhanced Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.0 }}
//           >
//             <motion.a
//               href="#projects"
//               className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all relative overflow-hidden group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">View My Projects</span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>
            
//             <motion.a
//               href="#contact"
//               className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all relative overflow-hidden group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.25)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">Get In Touch</span>
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Enhanced Profile Image with Social Icons */}
//         <motion.div
//           className="relative flex justify-center"
//           initial={{ opacity: 0, x: 100, rotate: 20 }}
//           animate={{ opacity: 1, x: 0, rotate: 0 }}
//           transition={{ delay: 0.5, type: "spring" }}
//         >
//           <div className="relative">
//             {/* Main profile image */}
//             <motion.div className="relative">
//               <motion.img
//                 src={profile}
//                 alt="Efengsi Rahmanto Zalukhu"
//                 className="rounded-full border-4 border-cyan-500/30 shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover relative z-10"
//                 animate={{
//                   y: [0, -15, 0],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 whileHover={{ 
//                   scale: 1.03,
//                   transition: { duration: 0.3 }
//                 }}
//               />
              
//               {/* Subtle glowing background */}
//               <motion.div
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-lg -z-10"
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 animate={{ 
//                   scale: [1.1, 1.2, 1.1],
//                   opacity: [0.2, 0.4, 0.2],
//                 }}
//                 transition={{
//                   delay: 0.7,
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               {/* Rotating border effect - more subtle */}
//               <motion.div
//                 className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-cyan-500/20"
//                 animate={{
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               />
//             </motion.div>

//             {/* Social Media Icons - positioned further out and more organized */}
//             <div className="absolute inset-0 w-full h-full flex items-center justify-center">
//               {socialIcons.map((social, index) => {
//                 const angle = (index * 90) - 45; // 90° apart starting at -45°
//                 const radius = 200; // Increased distance from center
//                 const x = Math.cos((angle * Math.PI) / 180) * radius;
//                 const y = Math.sin((angle * Math.PI) / 180) * radius;
                
//                 return (
//                   <motion.div
//                     key={social.name}
//                     className="absolute"
//                     style={{
//                       x: x,
//                       y: y,
//                     }}
//                     custom={index}
//                     variants={iconVariants}
//                     initial="initial"
//                     animate="animate"
//                     whileHover="hover"
//                   >
//                     <motion.a
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 shadow-lg ${social.color} transition-all duration-300 group relative overflow-hidden`}
//                       whileHover={{
//                         backgroundColor: "rgba(6, 182, 212, 0.1)",
//                         borderColor: "rgba(6, 182, 212, 0.5)",
//                       }}
//                     >
//                       {/* Subtle border light */}
//                       <motion.div
//                         className="absolute inset-0 rounded-full border border-cyan-400/30"
//                         animate={{
//                           opacity: [0.5, 0.8, 0.5],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       />
                      
//                       <motion.svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         className="group-hover:scale-110 transition-transform duration-200 relative z-10"
//                       >
//                         <path d={social.icon} />
//                       </motion.svg>
//                     </motion.a>
//                   </motion.div>
//                 );
//               })}
              
//               {/* Diagonal icons for better balance */}
//               {socialIcons.length > 4 && [...Array(4)].map((_, index) => {
//                 const angle = (index * 90) - 45 + 45; // Offset by 45°
//                 const radius = 160; // Closer radius
//                 const x = Math.cos((angle * Math.PI) / 180) * radius;
//                 const y = Math.sin((angle * Math.PI) / 180) * radius;
                
//                 return (
//                   <motion.div
//                     key={`diagonal-${index}`}
//                     className="absolute"
//                     style={{
//                       x: x,
//                       y: y,
//                     }}
//                     custom={index + socialIcons.length}
//                     variants={iconVariants}
//                     initial="initial"
//                     animate="animate"
//                     whileHover="hover"
//                   >
//                     <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-70" />
//                   </motion.div>
//                 );
//               })}
//             </div>
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

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
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
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent relative"
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
            className="h-12 mb-6 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-xl md:text-2xl font-semibold min-h-[2.5rem] flex items-center relative"
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
            className="mb-8"
          >
            <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
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
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all relative overflow-hidden group"
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
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all relative overflow-hidden group"
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

        {/* Profile Image with Tech Icons */}
        <motion.div
          className="relative flex justify-center"
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
                className="rounded-full border-4 border-cyan-500/30 shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover relative z-10"
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
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-lg -z-10"
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
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-cyan-500/20"
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

            {/* Technology Icons */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              {techIcons.map((tech, index) => {
                const angle = (index * 90) - 45; // 90° apart starting at -45°
                const radius = 200; // Distance from center
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
                      className={`flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 shadow-lg ${tech.color} transition-all duration-300 group relative overflow-hidden cursor-pointer`}
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
                        width="28"
                        height="28"
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
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20"
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