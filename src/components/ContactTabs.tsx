"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { QuoteForm } from "@/components/forms/QuoteForm";

type Tab = "quote" | "contact";

/** Switches between the quote and enquiry forms; honours the #quote / #contact hash. */
export function ContactTabs() {
  const [tab, setTab] = useState<Tab>("quote");

  useEffect(() => {
    const read = () => {
      if (window.location.hash === "#contact-form") setTab("contact");
      else if (window.location.hash === "#quote") setTab("quote");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const tabs: { id: Tab; label: string }[] = [
    { id: "quote", label: "Request a Quote" },
    { id: "contact", label: "General Enquiry" },
  ];

  return (
    <div id="quote" className="scroll-mt-24">
      <div role="tablist" aria-label="Choose a form" className="flex border-b border-steel-200">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`-mb-px border-b-2 px-5 py-3 text-sm font-semibold transition-colors ${
              tab === t.id ? "border-volt text-volt-dark" : "border-transparent text-steel-500 hover:text-navy-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-8">
        <div role="tabpanel" id="panel-quote" aria-labelledby="tab-quote" hidden={tab !== "quote"}>
          <QuoteForm />
        </div>
        <div role="tabpanel" id="panel-contact" aria-labelledby="tab-contact" hidden={tab !== "contact"}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
