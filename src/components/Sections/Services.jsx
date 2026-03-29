import React from 'react';
import { Code, Database, Globe, Server, Terminal, Layout, Wrench, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const skills = [
    {
      category: "Languages",
      items: ["C", "Java", "Python", "C++"],
      icon: <Terminal size={32} />
    },
    {
      category: "Frontend",
      items: ["ReactJS", "HTML", "CSS","JavaScript","Tailwind CSS"],
      icon: <Layout size={32} />
    },
    {
      category: "Backend",
      items: ["Node.js","Express.js","MongoDB","MySQL"],
      icon: <Server size={32} />
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB"],
      icon: <Database size={32} />
    },
    {
      category: "Area of Interest",
      items: ["Web Development", "MERN Stack", "Database Management","Software Development"],
      icon: <Globe size={32} />
    },
    {
      category: "Tools",
      items: ["Visual Studio", "Github", "Postman","Vite","Git","Gitlab"],
      icon: <Wrench size={32} />
    },
    {
      category: "Deployment",
      items: ["Vercel", "Netlify", "MongoDB Atlas", "Render",],
      icon: <Cloud size={32} />
    },
    {
      category: "Soft Skills",
      items: ["Self-Learner", "Adaptability", "Leadership", "Communication", "Critical-Thinking","Teamwork","Problem-Solving","Time-Management","Quick-Learner"],
      icon: <Code size={32} />
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-neon-green">Skill Set</span></h2>
          <div className="w-20 h-1 bg-neon-green"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-gray-800 hover:border-neon-green transition-all duration-300 bg-gray-900/20 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,102,0.1)]"
            >
              <div className="text-neon-green mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {skillGroup.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 text-sm font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700 group-hover:border-neon-green/30 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
