"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/company";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "General Business Consultation",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    service: defaultService,
    requirements: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed. Please try again or email us directly.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="bg-[#0B1739] text-white px-6 py-5 flex items-center justify-between border-b border-[#2446A8]/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F4C430]">
              <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
              Schedule a Strategic Session
            </div>
            <h3 id="modal-title" className="text-xl font-bold tracking-tight mt-0.5">
              Consult with WISEMINDS Experts
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1739]">Consultation Request Received</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you for reaching out to WISEMINDS. Our senior consulting team has received your details. We will review your business requirements and contact you within 24 business hours to confirm your consultation schedule.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#2446A8] text-white font-medium rounded-lg hover:bg-[#1B3585] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-600 mb-4">
                Please provide your enterprise details below. Our consulting partners will analyze your context and prepare a focused discussion tailored to your business stage.
              </p>

              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                    Company / Enterprise Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Agri Innovations LLP"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                    Phone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400 XXXXX"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                    Industry / Sector <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent bg-white"
                  >
                    <option value="">Select your sector</option>
                    <option value="Agriculture & Sustainable Cultivation">Agriculture & Sustainable Cultivation</option>
                    <option value="Integrated Media & Publishing">Integrated Media & Publishing</option>
                    <option value="Renewable Energy / CBG Plants">Renewable Energy / CBG Plants</option>
                    <option value="Rural Development & Rurban Enterprise">Rural Development & Rurban Enterprise</option>
                    <option value="Hospitality & Food Services">Hospitality & Food Services</option>
                    <option value="Insurance & Intermediary Services">Insurance & Intermediary Services</option>
                    <option value="Quick Commerce & Logistics">Quick Commerce & Logistics</option>
                    <option value="Tech / Early-Stage Startup">Tech / Early-Stage Startup</option>
                    <option value="Other MSME / Manufacturing">Other MSME / Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                    Primary Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent bg-white"
                  >
                    <option value="Process Consulting">Process Consulting & Feasibility</option>
                    <option value="Startup Mentoring">Startup Mentoring & Growth Strategy</option>
                    <option value="Executive Coaching">Executive Coaching & Governance</option>
                    <option value="Transition Management">Sector-Agnostic Transition Management</option>
                    <option value="Incubation Centre Setup">Incubation Centre Setup & Management</option>
                    <option value="MSME ESG Consulting">MSME-Focused ESG Consulting</option>
                    <option value="Q-Commerce Logistics">Quick Commerce Supply Chain</option>
                    <option value="Legal Process Outsourcing">Legal Process Outsourcing (LPO)</option>
                    <option value="General Business Consultation">Comprehensive Diagnostic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1739] uppercase tracking-wider mb-1">
                  Brief Overview of Your Business Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Tell us about your current operational challenges, business stage, or growth goals..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2446A8] focus:border-transparent"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  Direct line: <span className="font-semibold text-slate-700">{COMPANY.contact.phone}</span>
                </span>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow-sm transition-colors disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
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
    </div>
  );
}
