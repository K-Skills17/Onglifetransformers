"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

const navLinks = [
  { key: "about", href: "/sobre" },
  { key: "programs", href: "/programas" },
  { key: "impact", href: "/impacto" },
  { key: "stories", href: "/historias" },
  { key: "transparency", href: "/transparencia" },
  { key: "getInvolved", href: "/apoie" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Extract locale from pathname
  const locale = pathname.split("/")[1] || "pt";
  const otherLocale = locale === "pt" ? "en" : "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className={`text-xl font-serif font-bold tracking-tight transition-colors ${
            scrolled ? "text-forest" : "text-cream"
          }`}
        >
          Lifetransformers
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-ink" : "text-cream/90"
              } ${
                pathname.includes(link.href) ? "opacity-100" : "opacity-70"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          {/* Language switcher */}
          <Link
            href={`/${otherLocale}${pathname.replace(`/${locale}`, "")}`}
            className={`text-xs font-semibold uppercase px-3 py-1.5 rounded-full border transition-colors ${
              scrolled
                ? "border-forest/30 text-forest hover:bg-forest/5"
                : "border-cream/30 text-cream hover:bg-cream/10"
            }`}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-ink" : "text-cream"}`}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-cream border-t border-line"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-ink py-2 border-b border-line/50"
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href={`/${otherLocale}${pathname.replace(`/${locale}`, "")}`}
              className="text-sm font-semibold text-forest uppercase py-2"
            >
              {otherLocale === "en" ? "English" : "Portugues"}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
