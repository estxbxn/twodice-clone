"use client";

import Image from "next/image";

type Accent =
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "emerald"
  | "purple"
  | "pink"
  | "red"
  | "orange"
  | "amber";

export type ProductCard = {
  image: string;
  title: string;
  tag?: string;
  discount?: string;
  variant?: "hanger" | "flat";
  accent?: Accent;
};

function accentToClasses(accent: Accent): { card: string; emblem: string; text: string } {
  switch (accent) {
    case "red":
      return { card: "from-red-600/70 to-red-900/70", emblem: "from-red-200 to-red-400", text: "text-red-300" };
    case "orange":
      return { card: "from-orange-500/70 to-orange-800/70", emblem: "from-orange-200 to-orange-400", text: "text-orange-300" };
    case "amber":
      return { card: "from-amber-500/70 to-amber-800/70", emblem: "from-amber-200 to-amber-400", text: "text-amber-300" };
    case "green":
      return { card: "from-green-600/70 to-green-900/70", emblem: "from-green-200 to-green-400", text: "text-green-300" };
    case "emerald":
      return { card: "from-emerald-600/70 to-emerald-900/70", emblem: "from-emerald-200 to-emerald-400", text: "text-emerald-300" };
    case "teal":
      return { card: "from-teal-600/70 to-teal-900/70", emblem: "from-teal-200 to-teal-400", text: "text-teal-300" };
    case "cyan":
      return { card: "from-cyan-600/70 to-cyan-900/70", emblem: "from-cyan-200 to-cyan-400", text: "text-cyan-300" };
    case "blue":
      return { card: "from-blue-600/70 to-blue-900/70", emblem: "from-blue-200 to-blue-400", text: "text-blue-300" };
    case "purple":
      return { card: "from-purple-600/70 to-purple-900/70", emblem: "from-purple-200 to-purple-400", text: "text-purple-300" };
    case "pink":
      return { card: "from-pink-600/70 to-pink-900/70", emblem: "from-pink-200 to-pink-400", text: "text-pink-300" };
    case "indigo":
    default:
      return { card: "from-indigo-600/70 to-indigo-900/70", emblem: "from-indigo-200 to-indigo-400", text: "text-indigo-300" };
  }
}

export function ProductCard({
  image,
  title,
  tag = "Promo",
  discount = "-7.5%",
  variant = "hanger",
  accent = "indigo",
}: ProductCard) {
  const styles = accentToClasses(accent);

  if (variant === "flat") {
    return (
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className={`relative rounded-2xl bg-gradient-to-b ${styles.card} p-4 pt-8 pb-3`}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-7 rounded-full bg-black/70 border border-white/15" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-12 rounded-b-2xl bg-black/60 border-x border-t border-white/15" />

          <div className="relative overflow-hidden aspect-square w-full rounded-xl bg-black/80 grid place-items-center shadow-inner">
            <Image src={image} alt={title} fill className="w-full h-full object-cover" />
          </div>

          <div className="mt-3 flex items-center justify-between text-sm border-t border-white/10 pt-3 px-1">
            <span className="text-muted-foreground">{tag}</span>
            <span className={`font-medium ${styles.text}`}>{discount}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/80 p-4 pt-8 pb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-7 rounded-full bg-[#0f1115] border border-white/10 shadow" />
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-11 rounded-b-2xl bg-slate-900/80 border-x border-t border-white/10" />

      <div className="relative overflow-hidden aspect-square w-full rounded-xl bg-black/80 grid place-items-center shadow-inner">
        <Image src={image} alt={title} fill className="w-full h-full object-cover" />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm border-t border-white/10 pt-3 px-1">
        <span className="text-muted-foreground">{tag}</span>
        <span className={`font-medium ${styles.text}`}>{discount}</span>
      </div>
    </div>
  );
}


