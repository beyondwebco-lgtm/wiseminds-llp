# WISEMINDS BUSINESS CONSULTING LLP (WBC)

> **Purpose. Process. Practice.**  
> Transforming Business Purpose into Sustainable Growth.

Official corporate website for **WISEMINDS BUSINESS CONSULTING LLP**, a premier business consulting firm empowering MSMEs and startups across India with accessible, affordable, and structured consulting solutions.

---

## Website Context

| Item | Details |
| --- | --- |
| **Business name** | WISEMINDS BUSINESS CONSULTING LLP (WBC) |
| **Business type** | B2B business-consulting firm |
| **Primary audience** | MSMEs, startups, founders, leadership teams, and institutional partners across India |
| **Website type** | Corporate marketing and lead-generation website |
| **Core objective** | Explain the firm’s advisory practices and sector expertise, build credibility, and convert qualified visitors into consultation requests |
| **Primary conversion** | The consultation form on `/contact`, submitted to `POST /api/contact` |

The site communicates WBC’s **Purpose. Process. Practice.** consulting framework. It is not an e-commerce site or client portal: it is a trust-building corporate presence where prospective clients can understand the firm’s capabilities and start a consulting conversation.

### Business offering

WISEMINDS advises organisations on process consulting, startup mentoring, executive coaching, transition management, incubation-centre strategy, MSME ESG, quick-commerce supply chain and logistics, and legal process outsourcing. Its sector content covers integrated media, agriculture, rural development, renewable energy, startup legal processes, hospitality, and insurance.

---

## Brand Identity & Corporate Palette

| Element | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Royal Blue** | `#2446A8` | Trust, authority, professionalism, stability (30%) |
| **Deep Navy** | `#0B1739` | Executive grounding, contrast & header/footer |
| **Golden Yellow** | `#F4C430` | Catalyst spark, milestones, strategic CTAs (10%) |
| **Off-White** | `#F7F8FC` | Editorial whitespace & background contrast (60%) |
| **White** | `#FFFFFF` | Core reading canvas |
| **Slate Grey** | `#475569` | Typographic hierarchy |

### Visual Brandmark Insignia
- **The Flower:** Represents a flourishing, structured business progressing from early stages toward sustainable growth.
- **The Yellow Dot:** Symbolizes the spark that ignites businesses to kickstart, sustain, and scale.
- **The Arc:** Represents the brand's commitment to enabling business progress and growth.

---

## Key Website Pages

1. **Home (`/`):** Hero with deep royal blue overlay, credibility highlights (125+ years collective experience), About summary, 3 core consulting practices, signature Purpose-Process-Practice horizontal growth journey, 5 specialized solutions, 7 sector showcases, WBC differentiators, and strategic CTAs.
2. **About Us (`/about`):** Detailed company profile, multidisciplinary story, official Vision, Mission, six Core Values, Brandmark Identity interactive breakdown, and Corporate Color psychology.
3. **Our Services (`/services`):** Full breakdown of all 8 consulting practices with challenge analysis, consulting methodology, key deliverables, intended benefits, and consultation modal triggers:
   - *Core:* Process Consulting, Startup Mentoring, Executive Coaching.
   - *Specialized:* Sector-Agnostic Transition Management, Incubation Centre Conceptualization & Management, MSME-Focused Environmental and Social Governance (ESG), Quick Commerce Supply Chain & Logistics, Legal Process Outsourcing (LPO).
4. **Sectors We Serve (`/sectors`):** In-depth industry coverage across Integrated Media, Agriculture (MRL compliance), Rural Development (IRDF), Renewable Energy (CBG plants & Net Zero campus), Startup Legal Processes, Hospitality Management, and Insurance Management.
5. **Our Approach (`/approach`):** Interactive visualization of the 6-step transformation journey (Business Evaluation → Purpose Definition → Process Development → Implementation → Leadership Governance → Sustainable Growth) and detailed deep dives into Purpose, Process, and Practice.
6. **Contact Us (`/contact`):** Full enterprise consultation request form with strict server-side validation (`/api/contact`), reference ID generation, and verified corporate contact information.
7. **Legal & Compliance (`/privacy` & `/terms`):** Detailed corporate governance, confidentiality standards, and statutory disclaimers.

---

## Tech Stack & Architecture

- **Framework:** Next.js (App Router, Turbopack compatible)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with McKinsey/Deloitte inspired editorial styling
- **Icons:** Lucide React
- **SEO & Metadata:** Open Graph, Schema.org Organization JSON-LD, `sitemap.xml`, and `robots.txt`
- **Deployment:** Vercel-ready with zero runtime errors

---

## Local Development

```bash
git clone https://github.com/beyondwebco-lgtm/wiseminds-llp.git
cd wiseminds-llp

# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```

## Project Structure

```text
src/
  app/              Website routes, shared layout, SEO files, and contact API
  components/       Global header/footer and reusable user-interface components
  data/             Company profile, navigation, services, sectors, and approach content
  lib/              Shared utilities
public/images/      WISEMINDS logo and visual brand assets
```

## Content Maintenance

- Update business identity, contact details, social links, and corporate facts in `src/data/company.ts`.
- Update services, sectors, navigation, and the Purpose–Process–Practice approach in their matching files under `src/data/`.
- Update site pages under `src/app/` when the page structure or long-form copy changes.
- The global footer is at `src/components/layout/Footer.tsx`; it includes the BeyondWebCo attribution link.

## Contact Form

The contact page sends a consultation request to `POST /api/contact`. The server route validates essential contact details and returns a reference ID. Review the API route and connect the firm’s preferred email/CRM delivery service before relying on it for production enquiry notifications.

## Deployment

Deploy to a Next.js-compatible host such as Vercel. Run `npm run build` before deployment, set any production environment variables in the host dashboard, and connect the `main` branch for continuous deployment.

## Credits

Built by [BeyondWebCo](https://www.beyondwebco.com/).
