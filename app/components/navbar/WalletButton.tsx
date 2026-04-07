"use client";

import {
  useAppKit,
  useAppKitAccount,
  useAppKitBalance,
} from "@reown/appkit/react";

export default function WalletButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const balance = useAppKitBalance();

  const shortenAddress = (addr?: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  const getBalanceText = (): string | null => {
    if (!balance) return null;

    if (typeof balance === "string") return balance;

    if (typeof balance === "number") return String(balance);

    if (typeof balance === "object") {
      const b = balance as Record<string, unknown>;

      if (typeof b.formatted === "string") return b.formatted;
      if (typeof b.balance === "string") return b.balance;
      if (typeof b.value === "string") return b.value;
    }

    return null;
  };

  const balanceText = getBalanceText();

  return (
    <button
      onClick={() => open()}
      className="flex items-center gap-2 bg-primary text-white font-semibold px-3 py-3 rounded-xl
                 hover:scale-105 active:scale-95 transition-all duration-200 text-sm
                 shadow-md hover:shadow-lg cursor-pointer"
    >
      {isConnected ? (
        <div className="flex flex-col leading-tight text-left">
          <span>{shortenAddress(address)}</span>

          {balanceText && (
            <span className="text-[10px] opacity-70">{balanceText} SOL</span>
          )}
        </div>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
}
