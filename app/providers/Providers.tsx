"use client";
import { ThemeProvider } from "./ThemeProvider";
import WalletAdapterProvider from "./WalletAdapterProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <WalletAdapterProvider>
          {children}
        </WalletAdapterProvider>
    </ThemeProvider>
  );
}