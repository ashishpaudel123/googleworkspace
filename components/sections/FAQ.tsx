"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Google Workspace compatible with my current email client?",
    answer:
      "Yes, Google Workspace is compatible with most email clients. You can access Gmail through IMAP or POP protocols, and it works seamlessly with Outlook, Apple Mail, and other popular email applications.",
  },
  {
    question:
      "Can I transfer my current Google Workspace account to Nest Nepal?",
    answer:
      "Absolutely! We can help you transfer your existing Google Workspace account to Nest Nepal. Our team will guide you through the migration process to ensure a smooth transition without any data loss.",
  },
  {
    question: "Are there any fees for transferring a domain to Nest Nepal?",
    answer:
      "No, there are no hidden fees for transferring your domain to Nest Nepal. We provide transparent pricing with no surprise charges during the transfer process.",
  },
  {
    question: "Are there any hidden charges for Nest Nepal Customers?",
    answer:
      "No, Nest Nepal believes in complete transparency. All costs are clearly communicated upfront, and there are no hidden charges. What you see is what you pay.",
  },
  {
    question: "What all does Gsuite productivity suite include?",
    answer:
      "Google Workspace (formerly G Suite) includes Gmail, Google Drive, Google Docs, Sheets, Slides, Google Meet, Google Calendar, Google Chat, and many more productivity tools designed to help your team collaborate efficiently.",
  },
];

export default function FAQ({ className }: { className?: string }) {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-medium text-text-heading text-center border-b border-ui-border pb-16">
          Frequently Asked Questions{" "}
          <span className="text-brand-blue">(FAQs)</span>
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-ui-border py-4"
            >
              <AccordionTrigger className="text-left text-base font-normal text-text-heading hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-muted text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
