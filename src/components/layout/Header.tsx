"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall, ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top corporate notice bar */}
      <div className="bg-[#0B1739] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
              MSME Growth & Strategic Consulting
            </span>
            <span className="text-slate-500">•</span>
            <span>{COMPANY.collectiveExperienceText}</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <span>Chennai, Tamil Nadu, India</span>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="hover:text-[#F4C430] transition-colors"
            >
              {COMPANY.contact.email}
            </a>
            <a
              href={`tel:${COMPANY.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1 text-[#F4C430] font-semibold hover:underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {COMPANY.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
            : "bg-white py-4 border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00129C] rounded-md py-1"
              aria-label="WISEMINDS Business Consulting LLP Homepage"
            >
              <div className="relative w-48 sm:w-60 h-12 sm:h-14">
                <Image
                  src="/images/logo-horizontal-light.png"
                  alt="Wise - WISEMINDS BUSINESS CONSULTING LLP"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-semibold rounded-md transition-all duration-200 relative",
                      isActive
                        ? "text-[#2446A8] bg-[#2446A8]/5 font-bold"
                        : "text-[#0B1739] hover:text-[#2446A8] hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2446A8] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-[#0B1739] bg-[#F4C430] hover:bg-[#E5B520] shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-3 py-1.5 text-xs font-bold text-[#0B1739] bg-[#F4C430] rounded-md"
              >
                Consult
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0B1739] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2446A8]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive
                        ? "text-[#2446A8] bg-[#2446A8]/10 font-bold"
                        : "text-[#0B1739] hover:bg-slate-50"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#0B1739] bg-[#F4C430] hover:bg-[#E5B520] rounded-lg shadow-sm"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <p className="font-semibold text-[#0B1739]">{COMPANY.name}</p>
                  <p>Email: {COMPANY.contact.email}</p>
                  <p>Phone: {COMPANY.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
