"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Applications", href: "#applications" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Services", href: "#services" },
  { label: "Why Novem", href: "#why" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F4EF]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Logo />

        <DesktopNav />

        <div className="hidden lg:block">
          <Button className="rounded-full bg-[#B8794B] hover:bg-[#9f683f] px-7">
            Contact
          </Button>
        </div>

        <MobileNav />
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Novem"
        width={180}
        height={50}
        priority
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden lg:flex gap-8">
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative text-sm font-medium transition hover:text-[#B8794B] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#B8794B] after:transition-all hover:after:w-full"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#EFE4D8]">
          <Menu className="h-6 w-6 text-[#A86C42]" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full bg-[#F8F4EF] p-0"
        >
          <div className="flex h-full flex-col">

            {/* Logo */}
            <div className="flex items-center justify-between border-b border-[#E7D8C9] px-6 py-5">
              <Image
                src="/logo.png"
                alt="Novem"
                width={150}
                height={40}
              />
            </div>

            {/* Links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-medium text-[#3A302A] transition hover:text-[#B8794B]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom Button */}
            <div className="border-t border-[#E7D8C9] p-6">
              <Button className="w-full">
                Contact
              </Button>
            </div>

          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
