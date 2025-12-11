"use client";

import {
  FaFacebookF,
  FaBehance,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { JSX } from "react";

interface SocialLink {
  icon: JSX.Element;
  href: string;
}

interface TopbarProps {
  email: string;
  phone: string;
  socials?: SocialLink[];
}

export default function Topbar({ email, phone, socials }: TopbarProps) {
  const defaultSocials: SocialLink[] = [
    { icon: <FaFacebookF size={16} />, href: "#" },
    { icon: <FaBehance size={16} />, href: "#" },
    { icon: <FaLinkedinIn size={16} />, href: "#" },
    { icon: <FaTwitter size={16} />, href: "#" },
  ];

  return (
    <div
      className="w-full h-10 flex items-center text-white text-sm px-4"
      style={{
        background:
          "linear-gradient(90deg, #2A2E9E 0%, #8A2C92 40%, #FF4F4F 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          {(socials || defaultSocials).map((s, index) => (
            <Link
              key={index}
              href={s.href}
              className="opacity-80 hover:opacity-100 transition"
            >
              {s.icon}
            </Link>
          ))}
        </div>

        {/* EMAIL + PHONE */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MdEmail size={16} />
            <span>{email}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiPhoneCall size={16} />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
