import Image from "next/image";
import { icons } from "@/lib/icons";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#2952e3] to-[#1540c7] overflow-hidden">
      {/* Background watermark text */}
      <div className="absolute inset-0 flex items-center md:justify-center justify-end pointer-events-none select-none">
        <span
          className="text-[28vw] md:text-[18vw] font-bold tracking-[0.15em] whitespace-nowrap md:[writing-mode:horizontal-tb] [writing-mode:vertical-rl]"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            WebkitTextFillColor: "transparent",
          }}
        >
          NEST NEPAL
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 md:mb-32">
          <Link href="/" className="block">
            <Image
              src={icons.nestNepal.src}
              alt={icons.nestNepal.alt}
              width={160}
              height={36}
              className="md:w-45"
            />
          </Link>

          <div className="text-white/90 md:text-right space-y-1 order-last md:order-0 hidden md:block">
            <p className="font-medium">Nepal</p>
            <p className="text-sm">Call us : +977 986-160-1174</p>
            <p className="text-sm">Kupondole, Lalitpur, Nepal</p>
            <a
              href="mailto:support@nestsms.com"
              className="text-sm hover:text-white transition-colors"
            >
              support@nestsms.com
            </a>
          </div>
        </div>

        {/* Navigation section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-4 md:pt-8 md:border-t md:border-white/10">
          <h3 className="text-white font-semibold text-lg md:text-base md:font-medium">
            Google Workspace
          </h3>

          <nav className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-white/80 md:text-white/90 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Why google workspace?
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors md:hidden"
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Get A Quotation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>

        {/* Support section - mobile only */}
        <div className="mt-8 md:hidden">
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <div className="text-white/80 text-sm space-y-2">
            <p>Call us : +977 986-160-1174</p>
            <p>Kupondole, Lalitpur, Nepal</p>
            <a
              href="mailto:support@nestsms.com"
              className="block hover:text-white transition-colors"
            >
              support@nestsms.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
