// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { projects } from "..";

// const Projects = () => {
//   return (
//     <section className="text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
//       <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//         Projects
//       </h1>
//       <div className="max-w-7xl mx-auto flex flex-col gap-16">
//         {projects.map((p, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col lg:flex-row gap-8 items-center bg-neutral-900 p-6 rounded-2xl shadow-[0_0_30px_#0ff5]"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <motion.img
//               src={p.image}
//               alt={p.title}
//               className="rounded-xl object-cover w-full max-w-md aspect-video border-4 border-cyan-500 transition-transform hover:scale-105"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             />

//             <motion.div
//               className="w-full lg:w-1/2 text-center lg:text-left"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
//                 {p.title}
//               </h2>
//               <p className="text-neutral-300 mb-4 text-sm sm:text-base">
//                 {p.description}
//               </p>
//               <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
//                 {p.tech.map((t, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-[#1A1A40] text-[#7DD3FC] border border-[#7DD3FC] text-xs sm:text-sm px-2 py-1 rounded"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-center lg:justify-start gap-4 text-sm">
//                 <a
//                   href={p.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 hover:underline"
//                 >
//                   GitHub
//                 </a>
//                 {p.visit && (
//                   <a
//                     href={p.visit}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-cyan-400 hover:underline"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;






/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { projects } from "..";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode,
  FaJava,
  FaDatabase,
  FaShieldAlt
} from "react-icons/fa";
import { SiSpring, SiSwagger, SiMysql } from "react-icons/si";
import { TbFileReport } from "react-icons/tb";

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Floating background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: 3
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            Featured Projects
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(8, 145, 178, 0.2)'
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={{ opacity: 0 }}
              />

              <div className="flex flex-col lg:flex-row h-full">
                {/* Project Image */}
                <motion.div 
                  className="lg:w-1/2 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-video lg:aspect-auto lg:h-[400px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-8">
                    <motion.div
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                      <div className="flex gap-2">
                        <motion.span
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-cyan-300"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(8, 145, 178, 0.3)'
                          }}
                        >
                          REST API
                        </motion.span>
                        <motion.span
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-purple-300"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(124, 58, 237, 0.3)'
                          }}
                        >
                          Backend
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                  <div className="mb-8">
                    <motion.div 
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30"
                        whileHover={{ 
                          rotate: 15,
                          scale: 1.1,
                          backgroundColor: 'rgba(8, 145, 178, 0.2)'
                        }}
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          hover: { duration: 0.3 }
                        }}
                      >
                        <FaCode className="text-cyan-400 text-xl" />
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        {project.title}
                      </h2>
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-300 mb-8 leading-relaxed"
                      whileHover={{ 
                        color: '#f3f4f6',
                        transition: { duration: 0.3 }
                      }}
                    >
                      HayMart POS API adalah RESTful backend berbasis Spring Boot 3.4.4 untuk mendukung 
                      aplikasi kasir (POS) modern. Menyediakan autentikasi JWT, manajemen kasir & produk, 
                      transaksi pembelian, laporan penjualan, dan dokumentasi Swagger. Cocok untuk minimarket, 
                      apotek, atau toko retail lainnya.
                    </motion.p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "mirror"
                        }}
                      >
                        <FaCode className="text-cyan-400" />
                      </motion.span>
                      TECH STACK
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { icon: <FaJava className="text-red-400" />, name: "Java" },
                        { icon: <SiSpring className="text-green-500" />, name: "Spring Boot" },
                        { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
                        { icon: <FaDatabase className="text-amber-500" />, name: "JPA/Hibernate" },
                        { icon: <SiSwagger className="text-emerald-400" />, name: "Swagger" },
                        { icon: <FaShieldAlt className="text-blue-300" />, name: "Spring Security" },
                        { icon: <TbFileReport className="text-red-300" />, name: "Apache POI" }
                      ].map((tech, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-700/30 px-3 py-2 rounded-lg border border-gray-600 cursor-default"
                          whileHover={{ 
                            y: -3,
                            backgroundColor: 'rgba(6, 182, 212, 0.2)',
                            borderColor: '#06b6d4',
                            boxShadow: '0 5px 15px rgba(8, 145, 178, 0.2)'
                          }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            y: {
                              duration: 3 + idx,
                              repeat: Infinity,
                              ease: "easeInOut"
                            },
                            hover: { duration: 0.3 }
                          }}
                        >
                          <motion.span
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{
                              duration: 5 + idx,
                              repeat: Infinity,
                              repeatType: "mirror"
                            }}
                          >
                            {tech.icon}
                          </motion.span>
                          <span className="text-sm text-gray-200">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600/90 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 5px 15px rgba(8, 145, 178, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Button shine effect */}
                      <motion.span
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{
                          x: '100%',
                          transition: { duration: 0.8 }
                        }}
                      />
                      <FaGithub className="relative z-10" />
                      <span className="relative z-10">View Code</span>
                    </motion.a>
                    
                    {project.visit && (
                      <motion.a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-purple-600/90 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 5px 15px rgba(124, 58, 237, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Button shine effect */}
                        <motion.span
                          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{
                            x: '100%',
                            transition: { duration: 0.8 }
                          }}
                        />
                        <FaExternalLinkAlt className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;


