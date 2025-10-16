import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Navbar from "../components/Navbar";
import PSSection from "../components/PSSection";

const psList = [
  { name: "1. Star and Galaxy Classification ", pdfUrl: "/pdfs/ps1.docx" },
  { name: "2. Transient vs Non-Transient Detection ", pdfUrl: "/pdfs/ps2.docx" },
  { name: "3. Solar Flare Prediction ", pdfUrl: "/pdfs/ps3.docx" },
  { name: "4. Design an opmal subsystem on LTSpice ", pdfUrl: "/pdfs/ps4.pdf" },
  { name: "5. Program and integrate an ESP32 microcontroller", pdfUrl: "/pdfs/ps5.pdf" },
  { name: "6. 3D Modeling & Animation of Computer Cooling Fan", pdfUrl: "/pdfs/ps6.pdf" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  admissionNo: string;
  branch: string;
  division: string;
  ps: string;
}

const Recruitment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    admissionNo: "",
    branch: "",
    division: "",
    ps: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw75sQWQc7rXbkChVTSlJFwU5VgVT2VMugZ-_DEUycWhZGvauNTApfHrI7jT8nipYke/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        admissionNo: "",
        branch: "",
        division: "",
        ps: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="bg-space-dark min-h-screen w-full flex flex-col items-center">
      {/* Navbar with forced dark background */}
      <Navbar scrolled={true} />

      {/* Page Title Section */}
      <section className="py-[100px] px-[20px] bg-space-primary/20 w-full  mx-auto rounded-2xl mt-[80px]">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Recruitment"
            subtitle="Join our team and become part of our next big mission."
            align="center"
            light={true}
          />
        </div>
      </section>

      {/* Form Heading */}
      <section className="mt-[60px] w-full max-w-[500px] text-center mb-[30px]">
        <h2 className="text-white font-bold text-3xl mb-[10px]">
          Recruitment Form
        </h2>
        <motion.div
          className="h-1 w-20 bg-space-accent mx-auto mb-[20px] rounded"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
      </section>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-space-primary/20 backdrop-blur-md border border-space-accent/30 rounded-2xl shadow-lg p-[30px] w-full max-w-[500px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Text Inputs */}
        {["name", "email", "phone", "admissionNo", "branch"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            value={(formData as any)[field]}
            onChange={handleChange}
            placeholder={field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            className="w-full bg-space-dark/50 border border-space-accent/30 text-white rounded-xl px-[14px] py-[10px] mb-[14px] placeholder-gray-400 focus:outline-none focus:border-space-accent transition"
            required
          />
        ))}

        {/* Division Dropdown */}
        <select
          name="division"
          value={formData.division}
          onChange={handleChange}
          required
          className="w-full bg-space-dark/50 border border-space-accent/30 text-white rounded-xl px-[14px] py-[10px] mb-[14px] focus:outline-none focus:border-space-accent transition"
        >
          <option value="" disabled hidden>Select Division</option>
          <option value="Data Driven Astronomy">Data Driven Astronomy</option>
          <option value="Electronics">Electronics</option>
          
        </select>

        {/* PS Dropdown */}
        <select
          name="ps"
          value={formData.ps}
          onChange={handleChange}
          required
          className="w-full bg-space-dark/50 border border-space-accent/30 text-white rounded-xl px-[14px] py-[10px] mb-[14px] focus:outline-none focus:border-space-accent transition"
        >
          <option value="" disabled hidden>Select PS</option>
          <option value="PS1">Star and Galaxy Classification</option>
          <option value="PS2">Transient vs Non-Transient Detection</option>
          <option value="PS3">Solar Flare Prediction</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-space-accent text-white font-medium py-[12px] rounded-xl hover:bg-space-accent/90 transition"
        >
          Submit
        </button>

        {/* Status */}
        {status && (
          <p className="text-center mt-[12px] text-space-light">{status}</p>
        )}
      </motion.form>

      {/* PS Section below the form */}
      <div className="flex flex-col p-[30px] items-center w-full px-[20px] mt-[40px] mb-[30p] bg-space-primary/30 flex-1 min-h-[calc(100vh-600px)]">
        <PSSection title="Problem Statements" psOptions={psList} />
      </div>

      {/* Extra padding at bottom */}
      <div className="h-[100px]  bg-space-primary/20"></div>
    </div>
  );
};

export default Recruitment;
