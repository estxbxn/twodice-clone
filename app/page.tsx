"use client";
import { AnnouncementBar } from "../components/announcement-bar";
import { Navbar } from "../components/navbar";
import { HeroBanner } from "../components/hero-banner";
import { OfferSection } from "../components/offer-section";
import { ProductsSection } from "../components/products-section";
import { Footer } from "../components/footer";
import { ZoomControls } from "../components/zoom-controls";
import { SourceButton } from "@/components/source-button";

export default function Home() {
  return (
    <div className="min-h-[100svh] w-full bg-background">
      <div className="mx-auto max-w-6xl px-3 space-y-4 md:space-y-6">
        <AnnouncementBar />
        <Navbar />
        <HeroBanner />
        <OfferSection />
        <ProductsSection />
        <Footer />
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex items-center flex-row gap-2">
        <ZoomControls />
        <SourceButton url="https://github.com/estxbxn/twodice-clone" />
      </div>
    </div>
  );
}
