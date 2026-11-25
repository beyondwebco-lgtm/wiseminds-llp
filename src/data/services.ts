export interface ServiceOffering {
  id: string;
  slug: string;
  title: string;
  category: "Core" | "Specialized";
  tagline: string;
  overview: string;
  challenges: string[];
  methodology: string[];
  deliverables: string[];
  benefits: string[];
  icon: string;
  featuredInHome?: boolean;
}

export const SERVICES: ServiceOffering[] = [
  {
    id: "process-consulting",
    slug: "process-consulting",
    title: "Process Consulting",
    category: "Core",
    tagline: "Architecting standard operating rigor for operational stability and growth",
    overview:
      "WISEMINDS designs and streamlines operational processes that eliminate bottlenecks, improve resource efficiency, and establish institutional muscle. We evaluate current workflows, uncover hidden leakage, and institute clear Standard Operating Procedures (SOPs) engineered for MSME agility.",
    challenges: [
      "Inconsistent day-to-day execution relying heavily on ad-hoc founder intervention",
      "Undefined or unmeasured operating metrics leading to margin erosion",
      "Lack of scalable operating models when order volumes or headcounts increase",
      "Absence of business feasibility validation before capital expenditure",
    ],
    methodology: [
      "Diagnostic Business Feasibility & Preliminary Evaluation",
      "Process Mapping, Value Stream Analysis & Waste Elimination",
      "SOP Formalization & Operational Milestone Engineering",
      "Pilot Rollout, KPI Dashboarding & Change Enablement",
    ],
    deliverables: [
      "Business Feasibility Studies & Preliminary Evaluation Reports",
      "Comprehensive Standard Operating Procedures (SOPs)",
      "Strategic Operational Roadmaps with Quarter-by-Quarter Milestones",
      "Operational KPI Dashboards and Performance Review Protocols",
      "Business Scalability and Operational Continuity Frameworks",
    ],
    benefits: [
      "Significant reduction in turnaround times and operational rework",
      "Delegable, predictable operations reducing owner dependency",
      "Structured unit economics and improved gross margins",
      "Audit-ready and compliance-resilient operational workflows",
    ],
    icon: "Settings2",
    featuredInHome: true,
  },
  {
    id: "startup-mentoring",
    slug: "startup-mentoring",
    title: "Startup Mentoring",
    category: "Core",
    tagline: "Solidifying fundamentals and mitigating early-stage execution risks",
    overview:
      "WISEMINDS equips early-stage founders and MSME entrepreneurs with battle-tested strategic guidance. Drawing on over 125 years of multidisciplinary business experience, we guide startups through product-market validation, financial modeling, governance, and disciplined scaling.",
    challenges: [
      "Premature scaling without validated unit economics or demand clarity",
      "Unstructured capital allocation resulting in early cash runway burnout",
      "Vulnerability to regulatory, legal, and contractual oversights",
      "Difficulty establishing clear accountability and milestone tracking among founders",
    ],
    methodology: [
      "Business Model & Fundamental Value Proposition Assessment",
      "Risk Identification & Mitigation Matrix Formulation",
      "Milestone-Driven Growth Strategy Planning",
      "Fortnightly Advisory, Progress Checkpoints & Course Corrections",
    ],
    deliverables: [
      "Fundamental Business Model Canvas & Validation Plan",
      "Comprehensive Risk Identification & Mitigation Matrix",
      "Early-Stage Milestone Roadmap (0–18 Months)",
      "Cash Flow Stewardship & Working Capital Operating Model",
      "Sustainable Startup Governance & Founder Alignment Charter",
    ],
    benefits: [
      "Lowered probability of fatal early execution mistakes",
      "Prudent runway management and capital-efficient growth",
      "Enhanced credibility with angel investors, lenders, and key partners",
      "Structured focus on profitability over reckless vanity metrics",
    ],
    icon: "Rocket",
    featuredInHome: true,
  },
  {
    id: "executive-coaching",
    slug: "executive-coaching",
    title: "Executive Coaching",
    category: "Core",
    tagline: "Elevating leadership capacity, governance, and organizational decision-making",
    overview:
      "A growing enterprise requires leadership that evolves ahead of the business. WISEMINDS provides one-on-one executive and founder coaching centered on strategic clarity, managerial delegation, high-stakes decision frameworks, and corporate governance for MSME leadership teams.",
    challenges: [
      "Founders trapped in micro-management and tactical firefighting",
      "Executive fatigue and cognitive overload during high-stakes transitions",
      "Friction in second-line leadership development and team alignment",
      "Gaps in board governance, transparency, and strategic oversight",
    ],
    methodology: [
      "Leadership Competency & Organizational Friction Assessment",
      "Personalized Executive Development & Governance Architecture",
      "Bi-Weekly Executive Coaching Sprints & Action Alignment",
      "Multi-Stakeholder Feedback & Operational Impact Reviews",
    ],
    deliverables: [
      "Leadership Development & Capacity Building Blueprint",
      "Organizational Delegation & Decision-Rights Framework (RACI)",
      "Founder-Focused Mentoring & Transition Roadmaps",
      "Corporate Governance & Business Administration Structure",
      "Executive Performance & Accountability Scorecards",
    ],
    benefits: [
      "Seamless transition from operator to strategic business leader",
      "Empowered mid-level leadership delivering without constant supervision",
      "Heightened decision clarity under uncertainty and market volatility",
      "Culture of institutional discipline, integrity, and operational pride",
    ],
    icon: "Users",
    featuredInHome: true,
  },
  {
    id: "transition-management",
    slug: "transition-management",
    title: "Sector Agnostic Transition Management Services",
    category: "Specialized",
    tagline: "Guiding businesses through restructuring, generational handover, and strategic pivots",
    overview:
      "When enterprises face leadership succession, business model transitions, or systemic market shifts, WISEMINDS provides rigorous change architecture. We preserve core business strengths while systematically introducing modern systems, governance, and growth orientation.",
    challenges: [
      "Resistance to change and cultural inertia during technological or process updates",
      "Generational handover friction in family-owned MSMEs",
      "Disruption to ongoing customer commitments during business restructuring",
      "Unclear handover roadmaps causing key talent departure",
    ],
    methodology: [
      "Change Readiness Audit & Stakeholder Alignment Analysis",
      "Phased Transition Roadmap Formulation with Risk Safeguards",
      "Interim Governance & Dual-Track Operations Management",
      "Institutionalization & Post-Transition Stability Verification",
    ],
    deliverables: [
      "Enterprise Transition Roadmap & Change Risk Blueprint",
      "Generational & Leadership Succession Guidelines",
      "Interim Operating Framework & Governance Protocols",
      "Talent Retention & Stakeholder Communication Matrix",
    ],
    benefits: [
      "Zero disruption to revenue continuity during critical transitions",
      "Preservation of legacy institutional knowledge with modern practices",
      "Smooth stakeholder and supplier alignment across every milestone",
    ],
    icon: "Repeat",
    featuredInHome: true,
  },
  {
    id: "incubation-centres",
    slug: "incubation-centres",
    title: "Incubation Centre Concept to Establishment & Management",
    category: "Specialized",
    tagline: "End-to-end setup and administration of enterprise, academic, and regional incubators",
    overview:
      "We partner with academic institutions, corporate bodies, and regional development organizations to conceptualize, establish, and run high-impact incubation centers that foster sustainable entrepreneurship.",
    challenges: [
      "Underutilized incubation infrastructure lacking structured cohort pipelines",
      "Absence of rigorous cohort selection, mentoring, and monitoring mechanisms",
      "Difficulty connecting early-stage innovators with market demand and capital",
      "Complex compliance and grant utilization management",
    ],
    methodology: [
      "Feasibility Study, Sector Focus & Operating Model Design",
      "Physical & Digital Infrastructure Specification",
      "Mentor Network, Curriculum & Cohort Selection Framework Setup",
      "Ongoing Center Governance, Event Architecture & Impact Reporting",
    ],
    deliverables: [
      "Incubation Center DPR (Detailed Project Report) & Feasibility Study",
      "Standard Operating Procedures for Cohort Onboarding & Evaluation",
      "Curated Startup Mentoring Curriculum & Industry Advisory Roster",
      "Governance & Grant Compliance Reporting Dashboards",
    ],
    benefits: [
      "Self-sustaining, accredited incubator operations",
      "Measurable startup success metrics and regional innovation impact",
      "Strong corporate-academia-startup linkage for commercialization",
    ],
    icon: "Building2",
    featuredInHome: true,
  },
  {
    id: "esg-consulting",
    slug: "esg-consulting",
    title: "MSME Focused Environment & Social Governance",
    category: "Specialized",
    tagline: "Pragmatic, cost-effective ESG integration unlocking supply chain compliance",
    overview:
      "Global supply chains increasingly mandate ESG compliance. WISEMINDS translates complex Environmental, Social, and Governance standards into pragmatic, affordable roadmaps tailored specifically for Indian MSMEs.",
    challenges: [
      "MSMEs losing export or vendor orders due to lack of verified ESG compliance",
      "Costly, over-engineered ESG frameworks created for multinational enterprises",
      "Difficulty measuring carbon footprint, energy efficiency, and waste streams",
      "Inadequate workplace safety, labor governance, and ethical documentation",
    ],
    methodology: [
      "MSME Baseline ESG Gap Analysis & Tiered Risk Audit",
      "Pragmatic Sustainability Roadmap Formulation",
      "Policy Formulation (EHS, Fair Labor, Supply Chain Ethics)",
      "Vendor Assessment Preparation & ESG Compliance Disclosure Support",
    ],
    deliverables: [
      "MSME ESG Readiness Scorecard & Priority Gap Report",
      "Environmental & Resource Efficiency Improvement Plan",
      "Social & Workplace Governance Documentation Suite",
      "Export & Tier-1 Supplier Compliance Verification Portfolio",
    ],
    benefits: [
      "Eligibility for global vendor networks and large enterprise supply chains",
      "Lower operational costs through reduced energy and raw material waste",
      "Favorable assessment from sustainability-focused lenders and banks",
    ],
    icon: "ShieldCheck",
    featuredInHome: true,
  },
  {
    id: "quick-commerce",
    slug: "quick-commerce",
    title: "Quick Commerce Robust Supplychain & Logistics Management",
    category: "Specialized",
    tagline: "Optimizing dark store replenishment, inventory velocity, and micro-fulfillment",
    overview:
      "Rapidly scaling quick commerce and hyper-local delivery demand hyper-accurate logistics. WISEMINDS designs resilient inventory velocity, hub-and-spoke replenishment networks, and vendor integration models.",
    challenges: [
      "High stockouts and stock write-offs due to inventory synchronization delays",
      "Inefficient micro-hub routing increasing last-mile delivery overheads",
      "Friction between regional MSME producers and platform dark stores",
      "Perishable shrinkage and inconsistent cold chain integrity",
    ],
    methodology: [
      "Network Velocity Analysis & SKU Rationalization",
      "Hub-and-Spoke Logistics & Demand Forecasting Alignment",
      "Dark Store Layout Optimization & Reverse Logistics Engineering",
      "SLA Monitoring & Real-Time Performance Audits",
    ],
    deliverables: [
      "Q-Commerce Logistics & Fulfillment Architecture Blueprints",
      "Inventory Turnover & Demand Replenishment Algorithms",
      "Dark Store Operations Manual & Quality Control Checkpoints",
      "Vendor Fulfillment Service Level Agreement (SLA) Matrix",
    ],
    benefits: [
      "Drastic reduction in stockout rates and unsellable write-offs",
      "Faster fulfillment turnaround and lower cost-per-dispatch",
      "Predictable replenishment cadences for upstream MSME suppliers",
    ],
    icon: "Truck",
    featuredInHome: true,
  },
  {
    id: "legal-process-outsourcing",
    slug: "legal-process-outsourcing",
    title: "Legal Process Outsourcing (LPO) for MSMEs",
    category: "Specialized",
    tagline: "Structured, cost-effective corporate legal process documentation and compliance management",
    overview:
      "High legal costs should never jeopardize MSME compliance or commercial agreements. WISEMINDS delivers streamlined legal process management, vendor contract standardization, and regulatory compliance monitoring.",
    challenges: [
      "Exorbitant legal fees for standard commercial drafting and contract reviews",
      "Unstandardized vendor and client agreements exposing businesses to liabilities",
      "Lapse in statutory filings, corporate licenses, and trademark protections",
      "Absence of internal contract repositories and renewal notification systems",
    ],
    methodology: [
      "Corporate Contract & Compliance Exposure Audit",
      "Standard Agreement Templatization & Playbook Creation",
      "Contract Lifecycle Workflow Implementation",
      "Routine Corporate Secretarial & Regulatory Filing Support",
    ],
    deliverables: [
      "Standard Corporate Agreement Portfolio (NDAs, MSAs, SOWs, Employment)",
      "Statutory Compliance Calendar & Renewal Protocol",
      "Intellectual Property & Trademark Process Documentation",
      "Risk Mitigation Playbook for Vendor & Customer Disputes",
    ],
    benefits: [
      "Up to 60% reduction in routine corporate legal expenditures",
      "Protection against onerous indemnities and contractual ambiguities",
      "Always-current statutory compliance preventing financial penalties",
    ],
    icon: "FileText",
    featuredInHome: true,
  },
];
