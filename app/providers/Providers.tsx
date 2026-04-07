"use client";
import { ThemeProvider } from "./ThemeProvider";
import { AppKitProvider } from "./AppKitProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppKitProvider>
        {children}
      </AppKitProvider>
    </ThemeProvider>
  );
}