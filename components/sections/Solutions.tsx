"use client";

import { images } from "@/lib/images";
import BusinessCard from "@/components/ui/businessCard";

const businessSolutions = [
  {
    image: images.enterprises,
    title: "For enterprise",
    description: [
      { text: "Secure collaboration " },
      { text: "tools for enterprise", highlight: true },
      {
        text: " , with premium AI and enterprise-grade security built in for all the ways work is changing.",
      },
    ],
  },
  {
    image: images.smallBusiness,
    title: "For small business",
    description: [
      { text: "Tools for " },
      { text: "small businesses", highlight: true },
      { text: " that help teams and " },
      { text: "individuals", highlight: true },
      {
        text: " with everyday tasks like scheduling appointments and email marketing.",
      },
    ],
  },
  {
    image: images.newBusiness,
    title: "For new business",
    description: [
      { text: "Essentials tools for " },
      { text: "new businesses", highlight: true },
      { text: " and " },
      { text: "startups", highlight: true },
      {
        text: " , including business email domains, online file sharing and storage, and more.",
      },
    ],
  },
];

export default function Solutions({ className }: { className?: string }) {
  return (
    <section className={`py-16 px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">
            Solutions for businesses,
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            साना देखि ठूला सबैका लागि
          </p>
          <p className="text-lg text-text-heading font-semibold">
            No matter the size, Google Workspace ले तपाईंको business
            <br />
            को सबै needs पूरा गर्छ
          </p>
        </div>

        {/* Business cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {businessSolutions.map((solution, index) => (
            <BusinessCard
              key={index}
              image={solution.image}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
