"use client"

import Link from "next/link"
import { useState } from "react"

import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
} from "@/components/ui/resizable-navbar"
import { cn } from "@/lib/utils"

// Studio Services hub + 3 dropdown pages from voiceline-master-website-content.md
// (Studio Rental lives on the /services hub and has its own page, but stays out
// of the dropdown to keep the hover menu to 3 clean options)
const serviceLinks = [
  {
    title: "Voice Over",
    href: "/services/voice-over",
    description:
      "Ads, e-learning, IVR, narration, and dubbing with pro voice artists.",
  },
  {
    title: "Music Production, Mixing & Mastering",
    href: "/services/music-production",
    description:
      "Original scores, jingles, brand BGMs, and broadcast-ready mixes.",
  },
  {
    title: "Podcast Production",
    href: "/services/podcast-production",
    description:
      "Recording, editing, and full post, including video for episodes.",
  },
] as const

const topLinks = [
  { name: "Our Work", link: "#spaces" },
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
          className="relative z-20 mr-4 flex items-center px-2 py-1"
        >
          <Logo accent="#000" className="h-8 w-auto" aria-hidden="true" />
        </Link>
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <NavigationMenu className="pointer-events-auto flex-none">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-neutral-600 hover:text-zinc-800 data-popup-open:bg-gray-100 data-open:bg-gray-100">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  {serviceLinks.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink
                        render={<Link href={service.href} />}
                      >
                        <span className="flex flex-col gap-1">
                          <span className="leading-none font-medium">
                            {service.title}
                          </span>
                          <span className="line-clamp-2 text-muted-foreground">
                            {service.description}
                          </span>
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li>
                    <NavigationMenuLink
                      render={<Link href="/services" />}
                      className="mt-1 font-medium"
                    >
                      View all Studio Services →
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {topLinks.map((item) => (
              <NavigationMenuItem key={item.link}>
                <NavigationMenuLink
                  render={<Link href={item.link} />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-sm font-medium text-neutral-600 hover:text-zinc-800"
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          </NavigationMenu>
        </div>
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
            className="flex items-center px-2 py-1"
          >
            <Logo accent="#000" className="h-8 w-auto" aria-hidden="true" />
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
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative font-medium text-neutral-800 dark:text-neutral-100"
          >
            Services
          </Link>
          <div className="flex w-full flex-col gap-3 pl-3">
            {serviceLinks.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-sm text-neutral-600 dark:text-neutral-300"
              >
                {service.title}
              </Link>
            ))}
          </div>
          {topLinks.map((item) => (
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
