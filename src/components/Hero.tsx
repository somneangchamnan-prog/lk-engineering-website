"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { quoteHref, site } from "@/data/site";
import { BlueprintArt } from "@/components/art/BlueprintArt";
import { StatsGrid } from "@/components/StatsGrid";

const pillars = ["Engineering", "Precision", "Reliability", "Innovation"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Background: real photo if configured, otherwise blueprint artwork */}
      {site.heroImage ? (
        <Image
          src={site.heroImage}
          alt="Engineers reviewing building services on site"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 -z-20 bg-grid-blueprint [background-size:48px_48px]" />
          <div aria-hidden className="absolute -right-24 top-1/2 -z-10 hidden w-[56rem] max-w-[70vw] -translate-y-1/2 text-volt-light opacity-25 md:block">
            <BlueprintArt variant="sld" decorative />
          </div>
        </>
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container-page pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-volt-light"
        >
          {pillars.map((p, i) => (
            <span key={p} className="flex items-center gap-3">
              {p}
              {i < pillars.length - 1 && <span aria-hidden className="h-1 w-1 bg-volt-light" />}
            </span>
          ))}
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl"
        >
          Engineering Better Solutions for Modern Buildings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-steel-200 sm:text-xl"
        >
          Professional Electrical &amp; MEP Engineering Design, Installation and Commissioning Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link href="/services" className="btn-primary">
            Explore Our Services <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <Link href={quoteHref} className="btn-outline-light">Request a Quote</Link>
        </motion.div>

        <div className="mt-16 border-t border-white/15 pt-10 lg:mt-24">
          <StatsGrid />
        </div>
      </div>
    </section>
  );
}
