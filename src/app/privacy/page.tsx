import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | WISEMINDS Business Consulting LLP",
  description: "Official Privacy Policy of WISEMINDS Business Consulting LLP (WBC).",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-[#2446A8] uppercase tracking-wider">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1739] mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: November 2026 | WISEMINDS BUSINESS CONSULTING LLP
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">1. Introduction & Commitment</h2>
            <p>
              WISEMINDS BUSINESS CONSULTING LLP (&ldquo;WBC&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and commercial confidentiality of our clients, prospective clients, and website visitors. This Privacy Policy details how we collect, handle, safeguard, and process corporate and personal information in accordance with applicable Indian laws, including the Information Technology Act, 2000 and Digital Personal Data Protection (DPDP) Act.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">2. Information We Collect</h2>
            <p>We collect information voluntarily provided by you when requesting consultations, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name, designation, and enterprise title</li>
              <li>Company name, corporate registered address, and industry vertical</li>
              <li>Work email address and corporate telephone numbers</li>
              <li>Operational details and business requirements submitted via enquiry forms</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">3. Purpose of Data Processing</h2>
            <p>Information gathered is utilized strictly for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluating enterprise suitability and preparing tailored consultation sessions</li>
              <li>Communicating regarding diagnostic assessments, proposals, and advisory schedules</li>
              <li>Fulfilling legal, statutory, and contractual audit compliance requirements</li>
            </ul>
            <p className="font-semibold text-[#0B1739] mt-2">
              We never sell, trade, or monetize commercial information or client data with third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">4. Non-Disclosure & Confidentiality</h2>
            <p>
              All strategic, proprietary, or operational disclosures shared during our consulting engagements are held under strict non-disclosure obligations. Our partners and associates are bound by standard corporate confidentiality covenants.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0B1739]">5. Contact Us Regarding Privacy</h2>
            <p>
              For inquiries regarding data protection or confidentiality, please contact our compliance desk at{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-[#2446A8] font-bold underline">
                {COMPANY.contact.email}
              </a>
              {" "}or write to our registered office: {COMPANY.contact.address.line1}, {COMPANY.contact.address.line2}, {COMPANY.contact.address.city}, {COMPANY.contact.address.state} – {COMPANY.contact.address.postalCode}, India.
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
