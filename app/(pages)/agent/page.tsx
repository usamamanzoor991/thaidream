"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Agent {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  borderColor: string;
  glowColor: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Loy Krathong",
    subtitle: "Loy Krathong",
    description: "Release intentions, earn on completion",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20d.png",
    borderColor: "#00F0FF",
    glowColor: "#00F0FF",
  },
  {
    id: 2,
    name: "Hanuman",
    subtitle: "Loy Krathong",
    description: "Strategic strength AI Agent",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20A.png",
    borderColor: "#FF1CF7",
    glowColor: "#FF1CF7",
  },
  {
    id: 3,
    name: "Naga",
    subtitle: "Release AI Agent",
    description: "Ancient serpent guardian of realms",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20b.png",
    borderColor: "#00F0FF",
    glowColor: "#00F0FF",
  },

  {
    id: 5,
    name: "Yi Peng",
    subtitle: "Nang Tang er Sky",
    description: "Lanterns lighting the sky completion",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20e.png",
    borderColor: "#00F0FF",
    glowColor: "#00F0FF",
  },
  {
    id: 6,
    name: "Nang Tani",
    subtitle: "Sky Lantur Ageng",
    description: "Forest spirit of luminous grace",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20c.png",
    borderColor: "#FF1CF7",
    glowColor: "#FF1CF7",
  },
  {
    id: 7,
    name: "Phi Ta Khon",
    subtitle: "Nuthe AI Agent",
    description: "Spirit mask dancer of the north",
    image: "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20f.png",
    borderColor: "#00F0FF",
    glowColor: "#00F0FF",
  },

];

// SVG Hexagon clip path
const HexCard = ({
  agent,
  selected,
  onClick,
}: {
  agent: Agent;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="relative flex flex-col items-center cursor-pointer group p-2"
      onClick={onClick}
    >

      <div
        className="md:hidden absolute inset-0 -z-1 opacity-40 backdrop-blur-3xl rounded-2xl"
        style={{
          background: agent.glowColor,
        }}></div>

      {/* Hex image frame */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center mt-2">
        {/* Glow behind */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-50"
          style={{
            background: agent.glowColor,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ 
            background: agent.glowColor,
            clipPath:
              "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
          }}
        />

        {/* Image clipped to hex shape */}
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
          {/* Inner gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <p
          className="text-[10px] tracking-[0.2em] uppercase mb-0.5"
          style={{ color: agent.borderColor, opacity: 0.7 }}
        >
          {/* {agent.subtitle} */}
        </p>
        <h3 className="text-white font-bold text-[24px] leading-tight tracking-tight text-single">
          {agent.name}
        </h3>
        <p className="text-white/80 text-[15px] mt-1 leading-snug max-w-[130px] text-single">
          {agent.description}
        </p>
      </div>
    </div>
  );
};

const AgentPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="pt-22 pb-4 w-full flex items-center justify-center">
      <div className="container flex flex-col px-6">

        {/* ── Background atmospheric layer ── */}
        <div className="relative w-full flex flex-col items-center rounded-3xl overflow-hidden min-h-screen">
          {/* ── Lotus logo ── */}
          <div className="relative">
            <img src="/deesigg.png" className="w-20 h-20 mt-4" />
          </div>

          {/* ── Title ── */}
          <h1 className="relative text-white font-bold text-4xl md:text-5xl text-center tracking-tight leading-tight mb-4">
            Choose Your Starting Agent
          </h1>

          {/* ── Agent Grid ── */}
          <div className="relative w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4 gap-y-2 place-items-center">
            {agents.map((agent) => (
              <HexCard
                key={agent.id}
                agent={agent}
                selected={selected === agent.id}
                onClick={() => {
                  setSelected(agent.id);
                  router.push(`/minting?agent=${agent.name}`);
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentPage;