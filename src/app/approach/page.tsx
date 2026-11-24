import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  GitBranch,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { APPROACH_STAGES, METHODOLOGY_STEPS } from "@/data/approach";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Approach — Purpose. Process. Practice. | WISEMINDS",
  description:
    "Explore the signature consulting framework of WISEMINDS Business Consulting LLP. From Business Evaluation to Purpose Definition, Process Development, Implementation, Leadership Governance, and Sustainable Growth.",
};

export default function ApproachPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1739] text-white py-16 sm:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 dark-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#2446A8]/40 text-[#F4C430] border border-[#F4C430]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
              The WISEMINDS Consulting Methodology
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Approach: Purpose. Process. Practice.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              We guide MSMEs and emerging ventures through a structured growth framework engineered to transform strategic intent into disciplined everyday execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 6-STEP LINEAR JOURNEY */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Linear Transformation Roadmap"
            title="From Diagnostic Evaluation to Sustainable Growth"
            description="Our structured six-stage engagement model guarantees transparency, milestone-driven accountability, and zero operational disruption."
          />

          {/* Desktop Step Flow / Mobile Card Stack */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#2446A8]/10 text-[#2446A8] font-black text-sm flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Step 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1739] group-hover:text-[#2446A8] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* Subtle progress indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Milestone-based delivery</span>
                  <span className="font-semibold text-[#2446A8]">Phase {idx + 1}/6</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE 3-STAGE DEEP DIVE (PURPOSE - PROCESS - PRACTICE) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <SectionHeading
            centered
            eyebrow="In-Depth Framework"
            title="The Three Pillars of Enterprise Longevity"
            description="Examine how Purpose, Process, and Practice reinforce each other to establish institutional endurance."
          />

          {APPROACH_STAGES.map((stage, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={stage.code}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-[#2446A8]/10 text-[#2446A8]">
                    <span>Stage {stage.number}</span>
                    <span>•</span>
                    <span>{stage.code}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1739]">
                    {stage.headline}
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="editorial-quote text-xs sm:text-sm text-slate-600 italic bg-[#F7F8FC] p-4 rounded-r-lg">
                    &ldquo;{stage.quote}&rdquo;
                  </div>

                  {/* Interventions & Outputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold text-[#0B1739] uppercase tracking-wider mb-2">
                        Key Interventions:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {stage.steps.map((st, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2446A8] shrink-0 mt-1.5" />
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-[#FFFBEB] rounded-xl border border-amber-200">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                        Concrete Deliverables:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-amber-950">
                        {stage.outputs.map((out, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Visual Stage Card */}
                <div className="lg:col-span-5">
                  <div className="bg-[#0B1739] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden border border-[#2446A8]/40">
                    <div className="text-6xl font-black text-white/10 absolute top-4 right-6">
                      {stage.number}
                    </div>

                    <span className="text-xs font-bold text-[#F4C430] uppercase tracking-widest">
                      Framework Stage
                    </span>
                    <h4 className="text-3xl font-black text-white mt-1">
                      {stage.code}
                    </h4>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {stage.summary}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span>WISEMINDS Signature Framework</span>
                      <span className="text-[#F4C430] font-bold">Phase 0{idx + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-[#F7F8FC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            centered
            eyebrow="Start the Journey"
            title="Translate Your Business Purpose into Measurable Scale"
            description="Schedule a 45-minute preliminary evaluation with WISEMINDS consulting partners to assess your current operating bottlenecks."
          />

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              <span>Schedule Your Preliminary Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0B1739] hover:bg-slate-100 border border-slate-300 font-semibold text-sm rounded-lg transition-colors"
            >
              <span>Review All Consulting Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
