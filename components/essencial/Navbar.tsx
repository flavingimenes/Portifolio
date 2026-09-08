"use client";

import { useState } from "react";
import { navLinks } from "./data";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/flaviogimeness",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      color: "text-blue-600",
    },
    {
      href: "https://github.com/flavingimenes",
      label: "GitHub",
      icon: <FaGithub />,
      color: "text-gray-800",
    },
    {
      href: "https://www.instagram.com/flavio_gabrielll/",
      label: "Instagram",
      icon: <FaInstagram />,
      color: "text-pink-600",
    },
    {
      href: "https://wa.me/5565999527412",
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      color: "text-green-600",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E2DD] bg-[#FAFAF8]/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-275 grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <a
          href="#topo"
          className="justify-self-start text-[15px] font-semibold tracking-tight text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Flávio Gabriel
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[17px] text-[#4A4C50] transition-colors duration-200 hover:text-[#16181B]"
            >
              {link.label}
            </a>
          ))}

        </nav>

        <div className="hidden items-center justify-self-end gap-3 md:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className={`flex h-8 w-8 text-2xl items-center justify-center rounded-full ${social.color} transition-all duration-200 hover:scale-110`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="col-start-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[#E4E2DD] text-[#16181B] md:hidden"
        >
          <span
            aria-hidden="true"
            className={`text-[22px] leading-none transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="border-t border-[#E4E2DD] px-6 py-4">
            <div
              className={`flex flex-col gap-1 transition-transform duration-300 ${
                isOpen ? "translate-y-0" : "-translate-y-3"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-[15px] text-[#16181B] transition-colors hover:text-[#2F5D50]"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex gap-3 border-t border-[#E4E2DD] pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E2DD] ${social.color} transition-all duration-200 hover:scale-110 hover:bg-[#E4E2DD]`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}