"use client";

import Image from "next/image";
import { googleApps, icons } from "@/lib/icons";
import ContactSalesButton from "@/components/ui/contactSalesButton";
import { Info, Shield, Settings, Search, Archive } from "lucide-react";

// Feature items with icons
const storageFeatures = [
  { icon: icons.drive, text: "30GB Pooled", highlight: "Storage per user" },
];

const communicateFeatures = [
  { icon: icons.gmail, text: "Secured & Personalized", highlight: "Gmail" },
  { icon: icons.calendar, text: "Always in Track with", highlight: "Schedule" },
  { icon: icons.meet, text: "HD Video Calls", highlight: "(100 Users)" },
  { icon: icons.chat, text: "Gossip Secretly in your", highlight: "Group" },
];

const collaborateFeatures = [
  { icon: icons.docs, text: "Documents with", highlight: "Google Docs" },
  {
    icon: icons.sheets,
    text: "Data Insights with",
    highlight: "Google Sheets",
  },
  { icon: icons.slides, text: "Present with", highlight: "Google Slides" },
  { icon: icons.forms, text: "Surveys, To-dos and", highlight: "Many More" },
];

const controlFeatures = [
  { lucideIcon: Shield, text: "Basic", highlight: "Security & Admin Control" },
  { lucideIcon: Settings, text: "Standard", highlight: "Endpoint Management" },
  { lucideIcon: Search, text: "Smart Search with", highlight: "Workspace" },
  { lucideIcon: Archive, text: "Vault for", highlight: "eDiscovery" },
  {
    icon: icons.drive,
    text: "Backup options for",
    highlight: "Drive and Gmail",
  },
];

type Feature = {
  icon?: { src: typeof icons.gmail.src; alt: string };
  lucideIcon?: React.ComponentType<{ className?: string }>;
  text: string;
  highlight: string;
};

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      {feature.icon ? (
        <Image
          src={feature.icon.src}
          alt={feature.icon.alt}
          width={20}
          height={20}
          className="shrink-0"
        />
      ) : feature.lucideIcon ? (
        <feature.lucideIcon className="w-5 h-5 text-brand-blue shrink-0" />
      ) : null}
      <span className="text-sm text-text-body">
        {feature.text} <span className="font-medium">{feature.highlight}</span>
      </span>
    </div>
  );
}

function FeatureCategory({
  title,
  features,
}: {
  title: string;
  features: Feature[];
}) {
  return (
    <div>
      <h4 className="font-bold text-text-heading mb-2">{title}</h4>
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </div>
  );
}

export default function Pricing({ className }: { className?: string }) {
  return (
    <section
      className={`relative py-16 px-8 bg-ui-white overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl text-center md:text-4xl font-bold text-text-heading mb-4">
          के <span className="text-brand-blue">Google Workspace</span> तपाईंको
          <br />
          business growth <span className="text-brand-blue">को लागि</span> best
          fit हो?
        </h2>
        <p className="text-lg text-center text-text-body mb-6">
          Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई
          <br />
          Elevate र Empower गर्न
        </p>

        <div className="flex items-center text-center gap-4 mb-8 rounded-xl px-4 py-3 w-fit mx-auto">
          {googleApps.map((app) => (
            <div
              key={app.alt}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent"
            >
              <Image src={app.src} alt={app.alt} width={24} height={24} />
            </div>
          ))}
        </div>

        {/* Pricing content */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white py-16">
          {/* Pricing card */}
          <div className="lg:w-1/4 flex flex-col items-center lg:items-start lg:border-r lg:border-ui-border lg:pr-8">
            <h3 className="text-2xl font-medium text-text-heading italic mb-4">
              Starter
            </h3>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm text-text-muted">Rs.</span>
              <span className="text-5xl font-bold text-text-heading">499</span>
              <span className="text-2xl text-accent-pink line-through">
                560
              </span>
            </div>

            <p className="text-sm text-text-muted mb-1">per user / month,</p>
            <p className="text-sm text-text-muted flex items-center gap-1 mb-6">
              1 year commitment
              <Info className="w-4 h-4" />
            </p>

            <ContactSalesButton variant="red" />
          </div>

          {/* Features */}
          <div className="lg:w-3/4 grid md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              <FeatureCategory title="Storage" features={storageFeatures} />
              <FeatureCategory
                title="Communicate"
                features={communicateFeatures}
              />
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <FeatureCategory
                title="Collaborate"
                features={collaborateFeatures}
              />
              <FeatureCategory title="Control" features={controlFeatures} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
