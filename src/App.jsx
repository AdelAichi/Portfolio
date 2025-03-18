import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "🔐 Projet ADEL", description: "Développement de serrures connectées avec Bluetooth et API." },
  { title: "📊 Dashboard Admin", description: "Interface de gestion en React et TailwindCSS." },
  { title: "🌍 Site Web ESGI", description: "Projet de candidature pour l'ESGI avec un site interactif." },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8">
      {/* Section Présentation */}
      <motion.div 
        className="text-center mb-12 p-6 bg-white bg-opacity-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">🚀 Adel Aichi</h1>
        <p className="text-lg text-gray-300 mt-2">📅 20 ans | 🎓 BTS CIEL</p>
        <h2 className="text-xl font-semibold mt-4">💻 Compétences :</h2>
        <ul className="flex justify-center space-x-4 mt-2 text-gray-200">
          <li className="bg-black bg-opacity-20 px-3 py-1 rounded-md">HTML</li>
          <li className="bg-black bg-opacity-20 px-3 py-1 rounded-md">CSS</li>
          <li className="bg-black bg-opacity-20 px-3 py-1 rounded-md">JavaScript</li>
          <li className="bg-black bg-opacity-20 px-3 py-1 rounded-md">React</li>
          <li className="bg-black bg-opacity-20 px-3 py-1 rounded-md">Python</li>
          <li className="bg-black bg-opacity-20 px-3 py-1 rounded-md">Docker</li>
        </ul>
      </motion.div>

      {/* Section Projets */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white bg-opacity-10 p-5 rounded-xl shadow-lg hover:bg-opacity-20 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default App;
