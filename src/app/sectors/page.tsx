import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Building,
  Target,
  Shield,
  Layers,
} from "lucide-react";
import { SECTORS } from "@/data/sectors";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sectors We Serve | WISEMINDS Business Consulting LLP",
  description:
    "Explore WISEMINDS' specialized cross-sector consulting across Integrated Media, Agriculture (MRL cultivation), Rural Development (IRDF), Renewable Energy (CBG plants & Net Zero), Startup Legal Processes, Hospitality, and Insurance.",
};

export default function SectorsPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1739] text-white py-16 sm:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 dark-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#2446A8]/40 text-[#F4C430] border border-[#F4C430]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
              Industry-Specific Expertise
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Sectors We Serve
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              We bring multidisciplinary domain experience to address the complex regulatory, operational, and commercial dynamics of India’s foundational industries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTOR DETAILS LIST */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SECTORS.map((sector, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={sector.id}
                id={sector.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden scroll-mt-24"
              >
                {/* Sector Header Image Banner */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover object-center filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1739] via-[#0B1739]/60 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-[#F4C430] bg-[#0B1739]/80 rounded-md border border-[#F4C430]/40 uppercase tracking-widest mb-2">
                      Sector 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                      {sector.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">
                      {sector.tagline}
                    </p>
                  </div>
                </div>

                {/* Sector Content Body */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Sector Focus & Context
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  {/* Subsectors Tags */}
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-3">
                      Sub-Domains & Focus Niches
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.subsectors.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 bg-[#F7F8FC] border border-slate-200 text-[#0B1739] text-xs font-semibold rounded-lg"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3-Column Analysis Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                    {/* Column 1: Key Challenges */}
                    <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200/60">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        Key Sector Challenges
                      </h4>
                      <ul className="space-y-2 text-xs text-amber-950">
                        {sector.keyChallenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: WISEMINDS Interventions */}
                    <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-200/60">
                      <h4 className="text-xs font-bold text-[#2446A8] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#2446A8]" />
                        WBC Interventions
                      </h4>
                      <ul className="space-y-2 text-xs text-[#0B1739]">
                        {sector.wisemindsInterventions.map((w, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2446A8] shrink-0 mt-1" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: Impact Outcomes */}
                    <div className="bg-emerald-50/60 p-5 rounded-xl border border-emerald-200/60">
                      <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Measurable Outcomes
                      </h4>
                      <ul className="space-y-2 text-xs text-emerald-950">
                        {sector.impactOutcomes.map((out, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Consultation Link */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Operating in the {sector.title} sector?
                    </span>
                    <Link
                      href={`/contact?sector=${encodeURIComponent(sector.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2446A8] hover:text-[#1B3585]"
                    >
                      <span>Discuss Your Project With Sector Specialists</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FINAL SECTOR CTA */}
      <section className="py-16 bg-[#0B1739] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need Contextual Guidance for Your Specific Sector?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Our consulting council works directly with business owners, managing directors, and technical teams to build audit-ready, scalable operations.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              <span>Schedule a Sector Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
