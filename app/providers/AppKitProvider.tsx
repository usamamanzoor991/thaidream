"use client";

import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { createAppKit } from "@reown/appkit/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import React from "react";
import { network } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter();

// Get projectId
const projectId = process.env.NEXT_PUBLIC_REOWN_KEY;

if (!projectId) {
  throw new Error("NEXT_PUBLIC_REOWN_KEY is not defined");
}

// Create a metadata object
const metadata = {
  name: "Thai Dream Agents",
  description: "Your gateway to Thai Dream Agents.",
  // Use a fallback for SSR since window is not available on the server
  url: typeof window !== "undefined" ? window.location.origin : "https://thaidreamagents.com", 
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const networks = network == "devnet" ? solanaDevnet : network == "testnet" ? solanaTestnet : solana;

// Create modal outside of the component to avoid re-initialization on every render
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [networks],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  enableReconnect: false,
});

const queryClient = new QueryClient();

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return <>
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </>;
}
