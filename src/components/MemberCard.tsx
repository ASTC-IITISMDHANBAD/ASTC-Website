import React from 'react'
import { Member } from '../types'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaGlobe, FaTwitter, FaMedium, FaQuora } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

interface MemberCardProps {
  member: Member;
  index: number;
  delayModulus: number;
}

const MemberCard: React.FC<MemberCardProps> = ({member, index, delayModulus}) => {
  const links = member.links;
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 w-full flex flex-col items-center max-w-[70%] md:max-w-full lg:max-w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % delayModulus) * 0.1 }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={member.img ? `/Members/${member.img}` : "/default-profile-icon.png"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h1 className='text-3xl font-display font-bold text-white my-5 text-center max-w-[80%]'>
        { member.name }
      </h1>
      <div className="h-1 w-[40%] bg-space-accent"></div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-2xl py-6 max-w-[90%] justify-center">
        {member.email && (
          <button
            onClick={() => navigator.clipboard.writeText(member.email ? member.email : "")}
            title="Copy Email"
            className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"
          >
            <MdEmail />
          </button>
        )}
        {member.contactNo && (
          <button
            onClick={() => navigator.clipboard.writeText(member.contactNo ? member.contactNo : "")}
            title="Copy Phone Number"
            className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"
          >
            <MdPhone />
          </button>
        )}
        {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaGithub /></a>}
        {links.linkedin && <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaLinkedin /></a>}
        {links.facebook && <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaFacebook /></a>}
        {links.instagram && <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaInstagram /></a>}
        {links.website && <a href={links.website} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaGlobe /></a>}
        {links.twitter && <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaTwitter /></a>}
        {links.medium && <a href={links.medium} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaMedium /></a>}
        {links.quora && <a href={links.quora} target="_blank" rel="noopener noreferrer" className="hover:text-space-accent hover:scale-150 active:text-black active:scale-100 transition"><FaQuora /></a>}
      </div>
    </motion.div>
  )
}

export default MemberCard