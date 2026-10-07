import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
            project.title === "Gravitational Wave Detection" ? "object-top" : "object-center"
          }`}
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <span className="inline-block bg-space-secondary/60 text-white text-xs font-medium py-1 px-2 rounded-full mb-2">
            {project.category}
          </span>
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="text-sm text-gray-400">
          {/* <span className="block mb-1">Team:</span> */}
          {/* <div className="flex flex-wrap gap-1">
            {project.team.map((member, i) => (
              <span 
                key={i} 
                className="inline-block bg-space-dark text-gray-300 py-1 px-2 rounded text-xs"
              >
                {member}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
