import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Calendar, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/events';
import SpaceLoader from '../components/SpaceLoader';

const Home: React.FC = () => {
  const upcomingEvents = events.filter(event => event.isUpcoming).slice(0, 3);
  const [isSceneLoading, setIsSceneLoading] = useState(true);

  const handleSplineLoad = useCallback(() => {
    console.log('Spline scene loaded.');
    setIsSceneLoading(false);
  }, []);

  useEffect(() => {
    // Safety net: if Spline doesn't load after a certain time, show content anyway
    const safetyTimeout = setTimeout(() => {
      if (isSceneLoading) {
        console.warn('Spline load timeout. Forcing content display.');
        setIsSceneLoading(false);
      }
    }, 9000);

    return () => {
      clearTimeout(safetyTimeout);
    };
  }, [isSceneLoading]);

  if (isSceneLoading) {
    return <SpaceLoader />;
  }

  return (
    <div className="relative bg-space-dark">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-x-0 top-0 h-[calc(100vh+50px)] z-0">
          <Spline
            scene="https://prod.spline.design/NjwaBqRUEzyAc08z/scene.splinecode"
            onLoad={handleSplineLoad}
          />
        </div>

        {/* Hero content */}
        <div className="relative min-h-screen flex text-size flex-col z-10 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-space-dark via-space-dark/70 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-end items-center text-center pb-16 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-3xl pointer-events-auto"
            >
              {/* Removed the text from here that was interfering with the cursor and blocking the spline animation */}

              <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl border border-space-accent/30 bg-space-dark/60 p-2.5 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.18)]">

                <Link to="/about" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full text-sm"
                  >
                    Discover ASTC
                  </Button>
                </Link>

                <Link to="/join" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full text-sm"
                  >
                    Join Us
                  </Button>
                </Link>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-16 md:py-24 bg-space-dark/30 backdrop-blur-2xl -mt-[20px] z-10">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[-50px]">

          <SectionTitle
            title="About ASTC"
            subtitle="At the Aeronautics and Space Technology Club (ASTC), we are passionate about space exploration, aeronautics engineering, and fostering a community of future aerospace innovators."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {[
              {
                icon: <Rocket size={40} className="text-space-accent" />,
                title: "Innovation",
                description:
                  "We push the boundaries of what's possible in aerospace engineering through creative solutions."
              },
              {
                icon: <Calendar size={40} className="text-space-accent" />,
                title: "Events",
                description:
                  "From stargazing nights to rocket workshops, we host events that inspire and educate."
              },
              {
                icon: <Users size={40} className="text-space-accent" />,
                title: "Community",
                description:
                  "Join a diverse group of students passionate about space and aeronautics."
              },
              {
                icon: <Brain size={40} className="text-space-accent" />,
                title: "Research",
                description:
                  "We collaborate on research projects with real-world applications in space technology."
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1
                }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:transform hover:-translate-y-1 transition-all duration-300"
              >

                <div className="mb-4">
                  {item.icon}
                </div>

                <h3 className="text-white text-lg font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative py-16 md:py-24 bg-space-primary z-10">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Upcoming Events"
            subtitle="Join us for our exciting events and activities"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            {upcomingEvents.map((event, index) => (

              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1
                }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:shadow-lg transition-all duration-300"
              >

                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5">

                  <h3 className="text-white text-lg font-bold mb-2">
                    {event.title}
                  </h3>

                  <p className="text-space-accent text-sm font-medium mb-2">
                    {event.date}
                  </p>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {event.registrationLink && (
                    <Link to="/join">
                      <Button variant="outline" size="sm">
                        Learn more
                      </Button>
                    </Link>
                  )}

                </div>
              </motion.div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <Button variant="primary">
                View All Events
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-16 bg-space-primary z-10">

        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-space-secondary to-space-primary"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center">

            <motion.h2
              className="text-2xl md:text-3xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}
            >
              Ready to Reach for the Stars?
            </motion.h2>

            <motion.p
              className="text-gray-300 text-base mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6
              }}
            >
              Join the ASTC family and be part of exciting projects, events,
              and a community of space enthusiasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7
              }}
            >
              <Link to="/join">
                <Button variant="primary" size="lg">
                  Join Us!
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;