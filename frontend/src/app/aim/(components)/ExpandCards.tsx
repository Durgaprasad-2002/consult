import { useEffect, useState } from "react";

const items = [
  {
    title: "Fast Performance",
    description:
      "Our application is optimized for speed and responsiveness across all devices.",
  },
  {
    title: "Secure and Reliable",
    description:
      "We prioritize data security and system stability to ensure user trust.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Enjoy an intuitive and smooth user experience designed for everyone.",
  },
  {
    title: "24/7 Support",
    description:
      "Get round-the-clock assistance from our expert customer service team.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with your needs, supporting thousands of users with ease.",
  },
];

export default function ExpandCards() {
  const [currentOpen, setCurrentOpen] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentOpen((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="flex overflow-x-auto max-w-4xl  mx-auto px-4 py-6 gap-2 scrollbar-hide"
      style={{ userSelect: "none" }}
    >
      {items.map((card, ind) => {
        const isOpen = ind === currentOpen;
        return (
          <div
            key={ind}
            onMouseEnter={() => {
              setCurrentOpen(ind);
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className={`flex-shrink-0 rounded-3xl shadow-lg cursor-pointer transition-all duration-700 ease-in-out flex items-center justify-center
              ${
                isOpen
                  ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white"
                  : "bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 text-blue-900 hover:brightness-110"
              }
            `}
            style={{
              height: "240px",
              overflow: "hidden",
              width: isOpen ? "70%" : "40px",
              maxWidth: isOpen ? 500 : 40,
              minWidth: 40,
            }}
          >
            {isOpen ? (
              <div className="p-6 flex flex-col justify-center h-full text-left">
                <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                <p className="text-base leading-relaxed">{card.description}</p>
              </div>
            ) : (
              <span className="text-lg font-bold select-none">
                {card.title.charAt(0)}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
