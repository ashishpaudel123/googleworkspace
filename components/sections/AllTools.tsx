"use client";

import Image from "next/image";
import { icons } from "@/lib/icons";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const features = [
  {
    title: "Premium AI built-in",
    description:
      "Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.",
  },
  {
    title: "Tools born in the Cloud",
    description:
      "Collaborate in real time, from any device, across tools that are always up-to-date.",
  },
  {
    title: "Enterprise-grade security",
    description:
      "Protect your emails, files, and meetings with AI-powered security and compliance controls.",
  },
];

const workspaceApps = [
  { ...icons.gmail, label: "Gmail" },
  { ...icons.drive, label: "Drive" },
  { ...icons.meet, label: "Meet" },
  { ...icons.calendar, label: "Calendar" },
  { ...icons.chat, label: "Chat" },
  { ...icons.gemini, label: "Gemini" },
  { ...icons.docs, label: "Docs" },
  { ...icons.sheets, label: "Sheets" },
  { ...icons.slides, label: "Slides" },
  { ...icons.vids, label: "Vids" },
  { ...icons.keep, label: "Keep" },
  { ...icons.sites, label: "Sites" },
  { ...icons.forms, label: "Forms" },
  { ...icons.tasks, label: "Tasks" },
  { ...icons.notebooklm, label: "NotebookLM" },
  { ...icons.appsheet, label: "AppSheet" },
];

export default function AllTools({ className }: { className?: string }) {
  return (
    <section className={`py-16 px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">
            सबै Tools <span className="text-brand-blue">एउटै</span> Platform मा
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-brand-blue">
            Google Workspace
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-text-body mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted font-extralight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="my-8 text-center">
          <Button
            className="rounded-full transition hover:-translate-y-0.5"
            variant={"outline-dark"}
            size={"lg"}
          >
            Get a quotation <ArrowUpRight className="ml-2" />
          </Button>
        </div>
      </div>
      {/* Google Workspace includes */}
      <div className="text-center mt-16">
        <h3 className="text-xl font-bold text-text-heading mb-8">
          Google Workspace includes:
        </h3>

        <div className="flex flex-wrap justify-center items-start gap-6">
          {workspaceApps.map((app) => (
            <div key={app.alt} className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent">
                <Image src={app.src} alt={app.alt} width={24} height={24} />
              </div>
              <span className="text-xs text-text-muted">{app.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
