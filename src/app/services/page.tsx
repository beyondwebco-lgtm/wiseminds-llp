"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings2,
  Rocket,
  Users,
  Repeat,
  Building2,
  ShieldCheck,
  Truck,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Workflow,
  Sparkles,
  Layers,
} from "lucide-react";
import { SERVICES, ServiceOffering } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("Process Consulting");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"All" | "Core" | "Specialized">("All");

  const openConsultation = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const filteredServices = SERVICES.filter((s) => {
    if (activeTab === "All") return true;
    return s.category === activeTab;
  });

  const iconMap: Record<string, React.ReactNode> = {
    Settings2: <Settings2 className="w-6 h-6 text-[#2446A8]" />,
    Rocket: <Rocket className="w-6 h-6 text-[#2446A8]" />,
    Users: <Users className="w-6 h-6 text-[#2446A8]" />,
    Repeat: <Repeat className="w-6 h-6 text-[#2446A8]" />,
    Building2: <Building2 className="w-6 h-6 text-[#2446A8]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#2446A8]" />,
    Truck: <Truck className="w-6 h-6 text-[#2446A8]" />,
    FileText: <FileText className="w-6 h-6 text-[#2446A8]" />,
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1739] text-white py-16 sm:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 dark-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#2446A8]/40 text-[#F4C430] border border-[#F4C430]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
              Structured Consulting Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Consulting Services
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              From foundational process engineering and early-stage startup mentoring to complex cross-border logistics and ESG compliance, explore our eight specialized consulting practices.
            </p>

            {/* Quick Navigation Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("All")}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  activeTab === "All"
                    ? "bg-[#F4C430] text-[#0B1739] border-[#F4C430]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                All 8 Practices
              </button>
              <button
                onClick={() => setActiveTab("Core")}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  activeTab === "Core"
                    ? "bg-[#F4C430] text-[#0B1739] border-[#F4C430]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                Core Foundations (3)
              </button>
              <button
                onClick={() => setActiveTab("Specialized")}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  activeTab === "Specialized"
                    ? "bg-[#F4C430] text-[#0B1739] border-[#F4C430]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                Specialized Interventions (5)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden scroll-mt-24 transition-all hover:shadow-xl"
            >
              {/* Header Bar */}
              <div className="bg-[#0B1739] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/20">
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-[#F4C430] uppercase tracking-widest px-2 py-0.5 rounded bg-[#F4C430]/15 border border-[#F4C430]/30">
                        {service.category} Practice 0{index + 1}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openConsultation(service.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] text-xs sm:text-sm font-bold rounded-lg shadow transition-colors self-start md:self-center shrink-0"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Service Details Body */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* 1. Overview */}
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Service Overview
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* 2-Column Grid: Challenges vs Methodology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                  {/* Business Challenges Addressed */}
                  <div className="bg-[#FFFBEB] p-6 rounded-xl border border-amber-200/80">
                    <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Business Challenges Addressed
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950">
                      {service.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Consulting Methodology */}
                  <div className="bg-[#EFF6FF] p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 text-[#2446A8] text-xs font-bold uppercase tracking-wider mb-3">
                      <Workflow className="w-4 h-4 text-[#2446A8]" />
                      Consulting Methodology
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#0B1739]">
                      {service.methodology.map((m, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2446A8] shrink-0 mt-1.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2-Column Grid: Key Deliverables vs Intended Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                  {/* Key Service Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#2446A8]" />
                      Key Service Deliverables
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {service.deliverables.map((del, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2446A8] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Intended Business Benefits */}
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#F4C430]" />
                      Intended Business Benefits
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {service.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Ready to implement this framework in your organization?
                  </div>
                  <button
                    onClick={() => openConsultation(service.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2446A8] hover:bg-[#1B3585] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <span>Schedule Consultation for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
