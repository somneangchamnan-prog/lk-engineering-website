"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import { navLinks, quoteHref, site, isPlaceholder } from "@/data/site";
import { serviceGroups } from "@/data/content";
import { Logo } from "@/components/ui/Logo";

function TopBar() {
  const weekday = site.hours[0];
  return (
    <div className="hidden border-b border-white/10 bg-navy-950 text-steel-300 md:block">
      <div className="container-page flex h-9 items-center justify-between gap-6 text-xs">
        <p className="label !text-[0.62rem] text-steel-400">
          Electrical &amp; MEP Engineering · {site.country}
        </p>
        <ul className="flex items-center gap-6">
          {!isPlaceholder(site.phone) && (
            <li>
              <a href={`tel:${site.phone.replace(/[\s()]/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
                <Phone aria-hidden className="h-3.5 w-3.5 text-volt-light" />
                {site.phone}
              </a>
            </li>
          )}
          {!isPlaceholder(site.email) && (
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail aria-hidden className="h-3.5 w-3.5 text-volt-light" />
                {site.email}
              </a>
            </li>
          )}
          <li className="hidden items-center gap-2 lg:inline-flex">
            <Clock aria-hidden className="h-3.5 w-3.5 text-volt-light" />
            {weekday.days}, {weekday.time}
          </li>
        </ul>
      </div>
    </div>
  );
}

function ServicesMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
        className={`relative inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors hover:text-white ${
          active ? "text-white" : "text-steel-300"
        }`}
      >
        Services
        <ChevronDown aria-hidden className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        {active && <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-volt" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="services-menu"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
          >
            <div className="ticks border border-white/10 bg-navy-900 p-2 text-volt-light shadow-2xl shadow-black/40">
              <ul className="grid grid-cols-2 gap-px bg-white/5">
                {serviceGroups.map((g) => (
                  <li key={g.id} className="bg-navy-900">
                    <Link
                      href={`/#${g.id}`}
                      onClick={() => setOpen(false)}
                      className="block p-4 transition-colors hover:bg-navy-800"
                    >
                      <span className="label !text-[0.6rem] text-volt-light">{g.code}</span>
                      <span className="mt-1.5 block text-sm font-semibold text-white">{g.title}</span>
                      <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-steel-400">{g.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="label mt-2 flex items-center justify-between px-4 py-3 text-steel-300 hover:text-white"
              >
                View all services <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? "border-white/10 bg-navy-950/95 backdrop-blur" : "border-white/5 bg-navy-950"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Logo tone="dark" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) =>
                l.href === "/services" ? (
                  <ServicesMenu key={l.href} active={isActive(l.href)} />
                ) : (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`relative block px-3.5 py-2 text-sm font-medium transition-colors hover:text-white ${
                        isActive(l.href) ? "text-white" : "text-steel-300"
                      }`}
                    >
                      {l.label}
                      {isActive(l.href) && (
                        <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-volt" />
                      )}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href={quoteHref} className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/10 bg-navy-950 lg:hidden"
            >
              <ul className="container-page py-4">
                {navLinks.map((l) => (
                  <li key={l.href} className="border-b border-white/10 last:border-0">
                    <Link
                      href={l.href}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`flex items-center justify-between py-4 text-lg font-semibold ${
                        isActive(l.href) ? "text-volt-light" : "text-white"
                      }`}
                    >
                      {l.label}
                    </Link>
                    {l.href === "/services" && (
                      <ul className="-mt-1 grid grid-cols-1 gap-1 pb-4 sm:grid-cols-2">
                        {serviceGroups.map((g) => (
                          <li key={g.id}>
                            <Link
                              href={`/#${g.id}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 py-1.5 text-sm text-steel-300 hover:text-white"
                            >
                              <span className="label !text-[0.6rem] text-volt-light">{g.code}</span>
                              {g.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="space-y-3 pt-4">
                  <Link href={quoteHref} className="btn-primary w-full">
                    Request a Quote
                  </Link>
                  {!isPlaceholder(site.phone) && (
                    <a
                      href={`tel:${site.phone.replace(/[\s()]/g, "")}`}
                      className="btn-outline-light w-full"
                    >
                      <Phone aria-hidden className="h-4 w-4" /> {site.phone}
                    </a>
                  )}
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
