// minting/page.tsx
import { Suspense } from "react";
import MintingPage from "./MintingPage"; // move your current code here

export default function Page() {
  return (
    <Suspense fallback={<MintingFallback />}>
      <MintingPage />
    </Suspense>
  );
}

function MintingFallback() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <p className="text-foreground/30 text-sm tracking-widest">Summoning agent...</p>
    </div>
  );
}