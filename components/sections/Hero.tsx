import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { googleApps } from "@/lib/icons";
import DiscountTicket from "../ui/discountCard";
import { Button } from "../ui/button";
import VideoDemo from "./Video";

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-ui-white items-center text-center py-16 px-4 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-medium text-brand-blue mb-4">
        Google Workspace
      </h1>

      <div className="flex items-center gap-4 mb-8 rounded-xl px-4 py-3 w-fit">
        {googleApps.map((app) => (
          <div
            key={app.alt}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent"
          >
            <Image src={app.src} alt={app.alt} width={24} height={24} />
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-text-heading leading-snug max-w-6xl mb-4">
        <span className="text-brand-blue">किन केही</span> Businesses efficiently
        <span className="text-brand-blue"> चल्छन्</span>, र केही
        <br />
        daily operations मै struggle
        <span className="text-brand-blue"> गर्छन्</span>?
      </h2>

      <p className="text-lg text-text-body max-w-2xl">
        Reason luck, ads वा team size होइन. Reason हो right partner with right
        tools.
      </p>

      <DiscountTicket
        className="mt-12"
        topLabel="DISCOUNT"
        bottomLabel="UP TO"
        value="20%"
      />
      <DiscountTicket
        className="mt-2 rotate-3 mb-12"
        topLabel="After"
        bottomLabel="Discount"
        isPrice
        value="499"
      />

      <p className="text-lg font-semibold text-text-body max-w-2xl mb-8">
        Everything Your Business Needs to Work Smarter. A complete Google
        Workspace setup done right by Nest Nepal.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button
          variant="pink"
          size="lg"
          className="rounded-full px-6 py-3 transition hover:-translate-y-0.5"
        >
          15 min · Free Demo
        </Button>
        <Button
          variant="outline-dark"
          size="lg"
          className="rounded-full px-6 py-3 transition hover:-translate-y-0.5"
        >
          Get a quotation
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
      <VideoDemo
        poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </section>
  );
}
