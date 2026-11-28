"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { COMPANY } from "@/data/company";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#0B1739] text-white border-t border-white/10 pt-16 pb-12">
        {/* Top Pre-Footer Callout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-white/10">
          <div className="bg-gradient-to-r from-[#142B75] to-[#2446A8] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4C430]/20 text-[#F4C430] border border-[#F4C430]/30 text-xs font-bold uppercase tracking-wider mb-4">
                Structured Growth for MSMEs
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Build a Stronger Business. Together.
              </h3>
              <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
                Partner with WISEMINDS to define your business purpose, strengthen operational processes, and unlock sustainable profitability.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow-md transition-all duration-200"
                >
                  <span>Connect With Our Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all duration-200"
                >
                  <span>Explore Consulting Services</span>
                </Link>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1: Company Profile & Brandmark */}
            <div className="lg:col-span-2 space-y-5">
              <div className="relative w-56 sm:w-64 h-14">
                <Image
                  src="/images/logo-horizontal-dark.png"
                  alt="Wise - WISEMINDS BUSINESS CONSULTING LLP"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                WISEMINDS Business Consulting LLP empowers MSMEs and startups with accessible, affordable, and structured consulting solutions designed to build stronger businesses, effective leadership, and sustainable profitability.
              </p>

              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-[#F4C430] uppercase tracking-wider">
                  Guiding Philosophy: Purpose. Process. Practice.
                </p>
                <p>125+ Years of Collective Professional Experience</p>
              </div>

              {/* Verified Contact Details */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F4C430] shrink-0 mt-0.5" />
                  <span>
                    {COMPANY.contact.address.line1}, {COMPANY.contact.address.line2},{" "}
                    {COMPANY.contact.address.city}, {COMPANY.contact.address.state} – {COMPANY.contact.address.postalCode}, {COMPANY.contact.address.country}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#F4C430] shrink-0" />
                  <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-white transition-colors">
                    {COMPANY.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#F4C430] shrink-0" />
                  <a href={`tel:${COMPANY.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors font-medium">
                    {COMPANY.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{COMPANY.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Consulting Services */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {FOOTER_SECTIONS.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#F4C430] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#F4C430] transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Sectors We Serve */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
                Sectors
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {FOOTER_SECTIONS.sectors.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#F4C430] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#F4C430] transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Quick Navigation & Governance */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                {FOOTER_SECTIONS.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#F4C430] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#F4C430] transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-semibold text-[#F4C430] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#F4C430]" />
                  LLP Identification
                </div>
                <p className="text-[11px] text-slate-400">
                  Registered under Limited Liability Partnership Act. Committed to corporate integrity and process excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.beyondwebco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Made by BeyondWebCo
              </a>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <span className="text-slate-500">MSME & Startup Business Consulting</span>
            </div>
          </div>
        </div>
      </footer>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
