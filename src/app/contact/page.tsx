"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    requirements: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to process enquiry.");
      }

      setStatus("success");
      setFeedback(data.message);
      setReferenceId(data.referenceId || "");
    } catch (err: unknown) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "An unexpected error occurred. Please contact us directly via email.");
    }
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
              Schedule a Strategic Session
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Connect With Our Consulting Partners
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you are an MSME seeking operational stability, an early-stage founder seeking structured guidance, or an enterprise facing transition, we are here to support your growth.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & DETAILS CONTAINER */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-10">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-xs font-bold text-[#2446A8] uppercase tracking-wider">
                    Official Consultation Request
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B1739] mt-1">
                    Submit Your Business Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    Please complete all required fields. Our senior advisory council reviews each request and responds within 24 business hours.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1739]">
                      Consultation Request Confirmed
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {feedback}
                    </p>
                    {referenceId && (
                      <div className="p-3 bg-slate-100 rounded-lg inline-block text-xs font-mono font-bold text-[#0B1739]">
                        Reference ID: {referenceId}
                      </div>
                    )}
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setStatus("idle");
                          setFormData({
                            name: "",
                            company: "",
                            email: "",
                            phone: "",
                            industry: "",
                            service: "",
                            requirements: "",
                          });
                        }}
                        className="px-6 py-2.5 bg-[#2446A8] text-white text-xs font-bold rounded-lg hover:bg-[#1B3585] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-lg flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                        <span>{feedback}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                          Company / Enterprise Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Agri Innovations LLP"
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                          Work Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98400 XXXXX"
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                          Industry Sector <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent bg-white"
                        >
                          <option value="">Select industry</option>
                          <option value="Agriculture & Sustainable Cultivation">Agriculture & Sustainable Cultivation</option>
                          <option value="Integrated Media & Publishing">Integrated Media & Publishing</option>
                          <option value="Renewable Energy / CBG Plants">Renewable Energy / CBG Plants</option>
                          <option value="Rural Development & Rurban Enterprise">Rural Development & Rurban Enterprise</option>
                          <option value="Hospitality & Food Services">Hospitality & Food Services</option>
                          <option value="Insurance & Intermediary Services">Insurance & Intermediary Services</option>
                          <option value="Quick Commerce Supply Chain">Quick Commerce Supply Chain</option>
                          <option value="Early-Stage Startup">Early-Stage Startup</option>
                          <option value="Other MSME / Manufacturing">Other MSME / Manufacturing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                          Required Consulting Service <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent bg-white"
                        >
                          <option value="">Select service offering</option>
                          <option value="Process Consulting">Process Consulting</option>
                          <option value="Startup Mentoring">Startup Mentoring</option>
                          <option value="Executive Coaching">Executive Coaching</option>
                          <option value="Transition Management Services">Transition Management Services</option>
                          <option value="Incubation Centre Setup">Incubation Centre Development</option>
                          <option value="Environmental and Social Governance">MSME ESG Consulting</option>
                          <option value="Quick Commerce Supply Chain">Quick Commerce Logistics</option>
                          <option value="Legal Process Outsourcing">Legal Process Outsourcing</option>
                          <option value="Comprehensive Strategic Evaluation">Comprehensive Diagnostic</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-1.5">
                        Business Requirements & Current Challenges <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="Please share details on your enterprise stage, primary bottlenecks, or what you aim to achieve..."
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-slate-500">
                        Information is treated with strict confidentiality under non-disclosure protocols.
                      </div>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow-sm transition-all disabled:opacity-50"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Transmitting Request...
                          </>
                        ) : (
                          <>
                            Confirm Consultation
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Verified Corporate Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Corporate Card */}
              <div className="bg-[#0B1739] text-white p-8 rounded-2xl border border-white/10 shadow-lg">
                <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">
                  Corporate Headquarters
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-4">
                  {COMPANY.name}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F4C430] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Registered Corporate Office</p>
                      <p className="text-slate-300 mt-0.5">
                        {COMPANY.contact.address.line1}, {COMPANY.contact.address.line2}
                      </p>
                      <p className="text-slate-300">
                        {COMPANY.contact.address.city}, {COMPANY.contact.address.state} – {COMPANY.contact.address.postalCode}
                      </p>
                      <p className="text-slate-400">{COMPANY.contact.address.country}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <Mail className="w-5 h-5 text-[#F4C430] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Direct Advisory Inquiries</p>
                      <a href={`mailto:${COMPANY.contact.email}`} className="text-slate-300 hover:text-white">
                        {COMPANY.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <Phone className="w-5 h-5 text-[#F4C430] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Executive Telephone Line</p>
                      <a href={`tel:${COMPANY.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-[#F4C430] font-bold">
                        {COMPANY.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <Clock className="w-5 h-5 text-[#F4C430] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Operational Hours</p>
                      <p className="text-slate-300">{COMPANY.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Standards Note */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#2446A8] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#2446A8]" />
                  What Happens Next?
                </div>
                <h4 className="text-sm font-bold text-[#0B1739]">
                  Structured Engagement Protocol
                </h4>
                <ol className="space-y-2 text-xs text-slate-600 list-decimal pl-4">
                  <li><strong>Preliminary Review:</strong> Our partners review your sector context and challenges.</li>
                  <li><strong>Discovery Discussion:</strong> A 45-minute confidential session with senior consultants.</li>
                  <li><strong>Strategic Scope:</strong> A transparent roadmap outlining deliverables, timelines, and milestones.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
