export interface FrameworkStage {
  number: string;
  code: string;
  title: string;
  headline: string;
  summary: string;
  description: string;
  steps: string[];
  outputs: string[];
  quote: string;
}

export const APPROACH_STAGES: FrameworkStage[] = [
  {
    number: "01",
    code: "PURPOSE",
    title: "PURPOSE",
    headline: "Define the Core Business Intent & Strategic Alignment",
    summary:
      "Define the purpose of the business by aligning its vision, mission and strategic objectives.",
    description:
      "Every lasting enterprise begins with clarity of purpose. In Stage 01, WISEMINDS works closely with founders and leadership to deconstruct their core business drivers, identify the authentic market problem being solved, align the founding team's long-term vision, and establish non-negotiable strategic priorities. Without this foundational clarity, growth creates chaos rather than value.",
    steps: [
      "Diagnostic Founder & Stakeholder Vision Alignment",
      "Market Problem Definition & Customer Value Validation",
      "Business Model Viability & Strategic Objective Formulation",
      "Core Values & Non-Negotiable Governance Criteria Establishment",
    ],
    outputs: [
      "Institutional Purpose Statement & Strategic Charter",
      "Market Value Proposition Matrix",
      "Long-Term Enterprise Goal Roadmap (3–5 Years)",
      "Founding Team Alignment Agreement",
    ],
    quote: "A business with clarity of purpose navigates market storms with resilience and conviction.",
  },
  {
    number: "02",
    code: "PROCESS",
    title: "PROCESS",
    headline: "Translate Purpose into Structured Operational Roadmaps",
    summary:
      "Translate business purpose into structured operational processes, clear roadmaps and measurable milestones.",
    description:
      "Intent must be translated into repeatable, institutional systems. In Stage 02, we architect the operational blueprint of the enterprise. We eliminate redundant friction, build standard operating procedures, establish clear delegation lines, and define quantifiable key performance indicators so the business operates predictably without founder bottlenecking.",
    steps: [
      "End-to-End Operational Workflow Mapping & Waste Elimination",
      "Standard Operating Procedure (SOP) Formulation & Documentation",
      "Delegation Matrix & RACI Framework Structuring",
      "Measurable Milestones & Operational KPI Dashboard Setup",
    ],
    outputs: [
      "Enterprise Standard Operating Manuals (SOPs)",
      "Quarterly Operational Milestone Roadmaps",
      "Departmental RACI Matrix (Responsible, Accountable, Consulted, Informed)",
      "Real-Time Management Information Systems (MIS) Template",
    ],
    quote: "Processes are the bridge connecting noble aspirations to everyday commercial reality.",
  },
  {
    number: "03",
    code: "PRACTICE",
    title: "PRACTICE",
    headline: "Implement Defined Processes Through Continuous Guidance & Governance",
    summary:
      "Implement defined processes through trained leadership, continuous guidance and effective governance.",
    description:
      "The true test of consulting lies in sustained execution. In Stage 03, WISEMINDS embeds alongside your team to train mid-level management, facilitate disciplined weekly reviews, govern milestone delivery, and make data-driven course corrections until the new practices become second nature and drive sustainable profitability.",
    steps: [
      "Mid-Level Leadership & Frontline Team Capability Building",
      "Fortnightly Operational Review Cadence & Accountability Checkpoints",
      "Governance & Compliance Assurance Audits",
      "Continuous Optimization & Scale Readiness Reviews",
    ],
    outputs: [
      "Trained, Empowered Supervisory Leadership",
      "Consistent Fortnightly Executive Governance Cadence",
      "Quarterly Audit & Process Compliance Scorecard",
      "Sustainable Scalability Blueprint for Multi-Location Expansion",
    ],
    quote: "Excellence is not an accident; it is the daily discipline of structured practice.",
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Business Evaluation",
    desc: "Rigorous preliminary assessment of business health, financials, market position, and operational bottlenecks.",
  },
  {
    step: "02",
    title: "Purpose Definition",
    desc: "Aligning vision, strategic objectives, leadership focus, and authentic customer value proposition.",
  },
  {
    step: "03",
    title: "Process Development",
    desc: "Formulating Standard Operating Procedures (SOPs), roadmaps, metrics, and risk mitigation protocols.",
  },
  {
    step: "04",
    title: "Implementation",
    desc: "Hands-on rollout of operational systems, team enablement, tooling, and workflow automation.",
  },
  {
    step: "05",
    title: "Leadership Governance",
    desc: "Executive coaching, disciplined review cadences, board governance, and accountability scorecards.",
  },
  {
    step: "06",
    title: "Sustainable Growth",
    desc: "Institutionalized excellence delivering predictable margins, delegable operations, and long-term scale.",
  },
];
