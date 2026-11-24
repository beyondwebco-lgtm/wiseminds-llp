export interface SectorDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  subsectors: string[];
  keyChallenges: string[];
  wisemindsInterventions: string[];
  impactOutcomes: string[];
  image: string;
}

export const SECTORS: SectorDetail[] = [
  {
    id: "integrated-media",
    slug: "integrated-media",
    title: "Integrated Media Management",
    tagline: "Transforming traditional publishing and broadcasting into unified multi-channel operations",
    description:
      "With over a century of collective background in print, broadcasting, and modern digital ecosystems, WISEMINDS provides deep operational consulting for media houses, content studios, and digital publishers navigating rapid digital disruption.",
    subsectors: [
      "Print & Digital Publishing",
      "Television & Broadcast Production",
      "Digital Media Platforms & OTT",
      "Social Media Ecosystems & Creator Networks",
    ],
    keyChallenges: [
      "Migrating legacy editorial workflows into agile multi-format digital pipelines",
      "Monetization model volatility and declining print/linear ad yields",
      "Content rights, syndication management, and digital piracy risks",
      "High overhead costs in legacy studio and distribution operations",
    ],
    wisemindsInterventions: [
      "Editorial Workflow Streamlining & Content Lifecycle Automation",
      "Multi-Channel Monetization & Subscription Funnel Architecture",
      "Broadcast Production Cost Optimization & Technology Benchmarking",
      "Digital Rights, Licensing & Syndication Governance Frameworks",
    ],
    impactOutcomes: [
      "Accelerated content publishing velocity across print and digital",
      "Diversified revenue streams combining programmatic, sponsored, and subscription",
      "Sustained editorial quality with lean operational overheads",
    ],
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "agriculture",
    slug: "agriculture",
    title: "Agriculture & Sustainable Cultivation",
    tagline: "Standardizing agricultural supply chains, MRL compliance, and farm-to-shelf value creation",
    description:
      "We assist agricultural enterprises, farmer producer organizations (FPOs), and agri-processors in institutionalizing disciplined cultivation practices, meeting stringent Minimum Residue Limits (MRL), and accessing premium market linkages.",
    subsectors: [
      "Minimum Residue Limits (MRL) Cultivation & Processing",
      "Sustainable Agricultural Value Chains",
      "Post-Harvest Storage & Processing Units",
      "Farmer Producer Organizations (FPOs) Business Architecture",
    ],
    keyChallenges: [
      "High rejection rates in export markets due to chemical residue violations",
      "Fragmented farm-gate procurement and post-harvest wastage",
      "Inability of smallholder clusters to negotiate fair price realizations",
      "Lack of traceable documentation required for organic and export certification",
    ],
    wisemindsInterventions: [
      "MRL Protocol Implementation & Farm Practice Standardization",
      "Supply Chain Traceability & Cold Chain Integration Roadmaps",
      "FPO Governance, Business Planning & Commercial Market Linkage",
      "Agri-Processing Quality Management & Standard Operating Procedures",
    ],
    impactOutcomes: [
      "Zero export batch rejections through verified MRL compliance",
      "Reduced post-harvest losses and predictable farm procurement schedules",
      "Enhanced economic realization for participating farmer networks",
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rural-development",
    slug: "rural-development",
    title: "Rural Development & Rurban Frameworks",
    tagline: "Bridging the rural-urban divide with scalable enterprise and livelihood frameworks",
    description:
      "WISEMINDS designs and executes the Integrated Rurban Development Framework, translating proven socio-economic development practices into self-sustaining local micro-economies and community enterprises.",
    subsectors: [
      "Integrated Rurban Development Framework (IRDF)",
      "Rural Micro-Enterprise Incubation",
      "Community Livelihood Cooperatives",
      "Decentralized Rural Services & Infrastructure Models",
    ],
    keyChallenges: [
      "Economic migration due to lack of non-farm employment opportunities",
      "Ineffective deployment and monitoring of rural livelihood grants",
      "Absence of marketing channels for rural artisans and micro-producers",
      "Limited access to credit and working capital for community groups",
    ],
    wisemindsInterventions: [
      "Rurban Cluster Economic Mapping & Potential Identification",
      "Micro-Enterprise Incubation and Skill Development Protocols",
      "Market Aggregation Centers and Collective Brand Building",
      "Social Impact Monitoring & Transparent Program Governance",
    ],
    impactOutcomes: [
      "Sustainable local employment generation mitigating distress migration",
      "Viable community-owned micro-enterprises with positive unit economics",
      "Measurable enhancement in household income security",
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "renewable-energy",
    slug: "renewable-energy",
    title: "Renewable Energy Management",
    tagline: "Engineering Compressed Biogas plants and conceptualizing Net Zero campuses",
    description:
      "We advise industrial clients, agricultural processors, and educational institutions on the technical and commercial viability of Compressed Biogas (CBG) infrastructure and Net Zero campus transformations.",
    subsectors: [
      "Compressed Biogas (CBG) Plant Design & Establishment",
      "Net Zero Campus Conceptualization & Roadmap",
      "Biomass Feedstock Supply Chain Management",
      "Carbon Credit & Renewable Energy Governance",
    ],
    keyChallenges: [
      "High upfront capex risks without rigorous feedstock availability modeling",
      "Complex regulatory, off-take agreement, and environmental clearances",
      "Operational downtime in anaerobic digestion and purification systems",
      "Difficulty structuring Net Zero milestones across existing brownfield facilities",
    ],
    wisemindsInterventions: [
      "CBG Feedstock Mapping, Pre-Feasibility & Detailed Project Reports",
      "Off-Take Strategy (SATAT Scheme Alignment & Commercial Agreements)",
      "Net Zero Campus Masterplanning (Energy, Water, Waste Audits)",
      "Vendor Selection, EPC Governance & Milestone Monitoring",
    ],
    impactOutcomes: [
      "Bankable, bank-approved Detailed Project Reports (DPRs)",
      "Secure multi-year feedstock supply arrangements",
      "Clear, verified path to operational carbon neutrality and energy savings",
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "startup-legal",
    slug: "startup-legal",
    title: "Startup Legal Processes",
    tagline: "Guiding emerging ventures through compliance, IP safeguarding, and investor readiness",
    description:
      "Startups face complex regulatory terrain. WISEMINDS provides founder-centric guidance through statutory compliance, intellectual property protection, founder vesting agreements, and investment diligence readiness.",
    subsectors: [
      "Startup Regulatory Compliance Architecture",
      "Founder & Co-founder Vesting Charters",
      "Early-Stage Intellectual Property Safeguarding",
      "Due Diligence & Investment Term-Sheet Review",
    ],
    keyChallenges: [
      "Ambiguous equity distribution and lack of reverse vesting triggering founder disputes",
      "Failure to secure trademarks or assign IP created by contractors to the company",
      "Non-compliant statutory filings leading to heavy late fees and legal notices",
      "Lengthy due diligence cycles delaying venture capital or angel disbursements",
    ],
    wisemindsInterventions: [
      "Co-founder Agreements & Vesting Schedule Formulation",
      "IP Assignment, Trademark & Trade Secret Protection Protocols",
      "Investor Diligence Room Preparation & Compliance Clean-Up",
      "Vendor & Client Master Services Agreement Templatization",
    ],
    impactOutcomes: [
      "Zero governance disputes among co-founders and early stakeholders",
      "Rapid closure of due diligence rounds with institutional angels and funds",
      "Bulletproof ownership of intellectual property and digital assets",
    ],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hospitality",
    slug: "hospitality",
    title: "Hospitality Management",
    tagline: "Optimizing operational yields, guest service standards, and cost discipline",
    description:
      "Drawing from decades of frontline hospitality and resort management experience, WISEMINDS works with boutique hotels, resorts, and food service chains to elevate guest delight, streamline procurement, and protect operating margins.",
    subsectors: [
      "Boutique Hotel & Resort Operations",
      "Food & Beverage Cost Management & Menu Engineering",
      "Hospitality Service Standards & Team Training",
      "Pre-Opening Consulting & Asset Refurbishment",
    ],
    keyChallenges: [
      "Food and beverage waste eroding operating margins",
      "High staff attrition and inconsistent guest service delivery",
      "Inefficient revenue management across online travel agents (OTAs)",
      "Lapse in health, safety, and food regulatory standard compliances",
    ],
    wisemindsInterventions: [
      "F&B Portion Control, Recipe Standard Costing & Waste Audits",
      "Guest Journey Mapping & Service Delivery SOP Certification",
      "Direct Booking Yield Strategies & OTA Channel Optimization",
      "Operational Turnaround Protocols for Distressed Hospitality Assets",
    ],
    impactOutcomes: [
      "Direct enhancement in gross operating profit per available room (GOPPAR)",
      "Consistent 4.5+ star guest reviews across major booking platforms",
      "Optimized kitchen and housekeeping staffing rosters without burnout",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "insurance",
    slug: "insurance",
    title: "Insurance Management",
    tagline: "Streamlining agency distribution, claims process governance, and broker operations",
    description:
      "We provide business process consulting to insurance intermediaries, corporate agency networks, and MSME risk managers to optimize underwriting workflows, claims turnaround, and regulatory reporting.",
    subsectors: [
      "Corporate Insurance Agency Operations",
      "MSME Commercial Risk Assessment & Portfolio Structuring",
      "Claims Process Governance & Turnaround Acceleration",
      "Regulatory Compliance & Distributor Onboarding",
    ],
    keyChallenges: [
      "Prolonged claim settlement timelines damaging customer retention",
      "High acquisition costs per policyholder in competitive segments",
      "Complex IRDAI compliance documentation and broker reporting requirements",
      "Inadequate risk profiling for MSME commercial and fire policies",
    ],
    wisemindsInterventions: [
      "Claims Documentation Digitization & Expedited Verification SOPs",
      "Agency Network Performance Management & Training Architectures",
      "MSME Corporate Risk Profiling & Commercial Policy Auditing",
      "Compliance Automation & Audit Trail Institutionalization",
    ],
    impactOutcomes: [
      "Up to 40% reduction in average corporate claim resolution cycle time",
      "Higher policyholder retention rates and renewal predictability",
      "Flawless adherence to insurance regulator reporting norms",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];
