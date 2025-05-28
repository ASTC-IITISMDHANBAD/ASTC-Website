import React from 'react'
import { motion } from "framer-motion";
import { members } from '../data/members';
import MemberCard from '../components/MemberCard';

const Members: React.FC = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedMembers = [...members].sort((a, b) => {
    const yearDiff = parseInt(a.id.substring(0,2)) - parseInt(b.id.substring(0,2));
    if (yearDiff !== 0) return yearDiff;
    return a.name.localeCompare(b.name);
  });
  
  const [delayModulus, setDelayModulus] = React.useState(3);
 
  const updateModulus = () => {
    const width = window.innerWidth;
    if (width >= 1024) setDelayModulus(3);
    else if (width >= 768) setDelayModulus(2);
    else setDelayModulus(1);
  }

  React.useEffect(() => {
    updateModulus();
    window.addEventListener('resize', updateModulus);
    return () => {
      window.removeEventListener('resize', updateModulus);
    };
  }, [updateModulus]);

  return (
    <div className='pt-20'>
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Members
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
              Meet the team behind ASTC — a passionate group of students committed to advancing aerospace innovation at IIT(ISM) Dhanbad.
            </motion.p>
          </div>
        </div>
      </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
              {sortedMembers.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} delayModulus={delayModulus} />
              ))}
            </div>
          </div>
        </section>

    </div>
  )
}

export default Members