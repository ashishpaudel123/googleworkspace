"use client";

import Image from "next/image";
import { trustedByList } from "@/lib/trustedby";

export default function TrustedBy({ className }: { className?: string }) {
  return (
    <section className={`py-16 px-8 ${className}`}>
      <h2 className="max-w-xl mx-auto text-center text-2xl md:text-md font-light text-text-muted mb-12">
        Trusted by 1,000+ Nepali businesses on their growth journey.{" "}
        <span className="text-accent-pink">अब तपाईंको team तयार छ?</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {trustedByList.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              height={90}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
