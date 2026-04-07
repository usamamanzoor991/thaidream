import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen px-4">
      <div className="container flex flex-col justify-center items-center text-center">
        <div className="flex flex-wrap gap-2 items-center justify-center text-primary text-xs sm:text-sm opacity-80">
          <span className="text-white">Powered by Solana</span>
          <GoDotFill className="size-3" />
          <span className="text-white">Inspired by Thai Folklore</span>
          <GoDotFill className="size-3" />
          <span className="text-white">Autonomous AI Agents</span>
        </div>

        <div className="flex flex-col items-center gap-1 mt-8 leading-tight">
          <h1 className="text-3xl sm:text-5xl font-semibold text-white/90">
            Thai Dreams
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold text-primary">
            Awakened
          </h1>
        </div>

        <div className="flex flex-col gap-2 items-center mt-6 max-w-xl">
          <h1 className="text-sm sm:text-base text-white leading-relaxed">
            AI agents inspired by Thai folklore, built on Solana.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-0 justify-center items-center mt-8 w-full sm:w-auto overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="w-full sm:w-auto bg-white/5 backdrop-blur-md">
  <input
    type="text"
    placeholder="Describe your Thai Dream..."
    className="w-full px-6 py-3 bg-transparent text-white placeholder:text-white/50 focus:outline-none"
  />
</div>

          <Link href="/agent" className="w-full sm:w-auto px-6 py-3 bg-primary text-white hover:opacity-90 transition hover:scale-[1.01]">
            Explore Gallery
          </Link>
          
        </div>

        <div className="flex flex-wrap gap-2 justify-center items-center mt-4 text-xs sm:text-sm opacity-80">
          <span className="text-primary">SOL only</span>
          <GoDotFill className="size-2 opacity-50" />

          <span className="text-secondary">Mainnet live</span>
          <GoDotFill className="size-2 opacity-50" />

          <span className="text-primary">No gas games</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;