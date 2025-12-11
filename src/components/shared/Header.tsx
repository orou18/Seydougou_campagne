"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo: string;
  menuItems: MenuItem[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Header({
  logo,
  menuItems,
  ctaLabel,
  ctaHref,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo campagne"
            width={70}
            height={70}
            className="cursor-pointer"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 font-medium hover:text-[#5A458E] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link
            href={ctaHref}
            className="bg-[#5A458E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#F78E1E] transition"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* MENU BURGER MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-1 bg-gray-700 rounded" />
          <span className="w-6 h-1 bg-gray-700 rounded" />
          <span className="w-6 h-1 bg-gray-700 rounded" />
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 font-medium hover:text-[#5A458E] transition"
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Mobile */}
            <Link
              href={ctaHref}
              className="bg-[#5A458E] text-white w-full text-center py-2 rounded-md font-semibold hover:bg-[#F78E1E] transition"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
