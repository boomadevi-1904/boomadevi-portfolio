import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
  title: "SkillSwap – Peer-to-Peer Learning Platform",
  description: "A platform where students teach, learn, schedule mentorship sessions, and collaborate through real-time chat.",
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Vercel", "Render"],
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  link: "https://skill-swap-one-pink.vercel.app/",
  github: "https://github.com/boomadevi-1904/Skill-Swap"
    },
    {
      title: "Online Bookstore",
      description: "An online platform to browse, search, and purchase your favorite books anytime.",
      tech: ["MERN Stack"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      link: "https://bb-mern-demo-final-git-main-boomadevi-2006s-projects.vercel.app/",
      github: "https://github.com/boomadevi-2006/BB-MERN-DEMO-FINAL"
    },
    {
      title: "Chess Game",
      description: "A visually stunning game for two players, where each player takes turns.",
      tech: ["2DArray", "LinkedList", "Stack", "Java"],
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      link: null,
      github: "https://github.com/boomadevi-1904/ChessGame"
    },
    {
      title: "Rock Paper Scissors",
      description: "A fast and fun player vs computer game with instant results and cool visuals.",
      tech: ["ReactJS"],
      image: "data:image/png;base64,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",
      link: "https://rock-paper-scissors-react-blue.vercel.app/",
      github: "https://github.com/boomadevi-2006/ROCK-PAPER-SCISSORS-REACT"
    },
    {
      title: "Weather App",
      description: "Get real-time weather updates for any location worldwide.",
      tech: ["ReactJS", "OpenWeatherMap API"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      link: "https://boomadevi-2006.github.io/weather-app/",
      github: "https://github.com/boomadevi-2006/weather-app"
    },
    {
      title: "Snake Game",
      description: "Classic Snake game built with modern controls and graphics.",
      tech: ["Java", "Swing"],
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAACrCAMAAAD8Q8FaAAAAyVBMVEUAAAAWMkw13gAVMEgDCAg24gANIC024QA35QAAAAcSYhkkrw8MWREVcAwmsgkjqhAqvg0BQAorxwoCQhEoriMUIk4AEgwJRQz/AAA56gAAHwsuzQkgpQ8rwggMdhUAMxEThxMITAgAAA4mtwwbmhAYkhEKXA8WihMfnhAz2gQFchcIexWpAADpAAAAPhEAABZXEhcnAAALSAsAaBcUJU4UKEwANxAUNEcUK0oAJAYioCQx0wQAGAsAHQs6DA8aAAAOVhgMTxs88wC50bhCAAAHZUlEQVR4nO2dcXubNhDGEycMKB4Q0iZzjAkNULDZss1pk7VeN9rv/6EGdyKzeJTmUtsg1/f7o/e8FhY8b81FlnXi6JghcDT0BewHbBMJtokE20SCbSLBNpFYs+lEHx4+vGn48ADhzcN7jMcYTkTriXj1LwjvH7Z/HQqbfjrVBvuj87rhUwnhtQifIoxxAaEQL0coX9/b276OoxOFTUf6cDWxGqYpxEk+BznPUGYrkCtZWtfbvw7dbbJGNWaQQrTyVRNGqwykkU9BTnMDWjNsHbFNbJMStokE20SiTeGFSNIjVQpvZXq4KTyOGspqDCzHUuzIKsKDl5dnNcvbM+R6CeES1fIeo2h9PArj8qP6OnS3CW+66Snl4N9XZnP0PJ+YNVYaGHUwzNICGfpNNEa5AdJJ8GXRmjgQJ+/UXe+JTReUgx9twkSWzkCOIkxkoY8yhkRmeAkmtBJbXRffNFZ3/WPZBD7MY4JNppeYsk0G28Q2rXHANkE2Nog2zSE7j9oUPgNpRm0KRxmDNLop3MUUvqc2zYDkb8rBN7OgYRZPmzDNXJBBCf9OUw9bUQZFgTGCg4MwhRMFlbpr3W1ywob08wveY9+IaGMUso03ylftDE7kVeo+dbdpYjSsSDfdJtiu1ZxoX2+6l6TwTbAPZ9y0CWwTCbaJxJ7bBCnc6sWmvlP4P38gm/ZTc5XFNXl8tYW+vokd5XCmpbp5Fzb9+gvw26b91FwZ85pRH58mszmT0eOnaZs2/cC5iW0iwTaRYJtIbNOml0ykbILd/0TKNm2a+Q0OaSJlE+wUzjSr1M27sOnfP5FN+6m5cp2G8CUTKd+FncGZkkrdvBejcJ5IeYYfOYVvEbaJBNtEgm0i8RlXpPSQwhNc1TK8TedKbtUvt5S4ymT3Eyl3uJrlUt3co01i9VGM/22J+O8rMcwcsWQJD5p5KGMYD/TyacIBwfArUqbSb9Xtr9H447SZhPibdQ7HmD5KS/ySfUi5iW0iwTaReMYmk20CppAkjQiC5YovUSVK38OYmyhDbI2t3n5ZmWjync7zk4YIl36kBcZFADHMcO1J6a/LYIHS7WEiBa5uVt0gtoiiuUebCsdrOLO/A9IS1U2wc7g65w4vMo1Rth+uvm86y3q7o+43ox6Fw00XGTBuC0Ict/0smntP4YamNokUHuGfkKDAPyFskwzbRIJtIiFsMjSwqcmKk4mmNvmThq+lBXE6XAovFw3l7Y6635C374BzDGO41kXU/p/2aBNW2mg6IOiClT5D3HSBzrmpi8cpnALbRIJtIjGgTVgWuSc24QKVAWxycariiUWgmpHBxfp3QvZoU4rFM5qOmzrEeLFDTaTsz7ipvtZBbjpO4STYJhJsEwn+skJiv8ZNxlDjphjI73fU/XaJYqnSp8+bbg5lOnvyaRpBpc9guWlvbrrmYnnc9Aw8ICDBNpHgAQGJ4SZSPFiQkpzvqPvtIiZS2qWYfa5IgbUe3gKrdbIMgrtwUOYYSw9ljDJCWaB0RatXChli4U+JXQrZniEuRB8YYjyhJ2SO0hEHp3h+txIXm3uDrkgxjAhr5hOxdLacrK/7Mp5YBpbiepF8jpU+Gb4pW6HM8WAhRzkeXMykE4Y+SBMPbvaWW1+GlnRKe4aeSPmutZcv2vdyK9tcDf2Xjm1im7ZBsHObUJI2dNTXpimW6ZTKYgwfizGszEQpVoTElrRfePbN/cLFZrN1CgdZBFL1R+hDrFM4SLd7fkUKN4ZI4dUroA0insvyyxjlFyExjNWywoPH8nvbLp+QbR+VJKvOzAnKeICJFL1xdLnptKZbZcA2KWGbSLBNJNgmEt09UoabSNEaUdrjV0JnyVATKVpj516zBMWphEbpsU0ybWnP8KNwreEUToJtIsE2kWCbSNQpHEp7HlM4SrZJxl6U0h4pQvJEioztyjvuOIMVimkN5yYSbBMJtokE20SCJ1JIdDebFXKA0h6t6U6kxCgHWJGiNTxuIsEpnATbRIJtIsE2kWj3lmt/I+C5cCV2ZwnKglekqLBdU77pcK0/f5pk1LmJb7oOnMJJsE0k2CYSPJFCwi7kiZSMJ1JUiM1m/y/twc1meUWKDN90JDiFk2CbSLBNJNgmEnaiSuGHYNPFJbC8X0K8PUfdyjOp9ayUH38sKn0G2Gy2by7ELm3xeq2vNWprfX251tjB8v8D/DRNv112uF72aLgHO5HynE2aVmf2DdtEgm0icYGbspgRPEK5TuEoY0zOjhgBlCiTg/1Od+HAo5P9COdEshBliU9UTgsIswW2hmIJSmuTKO05hIkU8cSfC/HgH1naT0jx3phLeyjwz5kkDieFbwTbRIJtIsE2keDSHpmP18D9vYgYrl/dNSx4RYpg+RUfv5ysb/Ez5DOg9OR2In2nG/6JYnrCNpFgm0iwTSRuJ9K+lxHuuxkU/J1O4nIKz1n2UngMc4APZ555GcpDmEghcSpPpHTkAE+J3mfYJhJsEwmVTadMB5VNxydMl2OFTczTsE0k2CYSbBMJtokE20SCbSLxH3wRbJvA33V6AAAAAElFTkSuQmCC",
      link: null,
      github: "https://github.com/boomadevi-2006/Snake-Game-Python"
    },
    {
      title: "Grocery Management",
      description: "Manage your grocery inventory and shopping lists efficiently.",
      tech: ["MERN Stack"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      link: null,
      github: "https://github.com/boomadevi-2006/Grocery_Store_Management_System_python"
    },
    {
      title: "Movie Search App",
      description: "Search for movies and view details using the OMDB API.",
      tech: ["React", "API"],
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      link: "http://movie-search-app-liart-nine.vercel.app/",
      github: "https://github.com/boomadevi-2006/Movie-Search-App"
    },
    {
      title: "Java Chat Application",
      description: "Real-time chat application built using Java networking.",
      tech: ["Java", "Socket Programming"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      link: null,
      github: "https://github.com/boomadevi-2006/ChatApp_Java"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-neon-green">Projects</span></h2>
          <div className="w-20 h-1 bg-neon-green"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-neon-green text-black rounded-full hover:bg-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 text-white rounded-full hover:bg-neon-green hover:text-black transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-neon-green bg-neon-green/10 rounded-full border border-neon-green/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;