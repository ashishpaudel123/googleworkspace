"use client";

import Image from "next/image";
import { images } from "@/lib/images";

const features = [
  {
    title: "Your files, all in one place",
    description: [
      { text: "Edit and organize " },
      { text: "Google Docs", highlight: true },
      { text: ", " },
      { text: "Sheets", highlight: true },
      { text: ", " },
      { text: "Slides", highlight: true },
      {
        text: ", Microsoft Office files, and PDFs in real-time. Plus, access over 100 other file types!",
      },
    ],
    expanded: true,
  },
  { title: "Annotate PDFs" },
  { title: "AI-powered search" },
  { title: "Activity view" },
];

export default function DriveFeatures({ className }: { className?: string }) {
  return (
    <section className={`relative py-16 px-8 overflow-hidden ${className}`}>
      {/* Gradient background blobs */}
      <div className="absolute inset-y-0 -left-40 w-80 h-full bg-brand-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-y-0 -right-40 w-80 h-full bg-accent-pink/10 rounded-full blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Brands using Google Workspace to
            <br />
            succeed online, <span className="text-brand-blue">कसरी?</span>
          </h2>
          <p className="text-text-body">
            कसरी teams Google Workspace सँग productivity
            <br />
            बढाउँछन् र समय बचत गर्छन्
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Google Workspace Products Image */}
          <div className="shrink-0">
            <Image
              src={images.googleWorkspaceProducts.src}
              alt={images.googleWorkspaceProducts.alt}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Right - Features */}
          <div className="flex-1 max-w-lg mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`border-l-2 ${
                  feature.expanded ? "border-brand-blue" : "border-ui-border"
                } pl-4 pb-3`}
              >
                <h3
                  className={`font-semibold text-xl ${
                    feature.expanded ? "text-text-heading" : "text-text-muted"
                  }`}
                >
                  {feature.title}
                </h3>
                {feature.expanded && feature.description && (
                  <p className="text-sm text-text-muted mt-2">
                    {feature.description.map((part, i) =>
                      part.highlight ? (
                        <span key={i} className="text-brand-blue">
                          {part.text}
                        </span>
                      ) : (
                        <span key={i}>{part.text}</span>
                      ),
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
