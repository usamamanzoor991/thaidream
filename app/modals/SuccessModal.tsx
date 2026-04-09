"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { useModalStore } from "../zustand/store";

interface ModalData {
  transactionId?: string;
  explorerUrl?: string;
}

const SuccessModal = () => {
  const { transactionId, explorerUrl, closeModal, isOpen } = useModalStore();
  const onClose = () => closeModal();
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
if (!isOpen) return null;
  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[380px] rounded-2xl bg-white p-6 shadow-xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <X className="size-6"/>
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl">
            {/* <Check className="size-10"/> */}

            <img className="size-14" src="/download.gif"/>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-xl font-semibold">
          Mint Successful
        </h2>

        {/* Message */}
        <p className="mt-2 text-center text-primary font-semibold text-sm">
          Your NFT has been minted successfully.
        </p>

        {/* Actions */}
        <div className="mt-5 flex flex-col gap-3">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="w-full text-center bg-primary/70 text-white py-2 text-[15px] rounded-3xl font-semibold hover:bg-primary/90 transform hover:scale-105 duration-300 transition"
          >
            Go to Dashboard
          </Link>

          {/* Explorer */}
          <button
            className="text-[15px] font-semibold tracking-widest text-white border bg-background rounded-full px-3 py-2 transform hover:scale-105 duration-300 transition-all cursor-pointer"
            onClick={() => window.open(explorerUrl, '_blank')}
          >
            View In Explorer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
