import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';

const About: React.FC = () => {
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
              About Us
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
              The Aeronautics and Space Technology Club (ASTC) of IIT ISM Dhanbad is dedicated to
              fostering innovation, research, and education in aerospace engineering and space science.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Our Mission
              </h2>
              <div className="h-1 w-16 bg-space-accent mb-8"></div>
              <p className="text-gray-300 mb-6">
                At ASTC, our mission is to inspire and educate students about the wonders of space and
                aerospace engineering. We strive to create an environment where innovation thrives and
                where students can develop practical skills through hands-on projects and research.
              </p>
              <p className="text-gray-300 mb-6">
                We aim to provide a platform for students to pursue their passion for space technology
                and aeronautics, fostering collaboration and knowledge sharing among peers who share a
                common interest in exploring the cosmos.
              </p>
              <div className="flex items-center p-4 bg-space-primary/20 rounded-lg border border-space-accent/20">
                <Rocket size={24} className="text-space-accent mr-4" />
                <p className="text-white italic">
                  "Reaching for the stars through innovation, education, and collaboration."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Our Vision
              </h2>
              <div className="h-1 w-16 bg-space-accent mb-8"></div>
              <p className="text-gray-300 mb-6">
                ASTC envisions becoming a premier student organization in the field of aerospace engineering
                and space technology, recognized for its innovative projects and contributions to the
                advancement of space science.
              </p>
              <p className="text-gray-300 mb-6">
                We aspire to create a community of forward-thinking individuals who will lead the next
                generation of space exploration and aerospace innovation, equipped with the knowledge,
                skills, and passion necessary to make significant contributions to the field.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 bg-space-accent rounded-full mt-2 mr-3"></span>
                  <span>Becoming a hub for aerospace innovation at IIT ISM Dhanbad</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 bg-space-accent rounded-full mt-2 mr-3"></span>
                  <span>Establishing partnerships with industry and research organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 bg-space-accent rounded-full mt-2 mr-3"></span>
                  <span>Developing student-led projects with real-world applications</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaborators & Sponsors */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Collaborators & Sponsors"
            subtitle="Proudly supported by organizations that help us reach for the stars"
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto justify-items-center">
            {[
              { name: "IUCAA", src: "/assets/IUCAA.jpeg" },
              { name: "NVCTI", src: "/assets/NVCTI.jpeg" },
              { name: "Nebula", src: "/assets/NEBULA.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="min-h-32 rounded-lg border border-white/10 bg-white/5 p-6 flex items-center justify-center"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="max-h-20 max-w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement?.insertAdjacentHTML(
                      "beforeend",
                      `<span class=\"text-space-accent font-semibold text-center\">${partner.name} logo</span>`
                    );
                  }}
                />
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 rounded-lg border border-space-accent/30 bg-space-dark/40 p-6 text-center">
            <p className="text-gray-300">
              <a
                href="https://www.nebulaspaceorg.com/"
                target="_blank"
                rel="noreferrer"
                className="text-space-accent font-semibold hover:text-white transition-colors"
              >
                Nebula Space Organization
              </a>{" "}
              proudly sponsored <span className="text-white font-semibold">Code the Cosmos 2025</span>.
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-white text-xl font-semibold mb-4">
              Want to sponsor us?
            </p>
            <a
              href="https://canva.link/2gw5kc6jc4ecu86"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-space-accent px-6 py-3 font-semibold text-space-dark hover:bg-white transition-colors"
            >
              View Sponsorship Brochure
            </a>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our History" 
            subtitle="From humble beginnings to reaching for the stars"
            light={true}
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-12">
              {[
                {
                  year: "2017",
                  title: "Foundation",
                  description: "ASTC was founded by a small group of space enthusiasts at IIT ISM Dhanbad with the goal of promoting space science and technology among students."
                },
                {
                  year: "2018",
                  title: "Projects and Research",
                  description: "The club successfully started a series of projects, including its first high-altitude balloon."
                },
                {
                  year: "2019",
                  title: "Expanding Reach",
                  description: "ASTC expanded its reach, hosting workshops and seminars for students."
                },
                {
                  year: "2020-2021",
                  title: "Virtual Transition",
                  description: "During the pandemic, ASTC shifted to virtual workshops and webinars, expanding its reach."
                },
                {
                  year: "2022- Present",
                  title: "Growth and Innovation",
                  description: "ASTC has grown to become active technical clubs at IIT ISM Dhanbad, with multiple ongoing projects and collaborations with industry partners."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/6">
                    <div className="text-space-accent font-bold text-xl">{item.year}</div>
                  </div>
                  <div className="md:w-5/6 relative">
                    <div className="absolute hidden md:block h-full w-px bg-space-accent/50 left-[-20px] top-0"></div>
                    <div className="absolute hidden md:block h-4 w-4 rounded-full bg-space-accent left-[-23px] top-0"></div>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Club FIC's" 
            subtitle="Meet the passionate individuals behind ASTC"
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
