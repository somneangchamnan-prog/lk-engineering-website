"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { quoteHref, site } from "@/data/site";
import { serviceGroups } from "@/data/content";
import { BlueprintArt } from "@/components/art/BlueprintArt";
import { GroupIcon } from "@/components/ui/GroupIcon";

const pillars = ["Engineering", "Precision", "Reliability", "Innovation"];
const delivery = ["Survey", "Design", "Install", "Test & Commission"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Background: real photo if configured, otherwise blueprint grid */}
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
        <div aria-hidden className="absolute inset-0 -z-20 bg-grid-blueprint [background-size:48px_48px]" />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container-page grid items-center gap-14 pb-14 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20 lg:pt-28">
        <div>
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
            className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Engineering Better Solutions for Modern Buildings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-steel-200 sm:text-xl"
          >
            Electrical and MEP engineering design, installation, testing and commissioning for commercial,
            industrial and residential buildings in {site.country}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href={quoteHref} className="btn-primary">
              Request a Quote <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="#services" className="btn-outline-light">Explore Our Services</Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            aria-label="Project delivery"
            className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2"
          >
            {delivery.map((d, i) => (
              <li key={d} className="label flex items-center gap-2 !text-[0.62rem] text-steel-300">
                <span className="border border-white/15 px-2.5 py-1.5">{d}</span>
                {i < delivery.length - 1 && <span aria-hidden className="h-px w-4 bg-volt-light/50" />}
              </li>
            ))}
          </motion.ul>
        </div>

        {!site.heroImage && (
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="ticks relative hidden border border-white/15 bg-navy-900/70 p-5 text-volt-light backdrop-blur-sm lg:block"
          >
            <div className="label flex items-center justify-between border-b border-white/10 pb-3 !text-[0.62rem] text-steel-400">
              <span>DWG E-001 · LV Distribution</span>
              <span className="flex items-center gap-2 text-volt-light">
                <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt-light" />
                Single-line
              </span>
            </div>
            <BlueprintArt variant="sld" decorative className="mt-4 aspect-[4/3] w-full" />
            <figcaption className="label mt-3 grid grid-cols-3 gap-px border-t border-white/10 pt-3 !text-[0.6rem] text-steel-400">
              <span>MSB → SMDB → DB</span>
              <span className="text-center">ATS / GEN</span>
              <span className="text-right">Earthing</span>
            </figcaption>
          </motion.figure>
        )}
      </div>

      <div className="border-t border-white/10 bg-navy-950/60">
        <ul className="container-page grid grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((g, i) => (
            <li
              key={g.id}
              className={`border-white/10 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <Link
                href={`#${g.id}`}
                className="group flex h-full items-center gap-3 px-4 py-5 transition-colors hover:bg-white/5 sm:gap-4 sm:px-6 lg:py-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-volt/40 text-volt-light transition-colors group-hover:bg-volt group-hover:text-white">
                  <GroupIcon name={g.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="label block !text-[0.58rem] text-steel-400">{g.code}</span>
                  <span className="mt-0.5 block text-sm font-semibold leading-snug text-white">{g.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
