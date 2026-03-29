import React, { useState } from "react";
import { Send, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_knpsm7h",
        "template_izim7jm",
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        },
        "HoLpMuK6B-F8XySNM"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-neon-green">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach
              out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 border border-gray-800 rounded-xl bg-gray-900/30">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:boomadevi1904@gmail.com"
                        className="text-white hover:text-neon-green transition-colors"
                      >
                        boomadevi1904@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a
                        href="tel:+918122764998"
                        className="text-white hover:text-neon-green transition-colors"
                      >
                        +91 8122764998
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <span className="text-white">
                        Namakkal, Tamilnadu, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/boomadevi-s-9a8873310/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-neon-green transition-colors"
                      >
                        boomadevi-s-9a8873310
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
  <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
    <Github size={24} />
  </div>
  <div>
    <p className="text-gray-400 text-sm">GitHub</p>

    <a
      href="https://github.com/boomadevi-2006"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white hover:text-neon-green transition-colors"
    >
      boomadevi-2006
    </a>

    <a
      href="https://github.com/boomadevi-1904"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white hover:text-neon-green transition-colors"
    >
      boomadevi-1904
    </a>
  </div>
</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 mb-2 text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 mb-2 text-sm"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                    placeholder="YourEmail@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 mb-2 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon-green text-black font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
