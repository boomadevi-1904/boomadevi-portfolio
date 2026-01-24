import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* MAIN FLEX */}
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* LEFT – PROFILE + NAME */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            >
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-neon-green shadow-[0_0_30px_rgba(0,255,102,0.35)] mb-6">
                <img
                  src="/profile.jpg"
                  alt="BOOMADEVI S"
                  className="w-full h-full object-cover"
                />
              </div>

<h1 className="text-neon-green text-lg md:text-xl font-semibold tracking-[0.2em] text-center mt-2">
  HELLO, I'M BOOMADEVI S
</h1>

            </motion.div>

            {/* RIGHT – CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Aspiring <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  Full Stack Developer
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Seeking a job or internship opportunity to build scalable web applications,
                contribute to real-world projects, and enhance my technical and problem-solving skills.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-neon-green text-black font-bold text-lg rounded-full hover:bg-white transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  View Projects <ArrowRight size={20} />
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 border border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-10 flex gap-6 justify-center md:justify-start">
                <a href="https://github.com/boomadevi-2006" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/boomadevi-s-9a8873310/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:boomadevi1904@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
