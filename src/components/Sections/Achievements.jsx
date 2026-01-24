import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon - 2nd Prize",
      description: "Won 2nd prize in \"Hackathon\" at Kongu Engineering College in the year 2025."
    },
    {
      title: "Coding Competition - 2nd Prize",
      description: "Won 2nd prize in \"Coding Competition\" at Kongu Engineering College in the year 2025."
    },
    {
      title: "Logo Designing - 2nd Prize",
      description: "Won 2nd prize in \"Logo Designing Competition\" at Kongu Engineering College in the year 2024."
    },
    {
      title: "Speech Competition - 1st Prize",
      description: "Won 1st prize in \"Speech Competition\" at Kirshnaveni Govt Girls Hr Sec School Pallipalaiyam in the year 2023."
    }
  ];

  const certifications = [
    "MongoDB Associate Developer",
    "Github Foundation",
    "Oracle APEX Cloud Developer Certified Professional",
    "Database Management System I"
  ];

  return (
    <section id="achievements" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Achievements & <span className="text-neon-green">Awards</span>
            </h2>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 border border-gray-800 rounded-xl hover:border-neon-green/50 transition-colors bg-gray-900/30">
                  <div className="text-neon-green flex-shrink-0 mt-1">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Technical <span className="text-neon-green">Certifications</span>
            </h2>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-neon-green/50 transition-colors">
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-neon-green flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 text-lg">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
