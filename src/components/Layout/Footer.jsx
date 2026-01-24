import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">
              BOOMADEVI S<span className="text-neon-green">.</span>
            </span>
          </div>

          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Boomadevi | Built with React
          </div>
        </div>
        <div className="w-full h-0.5 bg-neon-green mt-6 opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;
