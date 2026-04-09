"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState,useRef,useEffect } from "react";
import toast from "react-hot-toast";
import { useModalStore } from "@/app/zustand/store";
const agents = [
  {
    name: "Loy Krathong",
    AGENT_REGISTRATION_URI: "CAUMDFqJcZ9XwHesaJEju41LQNdTpkmQjvbQhcFi2ZAn",
    assetUri:
      "https://ipfs.io/ipfs/bafkreihaifotlzcbfcdg27wp2utivnmgotjtmigutrj2wk3kea2hbtt7ii",
    series: "SERIES 01 // MYTHOS",
    description:
      "Wish Keeper: Releases floating intentions and watches beautiful opportunities bloom.",
    image:
      "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20d.png",
    folkloreType: "River Spirit",
    rarityRank: "Epic (Top 5%)",
    auraLevel: "88 / 100",
    element: "Flowing Light",
    mintPrice: "2.8 SOL",
    gasEstimate: "GAS ESTIMATE: 0.000082 SOL",
    attributes: [
      { trait_type: "Agent Type", value: "Standard" },
      { trait_type: "Role", value: "Wish Keeper" },
      { trait_type: "Culture", value: "Thai Folklore" },
    ],
  },
  {
    name: "Hanuman",
    AGENT_REGISTRATION_URI: "3UDkNdMYFkekqfgwe786J7G2rYYUcmKK4GAmGUT2NkAH",
    assetUri:
      "https://ipfs.io/ipfs/bafkreibhy53vwmytujlccl7z2itdcjafi3qjekntjtuolq36jv4ti5o55a",
    series: "SERIES 01 // MYTHOS",
    description:
      "Prosperity Guardian: Powerful monkey who crushes obstacles and claims victory rewards for your swarm.",
    image:
      "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20A.png",
    folkloreType: "Divine Warrior",
    rarityRank: "Legendary (Top 1%)",
    auraLevel: "96 / 100",
    element: "Solar Fury",
    mintPrice: "5.2 SOL",
    gasEstimate: "GAS ESTIMATE: 0.00011 SOL",
    attributes: [
      { trait_type: "Agent Type", value: "Premium" },
      { trait_type: "Role", value: "Prosperity Guardian" },
      { trait_type: "Culture", value: "Thai Folklore" },
    ],
  },
  {
    name: "Naga",
    AGENT_REGISTRATION_URI: "7SZzsEAHCd29VZe3empJGoMYJc1RjisEbnn5SXJCTrY5",
    assetUri:
      "https://ipfs.io/ipfs/bafkreibmtjpyzgdrftvo6acvwxjnx6mgeu22kwhov5cimyn46plktebmim",
    series: "SERIES 01 // MYTHOS",
    description:
      "Wealth Flow: Mythical serpent spirit that creates steady passive wealth circulation.",
    image:
      "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20b.png",
    folkloreType: "Serpent Deity",
    rarityRank: "Mythic (Top 2%)",
    auraLevel: "92 / 100",
    element: "Aqua Ether",
    mintPrice: "4.7 SOL",
    gasEstimate: "GAS ESTIMATE: 0.000098 SOL",
    attributes: [
      { trait_type: "Agent Type", value: "Premium" },
      { trait_type: "Role", value: "Wealth Flow" },
      { trait_type: "Culture", value: "Thai Folklore" },
    ],
  },
  {
    name: "Yi Peng",
    AGENT_REGISTRATION_URI: "7bsPo94SLroqLtXTfTzU2mFtcnn2uWDZJgU1fwKvSrio",
    assetUri:
      "https://ipfs.io/ipfs/bafkreifa3o4zuyugyerw6zxmyir3kkxonub4mv6lhvi7lfsqkozfgtha24",
    series: "SERIES 01 // MYTHOS",
    description:
      "Aspiration Lantern: Releases limitations and helps earnings rise with every launch.",
    image:
      "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20e.png",
    folkloreType: "Sky Spirit",
    rarityRank: "Epic (Top 5%)",
    auraLevel: "90 / 100",
    element: "Celestial Flame",
    mintPrice: "3.6 SOL",
    gasEstimate: "GAS ESTIMATE: 0.000087 SOL",
    attributes: [
      { trait_type: "Agent Type", value: "Standard" },
      { trait_type: "Role", value: "Aspiration Lantern" },
      { trait_type: "Culture", value: "Thai Folklore" },
    ],
  },
  {
    name: "Nang Tani",
    AGENT_REGISTRATION_URI: "7A9az5bdyZSVUbwe8eaoHpsXMdZ3HaNdJPwZZTjYTzo8",
    assetUri:
      "https://ipfs.io/ipfs/bafkreicerqaedlcwk3vbc2ijtlgg5vwena3fo5g7iwxls34v423se52juq",
    series: "SERIES 01 // MYTHOS",
    description:
      "Growth Spirit: Gentle banana tree spirit that nurtures your holdings and generates steady yield.",
    image:
      "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20c.png",
    folkloreType: "Nature Spirit",
    rarityRank: "Rare (Top 10%)",
    auraLevel: "85 / 100",
    element: "Verdant Bloom",
    mintPrice: "2.2 SOL",
    gasEstimate: "GAS ESTIMATE: 0.000075 SOL",
    attributes: [
      { trait_type: "Agent Type", value: "Premium" },
      { trait_type: "Role", value: "Growth Spirit" },
      { trait_type: "Culture", value: "Thai Folklore" },
    ],
  },
  {
    name: "Phi Ta Khon",
    AGENT_REGISTRATION_URI: "HsCjjXr9km7ruKwBdnQRsrJH9JtKwcepUBCa7uiGZnTn",
    assetUri:
      "https://ipfs.io/ipfs/bafkreidlp2cfapxa3yknpfnsdl2secrypmd44lru7e5t6rtcqhidqyugcq",
    series: "SERIES 01 // MYTHOS",
    description:
      "Festival Catalyst: Joins events, unlocks swarm multipliers and community celebrations.",
    image:
      "https://ipfs.io/ipfs/bafybeigdswz6iyhyoqtds3ptdns2bj7oripufjikcsk4qzfkr6wfwbwyii/user%20f.png",
    folkloreType: "Festival Spirit",
    rarityRank: "Epic (Top 5%)",
    auraLevel: "89 / 100",
    element: "Chaos Pulse",
    mintPrice: "3.1 SOL",
    gasEstimate: "GAS ESTIMATE: 0.000084 SOL",
    attributes: [
      { trait_type: "Agent Type", value: "Standard" },
      { trait_type: "Role", value: "Festival Catalyst" },
      { trait_type: "Culture", value: "Thai Folklore" },
    ],
  },
];

export default function MintingPage() {
  // const [confirmed, setConfirmed] = useState(false);
  const { openModal } = useModalStore();
  const searchParams = useSearchParams();
  const agentName = searchParams.get("agent");
  const { publicKey , connected } = useWallet();
  const address = publicKey?.toBase58();
  const isConnected = connected;
  const [progress,setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const agent = agents.find((agent) => agent?.name === agentName);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isConnected) {
        toast.error("Please connect your wallet");
        throw Error("Please connect your wallet");
      }
      setProgress(0);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            return prev;
          } else {
            return prev + 10;
          }
        });
      }, 300);
      const res = await fetch("/api/mint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          AGENT_REGISTRATION_URI: agent?.AGENT_REGISTRATION_URI,
          assetUri: agent?.assetUri,
          name: agent?.name,
        }),
      });

      if (!res.ok) {
        toast.error("Mint failed");
        setProgress(0);
        clearInterval(intervalRef?.current!);
        throw new Error("Mint failed");
      }

      const data = await res.json();
      setProgress(100);
      openModal({
        transactionId: "test",
        explorerUrl: data.explorerUrl,
      });
      return data;
    },
  });

  useEffect(() => {
    if (progress === 100) {
      clearInterval(intervalRef?.current!);
    }
  }, [progress]);

  if (!agent) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="container flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold text-foreground tracking-tight leading-tight mb-3">
            Agent Not Found!
          </h1>
          <p className="text-foreground/50 text-sm leading-relaxed max-w-sm">
            Please select an agent to mint.
          </p>
          <button className="mt-4 px-4 py-2 text-foreground rounded-lg cursor-pointer">
            <Link
              href="/agent"
              className="italic hover:underline transition-all duration-1000"
            >
              Go to Agents
            </Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-22 w-full flex flex-col items-center justify-center min-h-screen">
      <div className="container flex flex-col px-6">
        {/* ── Two-column layout ── */}
        <section className="w-full pb-12 grid md:grid-cols-2 grid-cols-1 gap-10 items-start">
          {/* ── LEFT: Agent Image Card ── */}
          <div className="relative w-full flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5">
              {/* Series badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] tracking-widest text-foreground/60 border border-foreground/20 rounded-full px-3 py-1 bg-background/60 backdrop-blur-sm">
                  {agent?.series}
                </span>
              </div>

              {/* Image */}
              <div className="w-full bg-gradient-to-b from-foreground/10 to-foreground/5 flex items-center justify-center overflow-hidden">
                <img
                  src={agent?.image}
                  alt={agent?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Solana Live Mint badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-background/70 backdrop-blur-sm border border-foreground/10 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] tracking-widest text-foreground/50 uppercase">
                  Solana Live Mint
                </span>
              </div>
            </div>

            {/* Decorative watermark behind card */}
            <div className="absolute -bottom-8 -left-6 text-[120px] text-secondary/10 select-none pointer-events-none font-bold leading-none">
              ❧
            </div>
          </div>

          {/* ── RIGHT: Agent Details ── */}
          <div className="flex flex-col gap-6">
            {/* Name & Description */}
            <div>
              <h1 className="text-5xl mt-2 md:mt-8 font-bold text-foreground tracking-tight leading-tight mb-3">
                {agent?.name}
              </h1>
              <p className="text-foreground/50 text-md leading-relaxed max-w-sm">
                {agent?.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-px bg-foreground/10 rounded-xl overflow-hidden border border-foreground/10">
              {agent?.attributes?.map(({ trait_type, value }) => (
                <div
                  key={trait_type}
                  className="bg-background p-4 flex flex-col gap-1"
                >
                  <span className="text-[10px] tracking-[0.18em] text-primary uppercase">
                    {trait_type}
                  </span>
                  <span className={`text-sm font-semibold text-foreground`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Summoning Progress */}
            <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] tracking-[0.2em] text-primary uppercase font-bold">
                  Summoning in Progress...
                </span>
                <span className="text-[12px] text-foreground/30">
                  {progress}% Complete
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Steps */}
              {/* <div className="flex flex-col gap-3">
                {mintSteps.map(({ label, status }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        status === "done"
                          ? "border-primary bg-primary/20"
                          : status === "active"
                          ? "border-primary"
                          : "border-foreground/20"
                      }`}
                    >
                      {status === "done" && (
                        <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {status === "active" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    <span
                      className={`text-xs tracking-wide ${
                        status === "pending"
                          ? "text-foreground/20"
                          : "text-foreground/70"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Mint Button */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  mutation.mutate();
                }}
                disabled={mutation.isPending}
                className={`w-full py-4 rounded-full bg-primary text-neutral font-bold text-sm tracking-widest ${mutation.isPending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 active:scale-95 transition-all cursor-pointer"}`}
              >
                {mutation.isPending ? `MINTING...` : `CONFIRM MINT`}
              </button>
              <p className="text-center text-[9px] tracking-[0.15em] text-foreground uppercase">
                {agent?.gasEstimate}
              </p>
            </div>

            {/* Mint Successful Toast */}
            {/* {confirmed && (
              <div className="flex items-center justify-between bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary text-xs">
                    ✦
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-tertiary tracking-widest uppercase">
                      Mint Successful
                    </p>
                    <p className="text-[10px] text-foreground/30">
                      Agent #8421 is now in your vault.
                    </p>
                  </div>
                </div>
                <button className="text-[9px] tracking-widest text-primary border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition-all cursor-pointer" onClick={() => window.open(mutation.data?.explorerUrl, '_blank')}>
                  VIEW IN EXPLORER
                </button>
              </div>
            )} */}
          </div>
        </section>
      </div>
    </div>
  );
}
