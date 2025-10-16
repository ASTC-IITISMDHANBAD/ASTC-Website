import React from "react";
import { motion } from "framer-motion";

interface PSSectionProps {
  title: string;
  psOptions: { name: string; pdfUrl: string }[];
}

const PSSection: React.FC<PSSectionProps> = ({ title, psOptions }) => {
  return (
    <div className="mt-[40px] w-full max-w-[600px] text-white mx-auto">
      
      {/* Section Heading */}
      <h2 className="text-white font-bold text-3xl text-center mb-[10px]">{title}</h2>

      {/* Animated underline */}
      <motion.div
        className="h-1 w-20 bg-space-accent mx-auto mb-[20px] rounded"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />

      {/* PS Items stacked vertically */}
      <div className="flex flex-col gap-[15px]">
        {psOptions.map((ps) => (
          <div
            key={ps.name}
            className="bg-space-primary/30 rounded-xl py-[10px] px-[14px] flex justify-between items-center"
          >
            {/* PS Name */}
            <span className="font-medium">{ps.name}</span>

            {/* Download Button with hover effect */}
            <a
              href={ps.pdfUrl}
              download
              className="bg-space-accent text-white px-[12px] py-[6px] rounded text-sm hover:bg-space-accent/90 transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PSSection;
