import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Compass,
  Sparkles,
  Award,
  Users2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Scale,
  Eye,
  Flag,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | WISEMINDS Business Consulting LLP",
  description:
    "Learn about WISEMINDS Business Consulting LLP (WBC), our multidisciplinary leadership team with over 125 years of collective experience, our vision, mission, core values, and brandmark identity.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Accessibility",
      desc: "Democratizing high-caliber business consulting so MSMEs and startups have direct access to strategic guidance without exorbitant corporate barriers.",
      icon: <Users2 className="w-5 h-5 text-[#2446A8]" />,
    },
    {
      title: "Transparency",
      desc: "Operating with unvarnished clarity in all evaluations, fee structures, timelines, and measurable operational milestone reporting.",
      icon: <Eye className="w-5 h-5 text-[#2446A8]" />,
    },
    {
      title: "Integrity",
      desc: "Uncompromising ethical counsel prioritizing client enterprise longevity, compliance, and fiduciary honesty above all else.",
      icon: <ShieldCheck className="w-5 h-5 text-[#2446A8]" />,
    },
    {
      title: "Process Excellence",
      desc: "Instilling standard operating rigor, repeatability, and lean operational discipline into everyday business practices.",
      icon: <Target className="w-5 h-5 text-[#2446A8]" />,
    },
    {
      title: "Accountability",
      desc: "Taking co-ownership of execution milestones and embedding alongside leadership teams to ensure recommendations translate into reality.",
      icon: <Scale className="w-5 h-5 text-[#2446A8]" />,
    },
    {
      title: "Sustainable Growth",
      desc: "Focusing on sustainable unit economics, cash runway health, and long-term enterprise value rather than artificial, fleeting spikes.",
      icon: <TrendingUp className="w-5 h-5 text-[#2446A8]" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. PAGE HEADER */}
      <section className="bg-[#0B1739] text-white py-16 sm:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 dark-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#2446A8]/40 text-[#F4C430] border border-[#F4C430]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
              Company Profile & Philosophy
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About WISEMINDS Business Consulting
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Enabling, sustaining, and scaling MSMEs and emerging enterprises across India through multidisciplinary expertise, process excellence, and accessible consulting.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Our Story"
                title="Built by Practitioners with 125+ Years of Collective Expertise"
              />

              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  <strong>WISEMINDS BUSINESS CONSULTING LLP (WBC)</strong> was conceived from a shared realization among senior industry leaders: while global conglomerates easily afford high-priced strategy firms, India’s micro, small, and medium enterprises (MSMEs)—which power nearly a third of the national GDP and create millions of livelihoods—are frequently left to navigate immense scaling hurdles without structured guidance.
                </p>
                <p>
                  Our founding team brings together <strong>over 125 years of collective frontline leadership</strong> across media publishing, television broadcasting, hospitality operations, agricultural supply chains, and rural development programs. We have built businesses from napkin sketches, managed turnaround operations in distressed units, guided young ventures to profitability, and navigated regulatory shifts firsthand.
                </p>
                <p>
                  We established WBC to democratize strategic consulting. We combine the analytical rigor of global management firms with the grounded empathy and commercial realism required by Indian entrepreneurs. Whether working with a family enterprise undergoing generational transition, an agri-processor establishing export MRL standards, or an early-stage startup validating its unit economics, WBC serves as an embedded, trusted growth partner.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-4 bg-[#F7F8FC] border-l-4 border-[#2446A8] rounded-r-lg">
                  <p className="text-sm font-semibold text-[#0B1739]">
                    &ldquo;Our commitment is straightforward: we do not leave you with slides and theories. We embed with your team to design processes, train leaders, and govern execution until sustainable profitability is institutionalized.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="WISEMINDS Leadership Team Strategy Session"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-[#0B1739] text-white">
                  <div className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">
                    Core Focus
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Supporting Underserved MSMEs
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Accessible, affordable, and structured consulting designed for early-stage development, operational stability, and long-term expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-20 bg-[#F7F8FC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Our Foundation"
            title="Vision & Mission"
            description="Clear strategic purpose directing every client engagement and organizational decision."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden group hover:border-[#2446A8]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#2446A8]/10 text-[#2446A8] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#2446A8] uppercase tracking-widest">
                Our Vision
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B1739] mt-2 mb-4">
                To empower every MSME to achieve sustainable and profitable business growth.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We envision an Indian business landscape where MSMEs and startups are fortified by robust operational frameworks, enabling them to build enduring enterprises that provide employment, foster regional prosperity, and compete globally.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden group hover:border-[#F4C430]/70 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F4C430]/20 text-[#8F6B00] flex items-center justify-center mb-6">
                <Flag className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#8F6B00] uppercase tracking-widest">
                Our Mission
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B1739] mt-2 mb-4">
                To enable and guide businesses through accessible, affordable and effective consulting solutions.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our mission is to translate complex management and operational science into practical, modular roadmaps tailored for growing enterprises—ensuring every rupee invested in consulting delivers measurable operational stability and bottom-line health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Principles That Guide Us"
            title="Our Core Values"
            description="The foundational standards that define our client partnerships, professional conduct, and analytical methodology."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="p-7 rounded-xl border border-slate-200 bg-white hover:border-[#2446A8] hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2446A8]/10 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-[#0B1739]">{v.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRANDMARK IDENTITY & VISUAL ELEMENTS */}
      <section id="brand-identity" className="py-20 lg:py-28 bg-[#0B1739] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            theme="dark"
            eyebrow="Visual Symbolism"
            title="The WISEMINDS Brandmark Identity"
            description="Our identity is crafted with intentional symbolism, reflecting our role as the catalyst for business progress and disciplined enterprise growth."
          />

          {/* Interactive Visual Breakdown */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Center Brandmark showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/images/official-logo.jpg"
                  alt="WISEMINDS Official Brandmark"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="text-xs font-bold text-[#FDE805] uppercase tracking-widest">
                  Official Client Insignia
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  WISEMINDS BUSINESS CONSULTING LLP
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Purpose | Process | Practice
                </p>
              </div>
            </div>

            {/* Elements Explanation */}
            <div className="lg:col-span-7 space-y-6">
              {/* Element 1: The Flower */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#00129C] border border-[#FDE805]/40 text-[#FDE805] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-lg font-bold text-white">The Flower</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-11">
                  Represents a flourishing, well-structured business supported by WISEMINDS services, progressing towards sustainable growth. Its progressive petals symbolize the journey of an enterprise from its initial conceptualization through structured development, operational maturity, and sustainable growth.
                </p>
              </div>

              {/* Element 2: The Yellow Dot */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FDE805] text-[#0B1739] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-lg font-bold text-[#FDE805]">The Yellow Dot</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-11">
                  Represents the spark that ignites business potential. It represents strategic insight, intellectual energy, innovation, and the confidence required to kickstart, sustain, and scale a business.
                </p>
              </div>

              {/* Element 3: The Arc */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#00129C] border border-[#FDE805]/40 text-[#FDE805] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="text-lg font-bold text-white">The Arc</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-11">
                  Represents the business progress, advancement, and growth enabled through WISEMINDS consulting services. Its upward curvature symbolizes continuous advancement, operational stability, structured guidance, and sustainable enterprise expansion.
                </p>
              </div>

              <div className="pt-2 pl-11">
                <Link
                  href="/brand-identity"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FDE805] hover:underline"
                >
                  <span>Explore complete brand philosophy & colour psychology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORPORATE COLORS & SIGNIFICANCE */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Color Psychology"
            title="Corporate Colors and Their Significance"
            description="Our palette adheres strictly to a 60–30–10 editorial balance, balancing clarity, authority, and catalytic optimism."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Royal Blue Swatch Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md">
              <div className="h-28 bg-[#2446A8] flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                    Primary Brand Color
                  </span>
                  <div className="text-xl font-bold flex items-center gap-3">
                    Royal Blue
                    <span className="text-xs px-2 py-0.5 bg-white/20 rounded font-mono">
                      #2446A8
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="text-base font-bold text-[#0B1739]">
                  Symbolism & Meaning
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY.colorSignificance.royalBlue}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Application: Corporate identity, structural anchors, typography</span>
                  <span className="font-semibold text-[#2446A8]">30% Dominance</span>
                </div>
              </div>
            </div>

            {/* Golden Yellow Swatch Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md">
              <div className="h-28 bg-[#F4C430] flex items-end p-6">
                <div className="text-[#0B1739]">
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                    Catalyst Accent Color
                  </span>
                  <div className="text-xl font-bold flex items-center gap-3">
                    Golden Yellow
                    <span className="text-xs px-2 py-0.5 bg-black/10 rounded font-mono">
                      #F4C430
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="text-base font-bold text-[#0B1739]">
                  Symbolism & Meaning
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY.colorSignificance.goldenYellow}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Application: Strategic CTAs, spark points, key milestones</span>
                  <span className="font-semibold text-[#8F6B00]">10% Strategic Focus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Palette Breakdown */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded bg-[#0B1739] border border-slate-300" />
              <span><strong>Deep Navy (#0B1739):</strong> Executive grounding & deep contrast</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded bg-[#F7F8FC] border border-slate-300" />
              <span><strong>Off-White (#F7F8FC):</strong> Editorial whitespace & readability (60%)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded bg-[#475569] border border-slate-300" />
              <span><strong>Text Grey (#475569):</strong> Balanced typographic hierarchy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA STRIP */}
      <section className="py-16 bg-[#2446A8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to work with a partner who understands your business?
            </h3>
            <p className="text-sm text-slate-200 mt-1">
              Schedule an introductory consultation with our senior consulting partners.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow transition-colors shrink-0"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
