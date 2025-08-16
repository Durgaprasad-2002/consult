"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import Image from "next/image";
import React from "react";

const Star = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
      `
    </svg>
  </>
);

const CustomerStory = ({ data }: { data: any }) => {
  return (
    <div className="flex h-full w-full max-w-[350px] md:max-w-[600px] flex-col justify-between gap-6 rounded-xl bg-gradient-to-br from-white via-slate-100 to-indigo-50 p-8 shadow-xl border border-indigo-100 hover:-translate-y-1 hover:shadow-2xl transition">
      {/* Top: Star Rating and Review */}
      <div>
        <div className="flex items-center mb-3 space-x-1">
          {[...Array(5)].map((_, i) => (
            <span className="w-5 h-5 text-yellow-400 drop-shadow" key={i}>
              <Star />
            </span>
          ))}
        </div>
        <p className="min-h-28 md:min-h-20 text-gray-700 md:text-lg leading-relaxed italic">
          "{data.review}"
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-indigo-300 via-indigo-100 to-transparent rounded-full my-2 opacity-80" />

      {/* Bottom: User Info */}
      <div className="flex items-center gap-4">
        <Image
          src="/assets/user_placement.webp"
          alt="customer-image"
          width={52}
          height={52}
          className="h-14 w-14 rounded-full object-cover border-2 border-indigo-300 shadow"
        />
        <div>
          <h2 className="text-lg font-bold text-indigo-800 leading-tight">
            {data.name}
          </h2>
          {data.position && (
            <p className="text-indigo-500 text-sm font-medium mt-1">
              {data.position}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

function Testimonials({ stories_user }: { stories_user: any }) {
  const [stories, setStories] = useState(stories_user);

  const [speed, setSpeed] = useState(50);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 400], ["100%", "0%"]);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    const containerWidth = containerRef.current?.scrollWidth || 0;
    const prevX = x.get();
    let nextX = prevX - (speed * delta) / 1000;
    if (Math.abs(nextX) >= containerWidth / 2) {
      nextX = 0;
    }
    x.set(nextX);
  });

  return (
    <div
      className="relative h-full w-full max-w-[1440px] overflow-hidden pt-10 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]"
      onMouseOver={() => setSpeed(20)}
      onMouseLeave={() => setSpeed(50)}
    >
      {/* <div className="absolute right-0 top-10 z-[-1] hidden h-[319px] w-[319px] rounded-full bg-violet-400 opacity-20 blur-xl md:block"></div> */}
      <motion.div className="flex gap-5 p-4" style={{ x }} ref={containerRef}>
        {[...stories, ...stories].map((data, index) => (
          <div key={index} className="shrink-0">
            <CustomerStory data={data} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Testimonials;
