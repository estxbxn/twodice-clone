"use client";

import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl border">
        <div className="aspect-[16/6] w-full relative">
          <Image
            src="/riot.jpg"
            alt="Riot Games Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
