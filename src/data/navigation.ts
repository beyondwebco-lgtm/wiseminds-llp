export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Sectors We Serve", href: "/sectors" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_SECTIONS = {
  services: [
    { label: "Process Consulting", href: "/services#process-consulting" },
    { label: "Startup Mentoring", href: "/services#startup-mentoring" },
    { label: "Executive Coaching", href: "/services#executive-coaching" },
    { label: "Transition Management", href: "/services#transition-management" },
    { label: "Incubation Centre Setup", href: "/services#incubation-centres" },
    { label: "MSME ESG Consulting", href: "/services#esg-consulting" },
    { label: "Q-Commerce Logistics", href: "/services#quick-commerce" },
    { label: "Legal Process Outsourcing", href: "/services#legal-process-outsourcing" },
  ],
  sectors: [
    { label: "Integrated Media Management", href: "/sectors#integrated-media" },
    { label: "Agriculture & Sustainable Cultivation", href: "/sectors#agriculture" },
    { label: "Rural & Rurban Development", href: "/sectors#rural-development" },
    { label: "Renewable Energy & CBG Plants", href: "/sectors#renewable-energy" },
    { label: "Startup Legal Processes", href: "/sectors#startup-legal" },
    { label: "Hospitality Management", href: "/sectors#hospitality" },
    { label: "Insurance Management", href: "/sectors#insurance" },
  ],
  company: [
    { label: "About WISEMINDS", href: "/about" },
    { label: "Our Approach (P3)", href: "/approach" },
    { label: "Brand Identity", href: "/about#brand-identity" },
    { label: "Contact Us", href: "/contact" },
    { label: "Schedule Consultation", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
