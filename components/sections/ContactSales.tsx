"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import ContactSalesButton from "../ui/contactSalesButton";
import { googleApps } from "@/lib/icons";

export default function ContactSales({ className }: { className?: string }) {
  return (
    <section className={`py-16 px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#F2F2F28F] rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="flex-1 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8 rounded-xl px-4 py-3 w-fit">
                {googleApps.map((app) => (
                  <div
                    key={app.alt}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent"
                  >
                    <Image src={app.src} alt={app.alt} width={30} height={30} />
                  </div>
                ))}
              </div>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-4">
                Prefer to talk to sales directly?
              </h2>

              {/* Description */}
              <p className="text-text-body font-normal mb-8 max-w-md">
                तपाईंको company को unique requirements अनुसार
                <br />
                तयार गरिएको solution सँग efficiency र collaboration
                <br />
                maximize गर्नुहोस्
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-6 flex-wrap">
                <ContactSalesButton text="Message On WhatsApp" variant="red" />

                <div className="flex items-center gap-2">
                  <div className="w-px h-8 bg-ui-border" />
                  <span className="text-text-heading font-light ml-4">
                    Call: +977 9864333517
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:w-100 h-75 lg:h-auto">
              <Image
                src={images.rainbowBg.src}
                alt={images.rainbowBg.alt}
                fill
                className="object-cover"
              />
              <Image
                src={images.women.src}
                alt={images.women.alt}
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
