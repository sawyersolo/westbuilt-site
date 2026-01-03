"use client";
import { ReactNode, useEffect } from "react";

export default function Lightbox({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

return (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
    <div className="relative w-full max-w-5xl rounded-3xl bg-stonewash-50 shadow-soft">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-ink-900 shadow hover:bg-white"
      >
        Close
      </button>

      {/* Content */}
      <div className="relative p-6 pt-14">
        {children}
      </div>

    </div>
  </div>
);

}
