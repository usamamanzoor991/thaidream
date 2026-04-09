"use client";

import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  transactionId?: string;
  explorerUrl?: string;
  openModal: (data: { transactionId?: string; explorerUrl?: string }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  transactionId: undefined,
  explorerUrl: undefined,
  openModal: ({ transactionId, explorerUrl }) =>
    set({
      isOpen: true,
      transactionId,
      explorerUrl,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      transactionId: undefined,
      explorerUrl: undefined,
    }),
}));
