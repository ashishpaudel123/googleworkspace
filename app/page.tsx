import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Pricing from "@/components/sections/Pricing";
import AllTools from "@/components/sections/AllTools";
import Solutions from "@/components/sections/Solutions";
import DriveFeatures from "@/components/sections/DriveFeatures";
import FAQ from "@/components/sections/FAQ";
import ContactSales from "@/components/sections/ContactSales";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <TrustedBy />
        <Pricing />
        <AllTools />
        <Solutions />
        <DriveFeatures />
        <FAQ />
        <ContactSales />
        <Footer />
      </div>
    </>
  );
}
