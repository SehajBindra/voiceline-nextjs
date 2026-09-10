"use client"

import Link from "next/link"
import { useState } from "react"

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
} from "@/components/ui/resizable-navbar"

// Taken from the former hero header in
// components/sections/hero-section-v2.tsx so the global navbar
// stays in sync with the landing anchors.
const navItems = [
  { name: "Studio", link: "#studio" },
  { name: "Services", link: "#services" },
  { name: "Spaces", link: "#spaces" },
  { name: "Training", link: "/training" },
] as const

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-0 sm:pt-3">
      {/* Desktop Navigation */}
      <NavBody>
        <Link
          href="/"
          aria-label="Voiceline home"
          className="relative z-20 mr-4 flex items-center px-2 py-1 text-xl font-bold tracking-tight text-foreground dark:text-foreground"
        >
          Voiceline
        </Link>
        <NavItems items={[...navItems]} />
        <div className="relative z-20 flex items-center gap-4">
          <NavbarButton
            href="#contact"
            variant="gradient"
            className="rounded-sm from-blue-400 to-blue-600 hover:from-slate-500 hover:to-slate-800"
          >
            Book a session
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            aria-label="Voiceline home"
            className="flex items-center px-2 py-1 text-xl font-bold tracking-tight text-[#1c1915] dark:text-white"
          >
            Voiceline
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="gradient"
              className="w-full rounded-sm from-blue-400 to-blue-600"
            >
              Book a session
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
