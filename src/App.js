import React, { useState } from "react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen p-6`}>
      {/* Toggle Theme Button */}
      <button 
        onClick={() => setDarkMode(prevMode => !prevMode)} 
        className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Tiffany [Last Name]</h1>
        <p className="text-lg">Engineering Student | Problem Solver | Tech Enthusiast</p>
      </header>

      {/* About Section */}
      <section className={`${darkMode ? "bg-gray-800" : "bg-white"} max-w-3xl mx-auto p-6 rounded-lg shadow-md my-6`}>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          Engineering student passionate about problem-solving, infrastructure, and technology.
          Awarded the Dean’s Honorary Award (GPA 6.5+). Experienced in Python, MATLAB, and engineering applications.
        </p>
      </section>

      {/* Projects Section */}
      <section className={`${darkMode ? "bg-gray-800" : "bg-white"} max-w-3xl mx-auto p-6 rounded-lg shadow-md my-6`}>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>GPA Calculator:</strong> A tool for students to calculate GPA efficiently. [<a href="#" className="text-blue-500">GitHub</a>]</li>
          <li><strong>Diamond Price Predictor:</strong> Predicting diamond prices using large datasets. [<a href="#" className="text-blue-500">GitHub</a>]</li>
          <li><strong>MATLAB Simulations:</strong> Various engineering computation projects. [<a href="#" className="text-blue-500">GitHub</a>]</li>
        </ul>
      </section>

      {/* Resume Download */}
      <section className="text-center my-6">
        <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">Download Resume</a>
      </section>

      {/* Contact Section */}
      <footer className="text-center py-6">
        <p>Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">GitHub</a>
          <a href="mailto:your.email@example.com" className="text-blue-500">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

