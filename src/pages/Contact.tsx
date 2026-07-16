import React, { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
// Removed unused icons for cleaner import
import { Mail, MapPin, Clock, Instagram, Linkedin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact: React.FC = () => {
  // Scrolls to top on page load, good for navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useRef to get a direct reference to the form element
  const formRef = useRef<HTMLFormElement>(null);

  // State for managing form submission status and feedback to the user
  const [isSending, setIsSending] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Retrieve EmailJS credentials from environment variables
  // Provides fallbacks to empty strings for safety if variables aren't set,
  // but they MUST be configured for production deployments.
  const SERVICE_ID: string =
   
    import.meta.env.VITE_EMAILJS_SERVICE_ID ||
    "";
  const TEMPLATE_ID: string =
    
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    "";
  const PUBLIC_KEY: string =
    
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    "";

   
  /**
   * Handles the form submission to send an email via EmailJS.
   * @param e The form submission event.
   */
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Ensure the form reference exists before proceeding
    if (!formRef.current) {
      console.error("Form reference is null. Cannot send email.");
      setMessageStatus("error");
      return;
    }

    // Basic check for EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS credentials are not configured. Please check your .env file or deployment environment variables."
      );
      setMessageStatus("error");
      alert(
        "Email sending is not configured. Please contact the website administrator."
      ); // User-friendly alert
      return;
    }

    setIsSending(true); // Set sending state to true to disable button and show loading
    setMessageStatus("idle"); // Reset any previous message status

    try {
      // EmailJS's sendForm method directly takes the form element and public key
      // It uses the 'name' attributes of form fields to gather data for the template.
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log("EmailJS SUCCESS!", result.status, result.text);
      setMessageStatus("success"); // Update status to show success message
      formRef.current.reset(); // Clear all form fields after successful submission
    } catch (error: any) {
      // Catch any errors during the email sending process
      console.error("EmailJS FAILED...", error);
      setMessageStatus("error"); // Update status to show error message
      // Log more specific error details if available
      if (error && typeof error === "object" && "text" in error) {
        console.error("Error details:", error.text);
      }
    } finally {
      setIsSending(false); // Always reset sending state regardless of success or failure
    }
  };

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
              Contact Us
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
              Have questions or want to get in touch? We'd love to hear from
              you!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle
                title="Get In Touch"
                subtitle="Find us through any of these channels"
                light={true}
                align="left"
              />

              <div className="mt-8 space-y-6">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail size={24} className="text-space-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-bold">Email</h3>
                    <p className="text-gray-300">aerospace_club@iitism.ac.in</p>
                  </div>
                </motion.div>

                {/* Phone details are commented out as per your original code */}
                {/* <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Phone size={24} className="text-space-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-bold">Phone</h3>
                    <p className="text-gray-300">+91 123 456 7890 (Club Office)</p>
                    <p className="text-gray-300">+91 987 654 3210 (Faculty Advisor)</p>
                  </div>
                </motion.div> */}

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <MapPin size={24} className="text-space-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-bold">Location</h3>
                    <p className="text-gray-300">ASTC Office, NVCTI</p>
                    <p className="text-gray-300">IIT (ISM) Dhanbad</p>
                    <p className="text-gray-300">Dhanbad, Jharkhand - 826004</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Clock size={24} className="text-space-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-bold">Office Hours</h3>
                    <p className="text-gray-300">
                      Saturday: 10:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-300">Sunday: 10:00 AM to 5:00 PM</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10">
                <h3 className="text-white font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    // Removed Facebook, Twitter, Github as per original code's commented-out sections
                    {
                      icon: <Instagram size={24} />,
                      label: "Instagram",
                      link: "https://www.instagram.com/arka_iit_ism?igsh=YjU1MHo1OTF5bDRp",
                    },
                    {
                      icon: <Linkedin size={24} />,
                      label: "LinkedIn",
                      link: "https://www.linkedin.com/company/arka-iit-ism-dhanbad/",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="p-2 bg-space-primary/40 rounded-full text-gray-300 hover:text-space-accent hover:bg-space-primary/60 transition-colors"
                      aria-label={social.label}
                      target="_blank" // Open in new tab
                      rel="noopener noreferrer" // Security best practice
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {/* Message Status Feedback */}
              {messageStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 text-green-300 border border-green-500 rounded-md p-4 mb-4 text-center"
                >
                  Your message has been sent successfully! We'll get back to you
                  soon.
                </motion.p>
              )}
              {messageStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 text-red-300 border border-red-500 rounded-md p-4 mb-4 text-center"
                >
                  Failed to send message. Please try again later.
                </motion.p>
              )}

              {/* The Contact Form */}
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-white mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name" // IMPORTANT: This name must match your EmailJS template variable
                      required
                      className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-white mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email" // IMPORTANT: This name must match your EmailJS template variable
                      required
                      className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject" // IMPORTANT: This name must match your EmailJS template variable
                    required
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message" // IMPORTANT: This name must match your EmailJS template variable
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  ></textarea>
                </div>

                <div className="text-right">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
			<section className="py-16 md:py-24 bg-space-primary/20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionTitle
						title="Find Us"
						subtitle="Visit us at IIT ISM Dhanbad campus"
						light={true}
					/>

					<div className="mt-8 rounded-lg overflow-hidden h-[400px]">
						<iframe
							title="NVCTI IIT ISM Dhanbad"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.168329827113!2d86.43601627550662!3d23.812612578628027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd31113a1ad3%3A0x526d1505f4fa50a7!2sNaresh%20Vashisht%20Centre%20for%20Tinkering%20%26%20Innovation%20(NVCTI%2C%20IIT-ISM)!5e0!3m2!1sen!2sin!4v1766435866982!5m2!1sen!2sin"
							className="w-full h-full border-0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							style={{
								filter:
									"invert(92%) hue-rotate(180deg) brightness(85%) contrast(105%)",
							}}
						/>
					</div>
				</div>
			</section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about ASTC"
            light={true}
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "How can I join ASTC?",
                answer:
                  "You can join ASTC by filling out the membership application form on our 'Join Us' page. Membership is open to all IIT ISM Dhanbad students with an interest in aerospace and space technology.",
              },
              {
                question: "Are there any membership fees?",
                answer:
                  "Yes, there is an annual membership fee of Rs. 500, which helps cover the costs of club activities, materials for projects, and event organization.",
              },
              {
                question: "Do I need prior experience to join?",
                answer:
                  "No prior experience is required! We welcome members with all levels of experience, from beginners to those with advanced knowledge. What's most important is your enthusiasm and willingness to learn.",
              },
              {
                question: "How often does the club meet?",
                answer:
                  "We typically have general meetings twice a month, with additional project team meetings as needed. Active projects may meet more frequently, especially when preparing for competitions or events.",
              },
              {
                question: "Can I propose a new project or event idea?",
                answer:
                  "Absolutely! We encourage members to propose new ideas for projects, events, or workshops. You can share your ideas during our general meetings or directly with the club leadership.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white text-xl font-bold mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
// import SectionTitle from '../components/SectionTitle';
// import Button from '../components/Button';

// const Contact: React.FC = () => {
//   React.useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 bg-space-primary/20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center">
//             <motion.h1
//               className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Contact Us
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="flex justify-center mb-8"
//             >
//               <div className="h-1 w-20 bg-space-accent"></div>
//             </motion.div>
//             <motion.p
//               className="text-gray-300 text-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               Have questions or want to get in touch? We'd love to hear from
//               you!
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//             <div className="lg:col-span-2">
//               <SectionTitle
//                 title="Get In Touch"
//                 subtitle="Find us through any of these channels"
//                 light={true}
//                 align="left"
//               />

//               <div className="mt-8 space-y-6">
//                 <motion.div
//                   className="flex items-start"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Mail size={24} className="text-space-accent mr-4 mt-1" />
//                   <div>
//                     <h3 className="text-white font-bold">Email</h3>
//                     <p className="text-gray-300">aerospace_club@iitism.ac.in</p>
//                     {/* <p className="text-gray-300">president.astc@iitism.ac.in</p> */}
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   {/* <Phone size={24} className="text-space-accent mr-4 mt-1" />
//                   <div>
//                     <h3 className="text-white font-bold">Phone</h3>
//                     <p className="text-gray-300">+91 123 456 7890 (Club Office)</p>
//                     <p className="text-gray-300">+91 987 654 3210 (Faculty Advisor)</p>
//                   </div> */}
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <MapPin size={24} className="text-space-accent mr-4 mt-1" />
//                   <div>
//                     <h3 className="text-white font-bold">Location</h3>
//                     <p className="text-gray-300">ASTC Office, NVCTI</p>
//                     <p className="text-gray-300">IIT (ISM) Dhanbad</p>
//                     <p className="text-gray-300">Dhanbad, Jharkhand - 826004</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                   <Clock size={24} className="text-space-accent mr-4 mt-1" />
//                   <div>
//                     <h3 className="text-white font-bold">Office Hours</h3>
//                     {/* <p className="text-gray-300">Monday - Friday: 10:00 AM - 5:00 PM</p> */}
//                     <p className="text-gray-300">
//                       Saturday: 10:00 AM - 5:00 PM
//                     </p>
//                     <p className="text-gray-300">Sunday: 10:00 AM to 5:00 PM</p>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="mt-10">
//                 <h3 className="text-white font-bold mb-4">Connect With Us</h3>
//                 <div className="flex space-x-4">
//                   {[
//                     // { icon: <Facebook size={24} />, label: "Facebook" },
//                     {
//                       icon: <Instagram size={24} />,
//                       label: "Instagram",
//                       link: "https://www.instagram.com/arka_iit_ism?igsh=YjU1MHo1OTF5bDRp",
//                     },
//                     // { icon: <Twitter size={24} />, label: "Twitter" },
//                     {
//                       icon: <Linkedin size={24} />,
//                       label: "LinkedIn",
//                       link: "https://www.linkedin.com/company/arka-iit-ism-dhanbad/",
//                     },
//                     // { icon: <Github size={24} />, label: "GitHub" }
//                   ].map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.link}
//                       className="p-2 bg-space-primary/40 rounded-full text-gray-300 hover:text-space-accent hover:bg-space-primary/60 transition-colors"
//                       aria-label={social.label}
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10">
//               <h2 className="text-2xl font-display font-bold text-white mb-6">
//                 Send Us a Message
//               </h2>

//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-white mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       required
//                       className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-white mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       required
//                       className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-white mb-2">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     required
//                     className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-white mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     required
//                     rows={6}
//                     className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
//                   ></textarea>
//                 </div>

//                 <div className="text-right">
//                   <Button variant="primary" size="lg" type="submit">
//                     Send Message
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section (Placeholder) */}
//       <section className="py-16 md:py-24 bg-space-primary/20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionTitle
//             title="Find Us"
//             subtitle="Visit us at IIT ISM Dhanbad campus"
//             light={true}
//           />

//           <div className="mt-8 rounded-lg overflow-hidden h-[400px] bg-white/5 flex items-center justify-center">
//             <p className="text-gray-300">
//               Interactive map will be displayed here
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionTitle
//             title="Frequently Asked Questions"
//             subtitle="Find answers to common questions about ASTC"
//             light={true}
//           />

//           <div className="mt-12 space-y-6 max-w-3xl mx-auto">
//             {[
//               {
//                 question: "How can I join ASTC?",
//                 answer:
//                   "You can join ASTC by filling out the membership application form on our 'Join Us' page. Membership is open to all IIT ISM Dhanbad students with an interest in aerospace and space technology.",
//               },
//               {
//                 question: "Are there any membership fees?",
//                 answer:
//                   "Yes, there is an annual membership fee of Rs. 500, which helps cover the costs of club activities, materials for projects, and event organization.",
//               },
//               {
//                 question: "Do I need prior experience to join?",
//                 answer:
//                   "No prior experience is required! We welcome members with all levels of experience, from beginners to those with advanced knowledge. What's most important is your enthusiasm and willingness to learn.",
//               },
//               {
//                 question: "How often does the club meet?",
//                 answer:
//                   "We typically have general meetings twice a month, with additional project team meetings as needed. Active projects may meet more frequently, especially when preparing for competitions or events.",
//               },
//               {
//                 question: "Can I propose a new project or event idea?",
//                 answer:
//                   "Absolutely! We encourage members to propose new ideas for projects, events, or workshops. You can share your ideas during our general meetings or directly with the club leadership.",
//               },
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <h3 className="text-white text-xl font-bold mb-3">
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-300">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
