import React from "react";
import herobg from '@/assets/images/hero.webp'
import SearchMenu from "./SearchMenu";
const Hero = () => {
  return (
    <section
      className="w-full h-[45vh] md:h-[75vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* optional overlay */}
      <div className="w-full h-full bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Explore The World
        </h1>
      </div>
    </section>
  );
};

export default Hero;
