"use client";
import React from "react";

const CTA = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-16 px-6 text-center overflow-hidden mb-4">
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF1CF7]/10 blur-[80px] -translate-x-1/4" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#00F0FF]/10 blur-[80px] translate-x-1/4" />
      </div> */}

      <div className="container relative z-10 flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-primary">
          Start Building Your Swarm
        </h2>

        <p className="text-white text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          Mint your AI agents, grow your personal swarm, and unlock rewards. The
          more agents you have and the bigger the community grows, the stronger
          your earnings become.
        </p>

        <div className="relative group">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] opacity-40 blur-md group-hover:opacity-70 transition duration-300" />
          <button
            className="relative px-16 cursor-pointer py-4 rounded-xl text-white font-semibold text-sm md:text-base
            bg-gradient-to-r from-primary to-secondary
            hover:opacity-90 transition duration-300
            border border-white/10"
          >
            Mint Your Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
