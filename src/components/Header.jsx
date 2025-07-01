// // /* eslint-disable no-unused-vars */
// // import { motion } from "framer-motion";
// // import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// // // Animation variants for header
// // const headerVariants = {
// //   initial: { opacity: 0, y: -50 },
// //   animate: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.6,
// //       ease: "easeOut",
// //     },
// //   },
// // };

// // // Animation variants for social icons
// // const iconVariants = {
// //   initial: { opacity: 0, scale: 0.8 },
// //   animate: {
// //     opacity: 1,
// //     scale: 1,
// //     transition: {
// //       duration: 0.4,
// //       delay: 0.2,
// //       staggerChildren: 0.1,
// //     },
// //   },
// //   hover: {
// //     scale: 1.2,
// //     rotate: 5,
// //     transition: { duration: 0.3 },
// //   },
// //   tap: { scale: 0.9 },
// // };

// // const Header = () => {
// //   return (
// //     <motion.nav
// //       className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between sticky top-0 z-20 bg-black/50 backdrop-blur-md"
// //       initial="initial"
// //       animate="animate"
// //       variants={headerVariants}
// //     >
// //       <div className="flex flex-shrink-0 items-center">
// //         <motion.h1
// //           className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-semibold"
// //           variants={headerVariants}
// //         >
// //           My Portfolio
// //         </motion.h1>
// //         {/* Placeholder for logo image */}
// //         {/* <img className="mx-2 w-10 h-10" src="" alt="Portfolio Logo" /> */}
// //       </div>
// //       <motion.div
// //         className="flex items-center justify-center gap-4 sm:gap-6 text-xl sm:text-2xl"
// //         variants={iconVariants}
// //         initial="initial"
// //         animate="animate"
// //       >
// //         <motion.a
// //           href="https://www.linkedin.com/in/ahmad-wahyudi-tanjung-b09377313/"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           variants={iconVariants}
// //           whileHover="hover"
// //           whileTap="tap"
// //           className="text-blue-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
// //           aria-label="Visit LinkedIn Profile"
// //         >
// //           <FaLinkedin />
// //         </motion.a>
// //         <motion.a
// //           href="https://github.com/Wahyudi120505"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           variants={iconVariants}
// //           whileHover="hover"
// //           whileTap="tap"
// //           className="text-slate-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
// //           aria-label="Visit GitHub Profile"
// //         >
// //           <FaGithub />
// //         </motion.a>
// //         <motion.a
// //           href="https://www.instagram.com"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           variants={iconVariants}
// //           whileHover="hover"
// //           whileTap="tap"
// //           className="text-red-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
// //           aria-label="Visit Instagram Profile"
// //         >
// //           <FaInstagram />
// //         </motion.a>
// //       </motion.div>
// //     </motion.nav>
// //   );
// // };

// // export default Header;










// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// // Animation variants for header
// const headerVariants = {
//   initial: { opacity: 0, y: -50 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// // Animation variants for title with enhanced entry
// const titleVariants = {
//   initial: { 
//     opacity: 0, 
//     x: -30,
//     scale: 0.9
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       duration: 0.7,
//       delay: 0.2,
//       ease: "easeOut",
//     },
//   },
// };

// // Container variants for staggered icon animations
// const iconContainerVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.4,
//     },
//   },
// };

// // Enhanced animation variants for social icons
// const iconVariants = {
//   initial: { 
//     opacity: 0, 
//     scale: 0.5,
//     y: 20,
//     rotate: -10
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     rotate: 0,
//     transition: {
//       duration: 0.6,
//       ease: "backOut",
//     },
//   },
//   hover: {
//     scale: 1.25,
//     rotate: [0, -5, 5, 0],
//     y: -3,
//     transition: { 
//       duration: 0.4,
//       ease: "easeInOut"
//     },
//   },
//   tap: { 
//     scale: 0.85,
//     rotate: 15,
//     transition: { duration: 0.1 }
//   },
// };

// // Floating animation for continuous smooth movement
// const floatingVariants = {
//   animate: {
//     y: [0, -8, 0],
//     rotate: [0, 3, -3, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// // Individual floating delays for each icon
// const floatingDelays = [0, 1.3, 2.6];

// const Header = () => {
//   return (
//     <motion.nav
//       className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between sticky top-0 z-20 bg-black/50 backdrop-blur-md"
//       initial="initial"
//       animate="animate"
//       variants={headerVariants}
//     >
//       <div className="flex flex-shrink-0 items-center">
//         <motion.h1
//           className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-semibold"
//           variants={titleVariants}
//           initial="initial"
//           animate="animate"
//         >
//           My Portfolio
//         </motion.h1>
//         {/* Placeholder for logo image */}
//         {/* <img className="mx-2 w-10 h-10" src="" alt="Portfolio Logo" /> */}
//       </div>
      
//       <motion.div
//         className="flex items-center justify-center gap-4 sm:gap-6 text-xl sm:text-2xl"
//         variants={iconContainerVariants}
//         initial="initial"
//         animate="animate"
//       >
//         {[
//           {
//             href: "https://www.linkedin.com/in/ahmad-wahyudi-tanjung-b09377313/",
//             icon: FaLinkedin,
//             color: "text-blue-400",
//             label: "Visit LinkedIn Profile"
//           },
//           {
//             href: "https://github.com/Wahyudi120505",
//             icon: FaGithub,
//             color: "text-slate-400",
//             label: "Visit GitHub Profile"
//           },
//           {
//             href: "https://www.instagram.com",
//             icon: FaInstagram,
//             color: "text-red-400",
//             label: "Visit Instagram Profile"
//           }
//         ].map((social, index) => {
//           const IconComponent = social.icon;
//           return (
//             <motion.div
//               key={index}
//               variants={floatingVariants}
//               animate="animate"
//               transition={{
//                 ...floatingVariants.animate.transition,
//                 delay: floatingDelays[index],
//               }}
//             >
//               <motion.a
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 variants={iconVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className={`${social.color} hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer block`}
//                 aria-label={social.label}
//               >
//                 <IconComponent />
//               </motion.a>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Header;








/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Animation variants for header
const headerVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Animation variants for title with enhanced entry
const titleVariants = {
  initial: { 
    opacity: 0, 
    x: -30,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

// Container variants for staggered icon animations
const iconContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

// Enhanced animation variants for social icons
const iconVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.5,
    y: 20,
    rotate: -10
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.25,
    rotate: [0, -5, 5, 0],
    y: -3,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    },
  },
  tap: { 
    scale: 0.85,
    rotate: 15,
    transition: { duration: 0.1 }
  },
};

// Floating animation for continuous smooth movement
const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Individual floating delays for each icon
const floatingDelays = [0, 1.3, 2.6];

const Header = () => {
  return (
    <motion.nav
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between fixed top-0 z-20 bg-black/50 backdrop-blur-md"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div className="flex flex-shrink-0 items-center">
        <motion.h1
          className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-semibold"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          My Portfolio
        </motion.h1>
        {/* Placeholder for logo image */}
        {/* <img className="mx-2 w-10 h-10" src="" alt="Portfolio Logo" /> */}
      </div>
      
      <motion.div
        className="flex items-center justify-center gap-4 sm:gap-6 text-xl sm:text-2xl"
        variants={iconContainerVariants}
        initial="initial"
        animate="animate"
      >
        {[
          {
            href: "https://www.linkedin.com/in/ahmad-wahyudi-tanjung-b09377313/",
            icon: FaLinkedin,
            color: "text-blue-400",
            label: "Visit LinkedIn Profile"
          },
          {
            href: "https://github.com/Wahyudi120505",
            icon: FaGithub,
            color: "text-slate-400",
            label: "Visit GitHub Profile"
          },
          {
            href: "https://www.instagram.com",
            icon: FaInstagram,
            color: "text-red-400",
            label: "Visit Instagram Profile"
          }
        ].map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.div
              key={index}
              variants={floatingVariants}
              animate="animate"
              transition={{
                ...floatingVariants.animate.transition,
                delay: floatingDelays[index],
              }}
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className={`${social.color} cursor-pointer block relative group transition-all duration-300`}
                aria-label={social.label}
              >
                {/* Main glow background with lightning effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-xl scale-0 group-hover:scale-200 transition-transform duration-500 ease-out pointer-events-none" />
                
                {/* Lightning ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-130 transition-all duration-300 ease-out pointer-events-none blur-sm" />
                
                {/* Pulsing outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/0 group-hover:border-cyan-400/70 scale-100 group-hover:scale-140 transition-all duration-400 ease-out pointer-events-none animate-pulse opacity-0 group-hover:opacity-100" />
                
                {/* Electric spark effects */}
                <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-t from-cyan-400 to-transparent transform -translate-x-1/2 -translate-y-2 animate-pulse" />
                  <div className="absolute bottom-0 right-1/4 w-0.5 h-3 bg-gradient-to-b from-purple-400 to-transparent transform translate-y-2 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute left-0 top-1/3 h-0.5 w-3 bg-gradient-to-l from-cyan-400 to-transparent transform -translate-x-2 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div className="absolute right-0 bottom-1/3 h-0.5 w-4 bg-gradient-to-r from-purple-400 to-transparent transform translate-x-2 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                
                {/* Icon with bright glow - keeping original color bright */}
                <div className="relative z-10 transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_20px_currentColor] group-hover:filter group-hover:saturate-150">
                  <IconComponent />
                </div>
                
                {/* Inner bright core */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-white/0 to-white/0 group-hover:from-cyan-300/20 group-hover:to-purple-300/20 blur-md transition-all duration-300 pointer-events-none" />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Header;