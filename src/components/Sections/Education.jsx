import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "Kongu Engineering College, Perundurai",
      score: "CGPA: 8.38 (5th sem)",
      year: "2023 - 2027", // Assuming 4 years from 2023 based on '4th sem' context or start date
    },
    {
      degree: "HSC (+2)",
      institution: "Kirshnaveni Govt Girls Hr Sec School, Pallipalaiyam",
      score: "87.83%",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Educational <span className="text-neon-green">Background</span></h2>
          <div className="w-20 h-1 bg-neon-green"></div>
        </motion.div>

        <div className="space-y-8 max-w-3xl">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 border-l-2 border-gray-800 hover:border-neon-green transition-colors bg-gray-900/10 hover:bg-gray-900/30 rounded-r-xl"
            >
              <div className="text-neon-green mt-1">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-xl text-gray-300 mb-2">{edu.institution}</h4>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-neon-green">Score:</span> {edu.score}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {edu.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
