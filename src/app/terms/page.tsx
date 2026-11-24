import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | WISEMINDS Business Consulting LLP",
  description: "Official Terms and Conditions governing consulting advisory and website utilization.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-[#2446A8] uppercase tracking-wider">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1739] mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: November 2026 | WISEMINDS BUSINESS CONSULTING LLP
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">1. Agreement to Terms</h2>
            <p>
              By accessing the website of WISEMINDS BUSINESS CONSULTING LLP (&ldquo;WBC&rdquo;) or engaging with our strategic consultation workflows, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">2. Nature of Advisory Services</h2>
            <p>
              WISEMINDS Business Consulting LLP provides structured management, process engineering, startup mentoring, and executive advisory services. While our consulting methodologies are backed by 125+ years of collective leadership experience, commercial outcomes in any business enterprise are subject to external market conditions, macroeconomic realities, client implementation discipline, and operational execution.
            </p>
            <p className="font-semibold text-[#0B1739]">
              In accordance with professional corporate governance standards, WISEMINDS does not offer speculative guarantees of profitability or guaranteed commercial revenue growth.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">3. Formal Engagements & Scope of Work</h2>
            <p>
              The materials and descriptions on this website serve informational purposes. Formal consulting relationships are governed strictly by executed Master Consulting Agreements (MCAs), Statements of Work (SOWs), and non-disclosure charters signed by authorized partners of WISEMINDS BUSINESS CONSULTING LLP and the client entity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">4. Intellectual Property</h2>
            <p>
              All proprietary consulting frameworks—including the Purpose–Process–Practice (P3) methodology, diagnostic matrices, standard templates, brandmark insignias, and website literature—are the exclusive intellectual property of WISEMINDS BUSINESS CONSULTING LLP.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">5. Governing Jurisdiction</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of India. Any legal dispute or proceeding arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <Link href="/" className="text-xs font-bold text-[#2446A8] hover:underline">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
