"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

const tabs = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Aim", link: "/aim" },
  { id: 4, name: "Services", link: "/services" },
  { id: 5, name: "Contact", link: "/contact" },
  { id: 6, name: "WhatsApp", link: "https://wa.me/7306988988" },
];

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // trigger after 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
          !isScrolled && pathname == "/"
            ? "bg-transparent"
            : "bg-[#024B57] shadow-lg backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-[100px] flex justify-between items-center px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" aria-label="Varma Placements Home">
            <Image
              src={"/assets/company_logo-no-bg.png"}
              alt="logo"
              height={100}
              width={100}
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-12 font-semibold text-lg">
            {tabs.map((tab) => {
              const isActive = pathname === tab.link;
              return (
                <Link
                  key={tab.id}
                  href={tab.link}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.name !== "WhatsApp" ? (
                    <div
                      className={`relative cursor-pointer transition-transform duration-200 hover:scale-110 select-none flex justify-start items-center gap-1 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-white hover:text-[#DED097]"
                      }`}
                    >
                      {tab.name === "WhatsApp" && <FaWhatsapp />}
                      {tab.name}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-[#DED097]" />
                      )}
                    </div>
                  ) : (
                    <div
                      className={`relative cursor-pointer transition-transform duration-200 select-none scale-150 flex justify-start items-center gap-1 mt-1 text-white`}
                    >
                      <FaWhatsapp />
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setShowNavbar(true)}
            aria-label="Open menu"
            className="lg:hidden text-[#DED097] transition text-3xl"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${
            showNavbar
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowNavbar(false)}
        >
          <nav
            className={`bg-white w-full max-w-sm absolute top-0 left-0 right-0 mx-auto rounded-b-3xl shadow-xl overflow-hidden transform transition-transform duration-300 ${
              showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile menu"
          >
            <div className="flex justify-between items-center h-[100px] px-6 border-b border-gray-200 bg-[#024B57]">
              {/* <h1 className="text-3xl font-extrabold text-indigo-900 select-none">
                Varma Placements
              </h1> */}
              <Image
                src="/assets/company_logo.jpeg"
                alt="logo"
                height={100}
                width={100}
                className="h-[50px] w-auto"
              />
              <button
                onClick={() => setShowNavbar(false)}
                aria-label="Close menu"
                className="text-white hover:text-gray-200 transition text-3xl"
              >
                <X />
              </button>
            </div>

            <ul className="flex flex-col gap-4 px-6 py-6 text-lg font-medium text-indigo-900">
              {tabs.map((tab) => {
                const isActive = pathname === tab.link;
                return (
                  <li key={tab.id}>
                    <Link href={tab.link}>
                      <span
                        onClick={() => setShowNavbar(false)}
                        className={`block rounded-lg px-4 py-3 transition-colors duration-200 ${
                          isActive
                            ? "bg-indigo-100 text-indigo-900 font-semibold"
                            : "hover:bg-indigo-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {tab.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[100px]" />
    </>
  );
}

export default Navbar;
