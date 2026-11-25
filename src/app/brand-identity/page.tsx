import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Flame,
  Award,
  BookOpen,
  Waves,
  Crown,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Brand Identity & Corporate Colour Significance | WISEMINDS",
  description:
    "Explore the symbolism behind the WISEMINDS brandmark—The Flower, The Yellow Dot, and The Arc—and the corporate colour significance of Royal Blue (#2446A8) and Golden Yellow (#F4C430).",
};

export default function BrandIdentityPage() {
  return (
    <div className="bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-[#0B1739] text-white py-16 sm:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 dark-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#2446A8]/40 text-[#F4C430] border border-[#F4C430]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
              Our Brand Philosophy
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The Meaning Behind Our Brandmark
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              The WISEMINDS brandmark reflects our commitment to enabling businesses through clarity of purpose, structured processes, disciplined execution, and sustainable growth. Every element of our identity carries a meaningful representation of our consulting philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LOGO SYMBOLISM SECTION */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Our Brand Philosophy"
            title="The Meaning Behind Our Brandmark"
            description="The WISEMINDS brandmark reflects our commitment to enabling businesses through clarity of purpose, structured processes, disciplined execution, and sustainable growth. Every element of our identity carries a meaningful representation of our consulting philosophy."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Original Official Logo Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-[#00129C] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/images/official-logo.jpg"
                    alt="Official WISEMINDS Brandmark"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 pt-5 border-t border-white/15 text-center">
                  <span className="text-[11px] font-bold text-[#F4C430] uppercase tracking-widest">
                    Official Insignia
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    WISEMINDS BUSINESS CONSULTING LLP
                  </p>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Purpose | Process | Practice
                  </p>
                </div>
              </div>

              {/* Annotation pill */}
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#2446A8]" />
                <span>Original Official Brandmark Asset</span>
              </div>
            </div>

            {/* Right: Three Symbolism Explanations */}
            <div className="lg:col-span-7 space-y-6">
              {/* 01 - The Flower */}
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-[#2446A8] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                    A
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1739]">
                    The Flower
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-12">
                  <p className="font-semibold text-[#0B1739]">
                    The intertwined flower sitting firmly above Brandmark reflects a Flourishing yet well defined Business from Early Stage to Scale.
                  </p>
                  <p className="text-slate-600">
                    Its progressive petals symbolize the journey of an enterprise supported by WISEMINDS consulting services—advancing from its initial conceptualization through structured development, operational maturity, and sustainable growth.
                  </p>
                </div>
              </div>

              {/* 02 - The Yellow Dot */}
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-[#F4C430] text-[#0B1739] font-extrabold text-sm flex items-center justify-center shrink-0">
                    B
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1739]">
                    The Yellow Dot on &lsquo;I&rsquo;
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-12">
                  <p className="font-semibold text-[#0B1739]">
                    The Yellow Dot on &lsquo;I&rsquo; represents a Prompt ignition of the Spark in Business to Kickstart, Sustain &amp; Scale Business.
                  </p>
                  <p className="text-slate-600">
                    It symbolizes strategic insight, intellectual energy, innovation, and the decisive confidence required to ignite enterprise potential and maintain operational momentum.
                  </p>
                </div>
              </div>

              {/* 03 - The Ark */}
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-[#2446A8] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                    C
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1739]">
                    The Ark
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-12">
                  <p className="font-semibold text-[#0B1739]">
                    The Ark towards extreme right over the Brandmark signifies the assured Growth offered through defined service offerings of WBC*.
                  </p>
                  <p className="text-slate-600">
                    Its upward curvature represents WBC&rsquo;s foundational commitment to enabling business progress, operational stability, structured governance, and sustainable enterprise expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE COLOURS & SIGNIFICANCE */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Colour Philosophy"
            title="Corporate Colours and Their Significance"
            description="The WISEMINDS corporate colour palette brings together the authority and stability of Royal Blue with the optimism and intellectual energy of Golden Yellow. Together, these colours reflect our commitment to professional excellence, meaningful business transformation, and sustainable prosperity."
          />

          <div className="mt-16 space-y-16">
            {/* COLOR 1: ROYAL BLUE */}
            <div className="rounded-2xl border border-slate-200 bg-[#F7F8FC] overflow-hidden shadow-sm">
              {/* Header Swatch */}
              <div className="bg-[#2446A8] text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F4C430]">
                    Primary Corporate Colour • 30% System Allocation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Royal Blue
                  </h3>
                  <p className="text-sm font-semibold text-blue-100 mt-0.5">
                    Trust • Wisdom • Authority • Stability
                  </p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 font-mono text-sm font-bold text-white self-start sm:self-center">
                  #2446A8
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 sm:p-10 space-y-8">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Most widely applied Color Signifies Regality, Luxury of high status, Trust, Reliability, Protection, Calmness &amp; Depth. Traditionally associated with royalty, nobility, and high status.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Pillar 1 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#2446A8] font-bold text-sm mb-2">
                      <Crown className="w-4 h-4" />
                      <h4>Regality and Distinction</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Traditionally associated with royalty, nobility, and high status, Royal Blue represents dignity, sophistication, leadership, and a high standard of professional excellence.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#2446A8] font-bold text-sm mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <h4>Trust and Reliability</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      In color psychology, it represents confidence, authority, security, dependability, and professionalism. These qualities define the foundation of our consulting relationships.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#2446A8] font-bold text-sm mb-2">
                      <Sparkles className="w-4 h-4" />
                      <h4>Spirituality and Protection</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Often linked to wisdom, divine energy, and the use of amulets to ward off negative influences across various cultures, providing inner strength and resilience.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#2446A8] font-bold text-sm mb-2">
                      <Waves className="w-4 h-4" />
                      <h4>Calmness and Depth</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Its connection to the vastness of the sea and sky brings a sense of inner strength, stability, clarity, and thoughtful strategic decision-making.
                    </p>
                  </div>
                </div>

                {/* Connection to WISEMINDS */}
                <div className="p-6 bg-blue-50 border-l-4 border-[#2446A8] rounded-r-xl">
                  <h4 className="text-xs font-bold text-[#2446A8] uppercase tracking-wider mb-1">
                    Connection to WISEMINDS
                  </h4>
                  <p className="text-sm font-semibold text-[#0B1739] leading-relaxed">
                    Royal Blue reflects our commitment to trustworthy partnerships, disciplined consulting, structured governance, and reliable business guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* COLOR 2: GOLDEN YELLOW */}
            <div className="rounded-2xl border border-slate-200 bg-[#F7F8FC] overflow-hidden shadow-sm">
              {/* Header Swatch */}
              <div className="bg-[#F4C430] text-[#0B1739] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0B1739]/80">
                    Strategic Accent Colour • 10% System Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1739] mt-1">
                    Golden Yellow
                  </h3>
                  <p className="text-sm font-semibold text-[#0B1739]/90 mt-0.5">
                    Optimism • Intelligence • Confidence • Prosperity
                  </p>
                </div>
                <div className="bg-black/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-black/15 font-mono text-sm font-bold text-[#0B1739] self-start sm:self-center">
                  #F4C430
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 sm:p-10 space-y-8">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Golden Yellow Spiritually attracts light, vitality, positive energy, and renewed confidence that inspire businesses to discover opportunities and pursue meaningful growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {/* Pillar 1 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#8F6B00] font-bold text-sm mb-2">
                      <Sun className="w-4 h-4" />
                      <h4>Joy and Optimism</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Naturally drawing light, happiness, and a sense of renewal, helping to clear away emotional heaviness and embrace new business horizons.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#8F6B00] font-bold text-sm mb-2">
                      <BookOpen className="w-4 h-4" />
                      <h4>Wisdom and Intellect</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Stimulating curiosity, clear thinking, and mental clarity, often attracting opportunities for learning, problem-solving, and strategic clarity.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#8F6B00] font-bold text-sm mb-2">
                      <Flame className="w-4 h-4" />
                      <h4>Personal Power and Confidence</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Linked to the third solar plexus chakra, yellow attracts self-esteem, willpower, and the courage to step into your own authenticity as an enterprise leader.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5 text-[#8F6B00] font-bold text-sm mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <h4>Prosperity and Good Fortune</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Are often byproducts. In many traditions, gold and bright yellow are used to manifest wealth, financial expansion—in short, Business Growth.
                    </p>
                  </div>

                  {/* Pillar 5 */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 md:col-span-2 lg:col-span-2">
                    <div className="flex items-center gap-2.5 text-[#8F6B00] font-bold text-sm mb-2">
                      <Award className="w-4 h-4" />
                      <h4>Divine Connection and Enlightenment</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Spiritually, yellow represents the ray of light that guides you toward higher truths, divine presence, and a clear life and enterprise purpose.
                    </p>
                  </div>
                </div>

                {/* Connection to WISEMINDS */}
                <div className="p-6 bg-amber-50 border-l-4 border-[#F4C430] rounded-r-xl">
                  <h4 className="text-xs font-bold text-[#8F6B00] uppercase tracking-wider mb-1">
                    Connection to WISEMINDS
                  </h4>
                  <p className="text-sm font-semibold text-[#0B1739] leading-relaxed">
                    Golden Yellow represents our role as a catalyst for business transformation, empowering entrepreneurs to recognize their potential, make confident decisions, and pursue sustainable profitability.
                  </p>
                </div>

                {/* Cultural note disclaimer */}
                <p className="text-xs text-slate-500 italic">
                  * Note: Cultural and spiritual associations are presented respectfully as historical and symbolic elements of our brand philosophy, rather than scientific effects or guarantees of commercial success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WEBSITE COLOUR DISTRIBUTION SYSTEM */}
      <section className="py-16 bg-[#F7F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#2446A8] uppercase tracking-widest">
              Design Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1739] mt-1">
              60–30–10 Colour Balance System
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our website adheres to strict corporate colour ratios to guarantee clarity, authority, and accessible contrast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 60% */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#F7F8FC] border border-slate-300 flex items-center justify-center font-mono font-bold text-xs text-slate-700 shrink-0">
                60%
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#0B1739]">Off-White (#F7F8FC)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Primary canvas backgrounds, generous whitespace, content readability, and editorial clarity.
                </p>
              </div>
            </div>

            {/* 30% */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#2446A8] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                30%
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#0B1739]">Royal Blue (#2446A8)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Corporate identity, headings, structural cards, navigation, and key brand anchors.
                </p>
              </div>
            </div>

            {/* 10% */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#F4C430] text-[#0B1739] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                10%
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#0B1739]">Golden Yellow (#F4C430)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Controlled strategic accents, highlights, key milestone indicators, and interactive CTAs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING BRAND STATEMENT */}
      <section className="py-20 lg:py-24 bg-[#0B1739] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark-grid-bg pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4C430]/20 text-[#F4C430] border border-[#F4C430]/30 text-xs font-bold uppercase tracking-wider">
            Our Purpose & Commitment
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trust in Every Partnership. A Spark in Every Business.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Our identity represents more than a visual mark. It reflects our commitment to guiding enterprises with wisdom, strengthening them through structured processes, and empowering them to achieve sustainable growth with confidence.
          </p>

          <div className="pt-2">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-white/10 text-[#F4C430] font-bold text-sm tracking-widest uppercase border border-white/15">
              Purpose. Process. Practice.
            </span>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F4C430] hover:bg-[#E5B520] text-[#0B1739] font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors"
            >
              <span>Explore Consulting Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
