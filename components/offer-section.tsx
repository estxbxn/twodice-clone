"use client";

import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon } from "lucide-react";
import { ProductCard } from "./product-card";
import { Button } from "./ui/button";

export function OfferSection() {
  const items: ProductCard[] = [
    { image: "/riot.jpg", accent: "red", title: "Valorant", tag: "Promo", discount: "-5.0%" },
    { image: "/rockstar.jpg", accent: "blue", title: "Rockstar", tag: "Promo", discount: "-2.5%" },
    { image: "/identity-v.jpg", accent: "green", title: "Identity V", tag: "Promo", discount: "-2.5%" },
    { image: "/genshin-impact.jpg", accent: "purple", title: "Genshin Impact", tag: "Promo", discount: "+12.0%" },
    { image: "/mobile-legends.png", accent: "amber", title: "Mobile Legends", tag: "Promo", discount: "+4.5%" },
    { image: "/ragnarok-origin.jpg", accent: "pink", title: "Ragnarok Origin", tag: "Promo", discount: "+2.0%" },
  ];

  return (
    <section className="w-full">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Exclusive Offers</h2>
          <p className="text-muted-foreground text-xs md:text-sm">Don't miss our limited offers. Discover the deals of the moment!</p>
        </div>
        <Button variant="outline">
          View more <ChevronRightIcon className="size-4" />
        </Button>
      </div>
      <Separator className="my-4" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {items.map((item) => (
          <ProductCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}


