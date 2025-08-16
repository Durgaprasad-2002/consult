import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

const contactInfo = [
  {
    icon: <FaWhatsapp className="w-8 h-8 text-green-400" />,
    label: "WhatsApp",
    value: "+917997679496",
    link: "https://wa.me/7997679496",
  },
  {
    icon: <MdOutlinePhone className="w-8 h-8 text-blue-400" />,
    label: "Phone",
    value: "+91 7997679496",
    link: "tel:7997679496",
  },
  {
    icon: <MdOutlineEmail className="w-8 h-8 text-indigo-400" />,
    label: "Email",
    value: "srikanth@sowmyacs.com",
    link: "mailto:srikanth@sowmyacs.com",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Aim", href: "/ain" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-slate-900 to-blue-900 text-white py-12 shadow-xl">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        {/* About Section */}
        <div className="flex-1 space-y-6 max-w-sm">
          <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
            About Sowmya Consultancy
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed drop-shadow-sm">
            We upskill students and professionals with job-ready training,
            expert mentorship, and placement support.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex-1 space-y-6 max-w-xs">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="inline-block text-gray-300 hover:text-yellow-400 hover:underline transition-colors duration-200"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Stay Connected */}
        <div className="flex-1 max-w-sm space-y-6">
          <h2 className="text-2xl font-semibold">📡 Stay Connected</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Have questions or need career guidance? Reach out to us anytime,
            we're here to help you every step of the way.
          </p>
          <div className="flex gap-8">
            {contactInfo.map((contact, ind) => (
              <Link
                key={ind}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
                className="flex items-center justify-center rounded-full bg-white/10 p-3 hover:bg-white/20 shadow-md transition-transform duration-200 transform hover:scale-110"
              >
                {contact.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-8 mx-auto px-6 max-w-[1440px]">
        <p className="text-center text-gray-400 text-sm md:text-base select-none">
          © 2025 Sowmya Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
