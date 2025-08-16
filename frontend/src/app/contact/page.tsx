"use client";

import ContactForm from "../(components)/ContactForm";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ConatctHero from "./(components)/ContactHero";

const faqs = [
  {
    question: "What services do you offer to job seekers?",
    answer:
      "We provide a complete pathway to employment including career counseling, skill development training, resume building, interview preparation, and job placement support.",
  },
  {
    question: "Who can enroll in your training and placement programs?",
    answer:
      "Our programs are open to students, recent graduates, and professionals looking to upskill or switch careers. We cater to individuals from various academic backgrounds and streams.",
  },
  {
    question: "What types of training do you offer?",
    answer:
      "We offer industry-relevant training in areas such as IT (Full Stack, Data Science, Digital Marketing), Communication Skills, Aptitude, Soft Skills, and Interview Readiness.",
  },
  {
    question: "Will I get a job after completing the training?",
    answer:
      "Yes, our goal is to help you secure a job. We work with a network of hiring partners and provide placement assistance until you are placed. However, your dedication and performance also play a key role.",
  },
  {
    question: "Do you provide internships as part of the program?",
    answer:
      "Yes, many of our courses include internship opportunities to give you real-world experience and help you build your portfolio.",
  },
  {
    question: "How long are the training programs?",
    answer:
      "Training duration varies by course. Most programs range from 1 to 6 months, depending on the complexity and depth of the subject.",
  },
  {
    question: "What kind of companies do you place candidates in?",
    answer:
      "We partner with startups, mid-sized companies, and established MNCs across various industries to provide diverse job opportunities.",
  },
  {
    question: "Is there any fee for placement services?",
    answer:
      "We offer different packages—some include training plus placement support, while others are placement-only services. Please contact us for specific pricing.",
  },
  {
    question: "Do you help with resume building and mock interviews?",
    answer:
      "Yes! We guide you in creating a professional resume and conduct mock interviews to boost your confidence and improve your performance.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can get started by registering on our website, visiting our office, or calling us directly. Our counselors will guide you through the next steps.",
  },
];

function ContactPage() {
  return (
    <div>
      <ConatctHero />

      {/* Contact Form & Details */}
      <div className="px-5 md:px-10 py-14 bg-gray-50 rounded-b-xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="border-l-4 pl-3 border-blue-900 font-bold text-2xl text-gray-800">
                Contact Details
              </h2>
              <ul className="space-y-4 mt-6">
                <ContactItem
                  icon={<IoCallOutline />}
                  text="+91 7997679496, +91 95150 66474"
                />
                <ContactItem icon={<FaWhatsapp />} text="+91 7997679496" />
                <ContactItem icon={<TfiEmail />} text="srikanth@sowmyacs.com" />
              </ul>
            </div>

            <div>
              <h2 className="border-l-4 pl-3 border-blue-900 font-bold text-2xl text-gray-800">
                Address
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                H.No. 7-1-621/99/1, 2nd Floor, Opp. Axis Bank, Sanjeeva Reddy
                Nagar. Hyderabad 500038, Telangana.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9054762251!2d78.24289057272242!3d17.412608357259863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1755341705925!5m2!1sen!2sin"
                width="600"
                height="450"
                className="w-full h-[250px] md:h-[300px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-5 md:px-10 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ's</h2>
          <div className="mt-2 h-1 w-12 mx-auto bg-blue-900 rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: any; text: string }) {
  return (
    <li className="flex items-center gap-4">
      <span className="bg-blue-900 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
        {icon}
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function FAQ({ faqs }: { faqs: any[] }) {
  const [openItems, setOpenItems] = useState(new Set<number>());

  const toggleFAQ = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, ind) => {
        const isOpen = openItems.has(ind);
        return (
          <div
            key={ind}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(ind)}
              className="w-full text-left px-5 py-4 flex justify-between items-center rounded-lg font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.question}
              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && <SmoothAnswer answer={faq.answer} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function SmoothAnswer({ answer }: { answer: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: ref.current ? ref.current.scrollHeight : "auto",
        opacity: 1,
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div ref={ref} className="px-5 pb-4 text-gray-600">
        {answer}
      </div>
    </motion.div>
  );
}

export default ContactPage;
