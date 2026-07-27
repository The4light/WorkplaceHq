# MASTER SYSTEM PROMPT: DUAL-BRAND INTERACTIVE PLATFORM
Role: Senior Principal UI/UX Designer & SaaS Systems Architect
Target Platform: Web Platform (Responsive Desktop 1440px & Mobile 390px)
Design Direction: Ultra-modern, immersive, bento-grid modular architecture with ambient atmospheric depth, vibrant complementary warmth, zero emojis (brand logos and crisp iconography only), and strict frictionless (no login/auth) user execution flows.

---

## 1. GLOBAL DESIGN SYSTEM & VISUAL ATMOSPHERE

### A. General Design Rules
- Zero-Auth Flow Constraint: NO login, signup, user profiles, or dashboard user-states. All tools and interactions rely on immediate, frictionless intake forms, modals, and dynamic live preview outputs.
- Typography Hierarchy:
  * Headings: Space Grotesk / Inter (Tight tracking, sentence case, high-contrast display weights).
  * Body & Data: DM Sans / Plus Jakarta Sans (Crisp readability, tight line height for metrics).
- Surface Styling: Card-based Bento-Grid containers, 16px corner radii for main cards, 8px for buttons/pills, 6px for form inputs. Subtle 1px inner borders on all cards.
- Iconography: Vector line icons only (Lucide / Feather icon style). Absolute prohibition of emojis across all UI surfaces.

### B. Brand 1: WorkplaceHQ (B2B Corporate & Learning Ecosystem)
- Atmospheric Identity: Intellectual executive clarity, high focus, warm authority, professional growth.
- Color Palette Specifications:
  * Primary Anchor (Authority Header/Cards): Deep Emerald `#0B3C2D`
  * Sharp Focus (Indicators/Active States): Cyber Mint `#10B981`
  * Warm Complementary Accent (Banners/CTAs/Glows): Terracotta Amber `#D97706`
  * Canvas Background: Soft Alabaster `#FBF9F5`
  * Elevating Containers / Card Surface: Pure Warm White `#FFFFFF`
  * Deep Display Text & Dark Surfaces: Midnight Obsidian `#111827`
  * Card Borders & Dividers: Muted Sand `#E5E1D8`

### C. Brand 2: Lagos Job (B2C Career Acceleration Engine - Route: /lagos-jobs)
- Atmospheric Identity: Refreshing, high-energy, modern career escape, empowering, fast-paced execution.
- Color Palette Specifications:
  * Primary Anchor (Tool Structural Frames): Midnight Ocean `#0F2C34`
  * Sharp Focus (Active Tabs/Progress Gauges): Electric Cyan `#06B6D4`
  * Warm Complementary Accent (Primary CTAs/Glows): Sunrise Coral `#FF5A36`
  * Canvas Background: Crisp Ice Milk `#F4F7F6`
  * Elevating Containers / Card Surface: Pure White `#FFFFFF`
  * Deep Display Text & Dark Surfaces: Deep Slate Ink `#0D131A`
  * Card Borders & Dividers: Cool Alloy `#D6E2E0`

### D. Ambient Lighting Spheres (Out-of-Frame Depth Engine)
All Hero sections, CTA banners, and major tool containers MUST feature bleeding ambient glow spheres to build visual depth:
- WorkplaceHQ Ambient Glow:
  * Top-Right Sphere: 400x400px Circle, `#D97706` (Terracotta Amber), 120px Layer Blur, 18% Opacity, positioned bleeding 40% outside the frame bounds.
  * Bottom-Left Sphere: 500x500px Circle, `#10B981` (Cyber Mint), 150px Layer Blur, 15% Opacity, positioned bleeding 30% outside frame bounds.
- Lagos Job Ambient Glow:
  * Top-Right Sphere: 450x450px Circle, `#FF5A36` (Sunrise Coral), 140px Layer Blur, 22% Opacity, positioned bleeding 50% outside frame bounds.
  * Bottom-Left Sphere: 550x550px Circle, `#06B6D4` (Electric Cyan), 160px Layer Blur, 18% Opacity, positioned bleeding 35% outside frame bounds.

---

## 2. NAVIGATION SYSTEM ARCHITECTURE

### WorkplaceHQ Navigation Header
- Fixed/Sticky top bar with blur backdrop filter (12px backdrop-blur).
- Left: "WorkplaceHQ" typographic logo mark with a stylized geometric Emerald/Mint node icon.
- Center Links: Home, About, Services, Training Programs, Workshops, Consulting, Resources, Insights, Contact.
- Right Action: High-contrast pill button styled in Deep Emerald with Cyber Mint ring highlight: "Lagos Job →".

### Lagos Job Navigation Header
- Switchable header style when viewing `/lagos-jobs`.
- Left: "Lagos" text paired with "Jobs." inside a dark Ocean Blue badge, paired with a small breadcrumb link: "← Back to WorkplaceHQ".
- Center Links: Home, Services, Tools Hub, Job Listings, About, Contact.
- Right Action: Sunrise Coral action button: "Launch Tools Hub".

---

## 3. COMPLETE PAGE & USER FLOW SPECIFICATIONS

### PART A: WORKPLACEHQ PAGES (B2B PLATFORM)

1. WorkplaceHQ Home Page
   - Hero Section: High-impact headline ("We Engineer How Teams Work"), ambient dual-glow background, dynamic metrics grid (e.g., "98% Efficiency Gain", "50+ Enterprise Clients"), primary CTA "Book Executive Consultation".
   - Bento-Grid Services Overview: 5 large interactive cards showcasing AI Adoption, Productivity Infrastructure, Operational Excellence, CX Transformation, and Strategic Consulting.
   - Cross-Pollination Module: Distinct Bento Card highlighting individual career upskilling, routing leaders to direct their workforce to the Lagos Job product.
   - Client Trust Strip: Monochrome vector client logos (TresBonTech, Posh Accent, etc.).
   - Interactive Testimonial Carousel & Outcome-Driven CTA Banner.

2. About Page
   - Brand Story: Narrative layout around systemic operational engineering.
   - Core Principles: 4-card grid detailing focus, systems-thinking, performance, and continuous adaptation.
   - Executive Leadership Team Grid with role cards and vector LinkedIn quick-links.

3. Services Directory Page
   - Comprehensive multi-section view for all 5 enterprise offerings.
   - Challenge vs. System Solution vs. Measurable Outcome breakdown tables for each service.
   - Direct inline trigger button: "Request Custom Proposal".

4. Training Programs Page
   - Structured course catalog layout for team upskilling modules.
   - Program cards detailing module breakdown, duration, target team size, and learning outcomes.
   - Modal trigger: "Request Training Deck".

5. Workshops Page
   - Deep-dive immersive workshop cards (e.g., "1-Day AI Integration Bootcamp", "Operations Streamlining Sprint").
   - Agenda timeline visualizer and seat reservation form intake.

6. Consulting Page
   - Enterprise transformation framework presentation.
   - Interactive timeline widget detailing Phase 1 (Audit) through Phase 4 (Optimization).

7. Resources Hub
   - Filterable grid with tags (Whitepapers, Toolkits, Frameworks, Reports).
   - Card downloads triggered via immediate intake modal (Name + Corporate Email).

8. Insights / Blog
   - Featured editorial article hero card + 3-column article card grid with category tags and estimated read times.

9. Contact Page
   - Direct booking interface, office location matrix, and streamlined enterprise inquiry form with interactive dropdown selectors.

---

### PART B: LAGOS JOB PAGES & TOOL HUB (B2C PLATFORM)

1. Lagos Job Home Page
   - B2C Career Hero: High-energy visuals, Sunrise Coral CTAs, vibrant ambient background glows.
   - Direct Tools Hub Launcher: Horizontal card slider introducing the 6 zero-auth tools.
   - Live Job Counter Widget & Success Story Cards.

2. B2C Services Page
   - Detailed breakdown of career transformation products, each ending with a direct jump button into its specific tool view.

3. Interactive Tools Hub (Central App Engine View)
   - Layout: Top persistent horizontal tab rail allowing instant switching between all 6 tools without refreshing.
   - Tool 1: CV / Resume Optimiser
     * Left Column: Form Intake (Target Role, Years Experience, Resume Text Paste / File Drop).
     * Right Column: Real-time Live Preview Card featuring an animated circular ATS Compatibility Gauge, keyword gap checklist, and instant optimization feedback.
   - Tool 2: LinkedIn Profile Optimiser
     * Headline generator, about section refiner, and profile impact visual score.
   - Tool 3: Portfolio Creator
     * Dynamic input builder for project highlights, generating an instant responsive visual portfolio layout mockup.
   - Tool 4: Personal Website Creator
     * Interactive form capturing bio, work history, and custom link selections to output a visual desktop/mobile personal site preview.
   - Tool 5: Personal Branding Guide
     * Automated positioning generator producing content pillars and bio hooks based on industry selections.
   - Tool 6: Job Listings Engine
     * Filterable job board grid with real-time role filtering, salary range tags, and 1-click lead-capture application modals.

4. Job Listings Page
   - Search & Filter Header (Location, Role Type, Remote/Onsite, Experience Level).
   - Split View UI: Left list of active job cards; right preview panel showing full job description, company details, and immediate application intake form.

5. About Page
   - Modern, ambitious narrative focused on unleashing African career potential and tech readiness.

6. Contact Page
   - Instant support ticketing form and general inquiries touchpoint.

---

## 4. UI COMPONENTS & INTERACTION DESIGN SPECIFICATIONS
- Sticky Tool Tab Rail: Smooth horizontal scrolling pill navigation on the Tools Hub using Electric Cyan line highlights for active tab indicators.
- Modals & Intake Screens: Floating surface containers with backdrop-blur overlay (#000000 at 40% opacity), smooth slide-up animation entry.
- Buttons & States:
  * Primary: Solid background with 2px offset focus ring on click/hover.
  * Hover: Subtle 2px vertical translation (-2px Y-axis) with elevated drop shadow.
  * Active/Click: Scale down to 0.98 for tactile feedback.