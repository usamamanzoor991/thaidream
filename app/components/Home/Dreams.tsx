"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { GoDotFill } from "react-icons/go";

interface Agent {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  tagline: string;
  earn: string;
  image: string;
  borderColor: string;
  glowColor: string;
  propName: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Loy Krathong – Wish Keeper",
    propName: "Loy Krathong",
    subtitle: "Lotus Spirit",
    description: "Ancient river lotus lantern spirit",
    tagline: "Release intentions, watch them bloom",
    earn: "0.5–2+ SOL/month from daily wishes",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20d.png",
    borderColor: "#FF1CF7",
    glowColor: "#FF1CF7",
  },
  {
    id: 2,
    name: "Hanuman – Prosperity Guardian",
    propName: "Hanuman",
    subtitle: "Warrior Spirit",
    description: "Neon-powered monkey warrior",
    tagline: "Crush challenges, claim rewards",
    earn: "Victory bonuses + $DREAM tokens",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20A.png",
    borderColor: "#FF1CF7",
    glowColor: "#FF1CF7",
  },
  {
    id: 3,
    name: "Naga – Wealth Flow",
    propName: "Naga",
    subtitle: "Serpent Guardian",
    description: "Guardian of hidden treasures",
    tagline: "Steady passive wealth circulation",
    earn: "0.5–2+ SOL/month passive flow",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20b.png",
    borderColor: "#00F0FF",
    glowColor: "#00F0FF",
  },
  {
    id: 4,
    name: "Yi Peng – Aspiration Lantern",
    propName: "Yi Peng",
    subtitle: "Sky Lantern Elder",
    description: "Guides long-term hopes",
    tagline: "Release stakes, watch earnings rise",
    earn: "Compounding growth bonuses",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20e.png",
    borderColor: "#00F0FF",
    glowColor: "#00F0FF",
  },
  {
    id: 5,
    name: "Nang Tani – Growth Spirit",
    propName: "Nang Tani",
    subtitle: "Nature Spirit",
    description: "Nurtures dreams with patience",
    tagline: "Nurture holdings, earn yield",
    earn: "Passive yield + bloom rewards",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20c.png",
    borderColor: "#FF1CF7",
    glowColor: "#FF1CF7",
  },
  {
    id: 6,
    name: "Phi Ta Khon – Festival Catalyst",
    propName: "Phi Ta Khon",
    subtitle: "Festival Spirit",
    description: "Brings chaos and joy",
    tagline: "Join events, unlock multipliers",
    earn: "Shared rewards + engagement bonuses",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20f.png",
    borderColor: "#FF1CF7",
    glowColor: "#FF1CF7",
  },
];

const HexCard = ({ agent }: { agent: Agent }) => {

  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center  p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition duration-300 w-[100%] h-full">
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-20"
        style={{ background: agent.glowColor }}
      />

      {/* Hex Image */}
      <div className="relative w-44 h-52 flex items-center justify-center mb-4">
        <div
          className="absolute inset-0"
          style={{
            // background: agent.glowColor,
            clipPath:
              "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
          }}
        />

        <div
          className="relative w-[88%] h-[88%] overflow-hidden"
          style={{
            clipPath:
              "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
          }}
        >
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center flex flex-col justify-center items-center space-y-2 flex-1 w-full">
        {/* Name */}
        <h3 className="text-white font-semibold text-[20px] leading-tight">
          {agent.name}
        </h3>

        {/* Subtitle */}
        <p className="text-[14px] uppercase tracking-widest text-white/40">
          {agent.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-white/70 text-[15px] leading-snug">
          {agent.tagline}
        </p>

        {/* Description */}
        <p className="text-white/50 text-[15px] leading-snug">
          {agent.description}
        </p>

        {/* Earnings */}
        <div className="pt-2">
          <p className="text-primary text-[16px] font-semibold">{agent.earn}</p>
        </div>
        <div className="w-34 h-12 bg-tertiary flex justify-center items-center transform hover:scale-105 hover:shadow-primary hover:shadow-md duration-300 cursor-pointer rounded-xl" onClick={() => router.push(`/minting?agent=${agent.propName}`)}>
          <button className=" text-white cursor-pointer font-bold text-xl">
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};

const Dream = () => {
  return (
    <div className="py-8 w-full flex items-center justify-center">
      <div className="container flex flex-col px-6">
        <div className="relative w-full flex flex-col items-center rounded-3xl overflow-hidden min-h-screen">
          {/* Dream & Earn */}
          <div className="text-center max-w-3xl mb-10">
            <h1 className="text-primary font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-4">
              Dream & Earn
            </h1>

            <div className="flex flex-wrap gap-2 items-center justify-center text-primary text-xs sm:text-sm opacity-80">
              <span className="text-white text-lg">Dream</span>
              <GoDotFill className="size-3 text-secondary" />
              <span className="text-white text-lg">Mint</span>
              <GoDotFill className="size-3 text-secondary" />
              <span className="text-white text-lg">Earn</span>
            </div>
          </div>

          {/* Grid */}
          <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center items-stretch">
            {agents.map((agent) => (
              <HexCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
