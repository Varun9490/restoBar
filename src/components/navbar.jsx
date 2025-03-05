// components/navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-[#0f0a05] backdrop-blur-md z-50 border-b border-amber-900/20 rounded-full"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-cormorant font-semibold text-amber-100"
          >
            RestoBar
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/" currentPath={pathname}>
              Home
            </NavLink>
            <NavLink href="/menu" currentPath={pathname}>
              Menu
            </NavLink>
            <NavLink href="/blog" currentPath={pathname}>
              Blog
            </NavLink>
            <NavLink href="/events" currentPath={pathname}>
              Events
            </NavLink>
            <NavLink href="/gallery" currentPath={pathname}>
              Gallery
            </NavLink>
            <NavLink href="/reservations" currentPath={pathname}>
              Reservations
            </NavLink>
            <NavLink href="/contact" currentPath={pathname}>
              Contact
            </NavLink>
          </div>

          <Button
            variant="ghost"
            className="md:hidden text-amber-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </Button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden bg-white/5 backdrop-blur-lg p-4 space-y-4 rounded-full"
          >
            <MobileNavLink href="/" currentPath={pathname}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/menu" currentPath={pathname}>
              Menu
            </MobileNavLink>
            <MobileNavLink href="/blog" currentPath={pathname}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="/events" currentPath={pathname}>
              Events
            </MobileNavLink>
            <MobileNavLink href="/gallery" currentPath={pathname}>
              Gallery
            </MobileNavLink>
            <MobileNavLink href="/reservations" currentPath={pathname}>
              Reservations
            </MobileNavLink>
            <MobileNavLink href="/contact" currentPath={pathname}>
              Contact
            </MobileNavLink>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, currentPath }) {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`text-amber-100/80 hover:text-amber-50 transition-colors font-medium relative group ${
        isActive ? "text-amber-50" : ""
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-100 transition-all group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({ href, children, currentPath }) {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`block py-2 ${
        isActive ? "text-amber-50" : "text-amber-100/80"
      } hover:text-amber-50`}
    >
      {children}
    </Link>
  );
}
