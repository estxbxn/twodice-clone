"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="mt-4 w-full">
      <div className="rounded-xl md:rounded-2xl bg-[linear-gradient(90deg,theme(colors.fuchsia.500),theme(colors.indigo.400),theme(colors.cyan.400),white,theme(colors.cyan.400),theme(colors.indigo.400),theme(colors.fuchsia.500))]">
        <div className="text-xs md:text-sm text-black/90 dark:text-black px-3 md:px-4 py-4 flex items-center justify-between gap-3 bg-white/70 rounded-[10px] md:rounded-[14px] backdrop-blur">
          <p className="font-semibold">
            We will be at GG Gamers Asia 2024! We look forward to seeing you in 2024 from 17 - 20 October 2024 at Singapore at Marina Convention Centre.
          </p>
          <button
            onClick={() => setDismissed(true)}
          >
            <XIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}


