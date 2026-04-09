"use client";

import { useAgentNFTs } from "@/app/hooks/useNFTS";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

const tabs = ["MY VAULT", "LISTINGS", "HISTORY"];

export default function VaultPage() {
  const [activeTab, setActiveTab] = useState("MY VAULT");
  const { publicKey } = useWallet();
  const address = publicKey?.toBase58();
  const { data: nfts, isLoading: loading , isError } = useAgentNFTs(address!);

  return (
    <div className="pt-22 pb-8 w-full flex flex-col items-center justify-center">
      <div className="container flex flex-col px-6">

        {/* ── Profile Header ── */}
        <div className="z-1 bg-background flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between mb-6">
          {/* Left: Avatar + Identity */}
          <div className="sm:w-auto w-full flex items-center sm:justify-start justify-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-foreground/10 border border-foreground/10 overflow-hidden flex-shrink-0">
              <img
                src="/Mythical-Creature-2.png"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-foreground font-bold text-lg leading-tight">
                Master Weaver
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-foreground/40 tracking-wide">
                  {address}
                </span>
                <button className="text-foreground/30 hover:text-primary transition-colors">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <rect x="4" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 4.5V10a1 1 0 001 1h5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center bg-foreground/5 border border-foreground/10 rounded-xl px-5 py-2.5">
              <span className="text-[9px] tracking-[0.15em] text-foreground/40 uppercase mb-1">
                Total NFTs
              </span>
              <span className="text-foreground font-bold text-lg leading-none">{nfts?.length || 0}</span>
            </div>
            <div className="flex flex-col items-center bg-primary/10 border border-primary/20 rounded-xl px-5 py-2.5">
              <span className="text-[9px] tracking-[0.15em] text-primary/60 uppercase mb-1">
                Dream Points
              </span>
              <span className="text-primary font-bold text-lg leading-none">2,840</span>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center gap-6 border-b border-foreground/10 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 text-[11px] tracking-widest font-semibold transition-all cursor-pointer border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/30 hover:text-foreground/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── NFT Grid ── */}
        {
          loading ? (
            <div className="flex items-center justify-center w-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-l-2 border-primary"></div>
            </div>
          ) : nfts?.length === 0 ? (
            <div className="flex items-center justify-center w-full">
              <span className="text-foreground">No NFTs found</span>
            </div>
          ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {
            nfts?.map((agent:any,idx:number) => (
              <div
                key={idx}
                className="relative bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all cursor-pointer group"
                onClick={() => window.open(`https://explorer.solana.com/address/${agent.address}?cluster=devnet`, "_blank")}
              >
                {/* Style badge top-right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[9px] tracking-widest text-foreground/60 bg-background/60 backdrop-blur-sm border border-foreground/10 rounded-full px-2 py-0.5">
                    {/* {agent.style} */}
                  </span>
                </div>

                {/* Live badge top-left */}
                {agent.live && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-background/60 backdrop-blur-sm border border-foreground/10 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[9px] tracking-widest text-green-400">LIVE</span>
                  </div>
                )}

                {/* Image */}
                <div className="w-full aspect-square bg-gradient-to-b from-foreground/10 to-foreground/5 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Row */}
                <div className="p-3 flex items-end justify-between">
                  <div>
                    <h3 className="text-foreground text-sm font-semibold leading-tight mb-1">
                      {agent.name}
                    </h3>
                    <p className="text-[9px] tracking-[0.15em] text-foreground/30 uppercase">
                      {agent.description}
                    </p>
                    {/* <p className="text-foreground/70 text-sm font-bold">
                      {agent.rarityScore}
                    </p> */}
                  </div>

                  {/* Share button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); }} 
                    className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/40 hover:text-primary text-foreground/30 transition-all cursor-pointer flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                      <circle cx="11" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="11" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="3" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M4.3 6.2L9.7 3.3M4.3 7.8l5.4 2.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Attributes Grid */}
                {agent.attributes && agent.attributes.length > 0 && (
                  <div className="px-3 pb-3">
                    <div className="grid grid-cols-2 gap-1.5">
                      {agent.attributes.map((attr: { trait_type: string; value: string | number }, i: number) => (
                        <div 
                          key={i} 
                          className={`bg-foreground/5 border border-foreground/10 rounded-md p-1.5 flex flex-col justify-center items-center text-center hover:border-primary/30 hover:bg-foreground/10 transition-colors ${
                            attr.trait_type.toLowerCase() === 'tagline' ? 'col-span-2' : ''
                          }`}
                        >
                          <span className="text-[8px] uppercase tracking-widest text-primary/70 mb-0.5">
                            {attr.trait_type}
                          </span>
                          <span className="text-[10px] font-medium text-foreground/90 leading-tight line-clamp-2" title={String(attr.value)}>
                            {attr.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          }
        </div>
        )
      }

      </div>
    </div>
  );
}