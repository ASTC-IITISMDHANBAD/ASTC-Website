import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

    React.useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Projects & Research
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="h-1 w-20 bg-space-accent"></div>
            </motion.div>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our innovative projects and cutting-edge research in aerospace engineering and space technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-space-accent text-space-dark'
                      : 'bg-space-primary/30 text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Research Highlights" 
            subtitle="Our notable contributions to aerospace research"
            light={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {[
              {
                title: "Propulsion Systems Research",
                description: "Our team is developing innovative propulsion systems for small satellites, focusing on electric propulsion technologies that can significantly extend the operational lifetime of CubeSats and enable new mission capabilities.",
                achievements: [
                  "Will Publish paper in the International Journal of Space Propulsion",
                  "To Develop a prototype that will achieve 15% higher efficiency than conventional systems",
                  "Collaboration with national aerospace laboratory for testing"
                ]
              },
              {
                title: "Atmospheric Data Collection",
                description: "Through our high-altitude balloon projects, we've been collecting valuable data about atmospheric conditions at different altitudes, contributing to weather prediction models and atmospheric research.",
                achievements: [
                  "To launch 5 high-altitude balloons in the next two years",
                  "To share Data with meteorological department for research purposes",
                  "Develop custom sensors for specialized data collection"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <h4 className="text-space-accent font-medium mb-2">Targets:</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="inline-block h-1.5 w-1.5 bg-space-accent rounded-full mt-2 mr-3"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Collaboration */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Open Collaboration" 
              subtitle="Interested in contributing to our projects? We welcome collaboration!"
              light={true}
              align="center"
            />
            
            <motion.div
              className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6">
                Whether you're a student looking to gain hands-on experience or a researcher interested in
                collaborative opportunities, we invite you to join our projects. We believe in open
                innovation and the power of diverse perspectives.
              </p>
              <Link to={"/join"}>
              <button
                className="px-6 py-2 bg-space-accent text-space-dark font-medium rounded-md hover:bg-space-accent/90 transition-colors"
                >
                Contact Research Team
              </button>
                </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
