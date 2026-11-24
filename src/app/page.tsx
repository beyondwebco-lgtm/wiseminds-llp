"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Settings2,
  Rocket,
  Users,
  Repeat,
  Building2,
  ShieldCheck,
  Truck,
  FileText,
  Compass,
  TrendingUp,
  Award,
  ChevronRight,
  Target,
  Sparkles,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { SECTORS } from "@/data/sectors";
import { APPROACH_STAGES } from "@/data/approach";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Business Consultation");

  const openConsultation = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const coreServices = SERVICES.filter((s) => s.category === "Core");
  const specializedServices = SERVICES.filter((s) => s.category === "Specialized");

  const iconMap: Record<string, React.ReactNode> = {
    Settings2: <Settings2 className="w-6 h-6 text-[#2446A8]" />,
    Rocket: <Rocket className="w-6 h-6 text-[#2446A8]" />,
    Users: <Users className="w-6 h-6 text-[#2446A8]" />,
    Repeat: <Repeat className="w-5 h-5 text-[#2446A8]" />,
    Building2: <Building2 className="w-5 h-5 text-[#2446A8]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#2446A8]" />,
    Truck: <Truck className="w-5 h-5 text-[#2446A8]" />,
    FileText: <FileText className="w-5 h-5 text-[#2446A8]" />,
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1739] text-white overflow-hidden py-20 lg:py-28">
        {/* Subtle Background Pattern & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1739] via-[#0B1739]/95 to-[#142B75]/90 z-10" />
        <div className="absolute inset-0 opacity-15 dark-grid-bg z-10" />

        {/* Corporate Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="WISEMINDS Business Consulting Leadership"
            fill
            priority
            className="object-cover object-center filter grayscale opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2446A8]/40 border border-[#F4C430]/40 text-[#F4C430] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-ping" />
              Empowering MSMEs. Enabling Growth.
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.15]">
              Transforming Business Purpose into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-[#FDE047]">
                Sustainable Growth.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              WISEMINDS Business Consulting LLP empowers MSMEs and startups with accessible, affordable and structured consulting solutions designed to build stronger businesses, effective leadership and sustainable profitability.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openConsultation()}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm sm:text-base font-bold text-[#0B1739] bg-[#F4C430] hover:bg-[#E5B520] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>

          {/* Credibility Highlights Grid */}
          <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F4C430]">
                125+ Years
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                Collective Professional Experience
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                MSME-Focused
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                Accessible & Tailored Consulting
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F4C430]">
                Cross-Sector
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                Media, Agri, Energy & Supply Chain
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                P • P • P
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                Purpose. Process. Practice.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT WISEMINDS SECTION */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="About WISEMINDS"
                title="A Multidisciplinary Consulting Partnership Built for Indian MSMEs"
              />

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                WISEMINDS Business Consulting LLP (WBC) is established by a team of like-minded professionals with over <strong>125 years of collective experience</strong> across media, hospitality, agriculture, and social development enterprises.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that while large enterprises have always commanded access to world-class management advisory, India’s vibrant MSME ecosystem and emerging startups remain underserved. WBC bridges this critical void with pragmatic, structured, and affordable consulting solutions that empower founders to navigate early-stage hurdles, achieve operational sustainability, and scale with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2446A8]/10 text-[#2446A8] flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1739]">Purpose-Driven Alignment</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Aligning founding vision with practical operational and commercial realities.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F4C430]/20 text-[#8F6B00] flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1739]">Sustainable Profitability</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Engineering disciplined unit economics over reckless, cash-burning growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2446A8] hover:text-[#1B3585] group"
                >
                  <span>Learn about our story & brand identity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2446A8]/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="relative w-14 h-14 shrink-0">
                    <Image
                      src="/images/logo-mark.svg"
                      alt="WISEMINDS Symbol"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2446A8] uppercase tracking-wider">
                      The WBC Commitment
                    </span>
                    <h4 className="text-lg font-bold text-[#0B1739]">Accessible Excellence</h4>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2446A8] shrink-0 mt-0.5" />
                    <span><strong>125+ Years</strong> of battle-tested operational leadership across industries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2446A8] shrink-0 mt-0.5" />
                    <span><strong>Affordable & Transparent:</strong> Tailored specifically for MSME capital allocations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2446A8] shrink-0 mt-0.5" />
                    <span><strong>Hands-On Guidance:</strong> We implement alongside leadership rather than providing mere theory.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2446A8] shrink-0 mt-0.5" />
                    <span><strong>Governance & Compliance:</strong> Instituting audit-ready rigor from day one.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Official Philosophy
                  </span>
                  <span className="text-xs font-bold text-[#0B1739] px-2.5 py-1 bg-slate-100 rounded-md">
                    Purpose • Process • Practice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CONSULTING SERVICES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Core Consulting Solutions"
            title="Engineered to Build, Sustain, and Scale Your Business"
            description="Our three cornerstone consulting pillars provide the foundation, operational discipline, and executive governance that MSMEs and startups require to thrive."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#2446A8]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2446A8]/10 group-hover:bg-[#2446A8] group-hover:text-white transition-colors flex items-center justify-center">
                      {iconMap[service.icon]}
                    </div>
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1739] group-hover:text-[#2446A8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-3">
                      Core Focus Areas:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {service.deliverables.slice(0, 4).map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-8 py-4 bg-[#F7F8FC] border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="text-xs font-bold text-[#2446A8] hover:text-[#142B75] flex items-center gap-1.5"
                  >
                    <span>Detailed Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openConsultation(service.title)}
                    className="text-xs font-semibold px-3 py-1 bg-white hover:bg-[#F4C430] text-[#0B1739] border border-slate-200 rounded-md transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH — PURPOSE. PROCESS. PRACTICE. */}
      <section className="py-20 lg:py-28 bg-[#0B1739] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark-grid-bg pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            theme="dark"
            eyebrow="Signature Consulting Framework"
            title="Purpose. Process. Practice."
            description="Our three-stage consulting framework translates strategic intent into structured operational execution and long-term enterprise sustainability."
          />

          {/* Desktop Connected Journey / Mobile Vertical Timeline */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#2446A8] via-[#F4C430] to-[#2446A8] z-0" />

            {APPROACH_STAGES.map((stage) => (
              <div
                key={stage.code}
                className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  {/* Stage Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-full bg-[#2446A8] border-2 border-[#F4C430] text-white font-extrabold text-base flex items-center justify-center shadow-lg">
                      {stage.number}
                    </span>
                    <span className="text-xs font-bold text-[#F4C430] uppercase tracking-widest px-2.5 py-1 rounded bg-[#F4C430]/10 border border-[#F4C430]/20">
                      STAGE {stage.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {stage.code}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stage.summary}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-bold text-[#F4C430] uppercase tracking-wider mb-2">
                      Key Interventions:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {stage.steps.map((st, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] shrink-0 mt-1" />
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs italic text-slate-400">
                  &ldquo;{stage.quote}&rdquo;
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-[#0B1739] bg-[#F4C430] hover:bg-[#E5B520] transition-colors"
            >
              <span>Explore the Complete 6-Step Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SPECIALIZED CONSULTING SOLUTIONS */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized Capabilities"
            title="Strategic Interventions for High-Growth & Complex Environments"
            description="Beyond core advisory, WISEMINDS provides specialized institutional solutions addressing sector-specific disruptions, regulatory transitions, and supply chain scaling."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-7 rounded-xl border border-slate-200 hover:border-[#2446A8] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#2446A8]/10 text-[#2446A8] flex items-center justify-center mb-4">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1739] leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="text-xs font-bold text-[#2446A8] hover:underline flex items-center gap-1"
                  >
                    <span>Read deliverables</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => openConsultation(service.title)}
                    className="text-xs text-slate-500 hover:text-[#0B1739] font-medium"
                  >
                    Consult →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Sector Expertise"
            title="Tailored Consulting Across Strategic Indian Industries"
            description="Our multidisciplinary partners combine decades of domain immersion with cross-sector best practices to deliver contextual consulting solutions."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector) => (
              <Link
                key={sector.id}
                href={`/sectors#${sector.id}`}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col h-72"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1739] via-[#0B1739]/60 to-transparent" />
                </div>

                <div className="relative z-10 p-5 mt-auto text-white">
                  <div className="text-[11px] font-bold text-[#F4C430] uppercase tracking-wider mb-1">
                    Industry Sector
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F4C430] transition-colors leading-snug">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-200 line-clamp-2 leading-relaxed opacity-90">
                    {sector.tagline}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-[#F4C430]">
                    <span>Explore sector solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2446A8] hover:underline"
            >
              <span>View full sector breakdowns and case methodologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY WISEMINDS? DIFFERENTIATORS */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="The WBC Advantage"
                title="Why MSMEs and Startups Choose WISEMINDS"
                description="We replace abstract corporate jargon with rigorous, field-tested management frameworks built for Indian market realities."
              />

              <div className="editorial-quote text-sm text-slate-700 bg-white p-5 rounded-r-xl border-y border-r border-slate-200 shadow-sm">
                <p className="italic">
                  &ldquo;MSMEs do not need generic 100-page slide decks. They need accessible partners who understand cash flows, operational bottlenecks, and how to execute on the factory floor and in the boardroom.&rdquo;
                </p>
                <p className="mt-2 text-xs font-bold text-[#0B1739] not-italic">
                  — WISEMINDS Consulting Council
                </p>
              </div>

              <button
                onClick={() => openConsultation()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2446A8] hover:bg-[#1B3585] text-white font-bold text-sm rounded-lg shadow-sm transition-colors"
              >
                <span>Schedule a Diagnostic Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {COMPANY.differentiators.map((diff, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2446A8]/10 text-[#2446A8] flex items-center justify-center font-extrabold text-xs mb-3">
                      0{i + 1}
                    </div>
                    <h4 className="text-base font-bold text-[#0B1739]">{diff.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}
