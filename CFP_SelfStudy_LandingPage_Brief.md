# CFP® Self-Study Landing Page — Full Brief & Copy Guide
**Financial Perspectives Pte Ltd | 77th Intake, Cycle 2 | May/June 2026 Exam**
**Prepared for: Abe (DAFEDAN / Financial Perspectives)**
**Version: 1.0 | April 2026**

---

## 1. STRATEGIC OVERVIEW

### Goal
Convert Facebook ad traffic into CFP® Self-Study enrolments for the 77th Intake, Cycle 2 (May/June 2026 exam).

### Target Audience
- Financial advisers, insurance agents, remisiers, and IFA reps in Singapore
- Working professionals considering a career switch into financial planning
- CFP® retakers looking for a flexible, self-paced option
- Singaporeans aged 25–55, SC or SPR, physically based in Singapore
- IBF-STS eligible candidates (the subsidy angle is a major conversion driver)

### Core Value Proposition
> Study at your own pace, on your schedule — with up to 70% IBF funding, the CFP® is more accessible than ever.

### Facebook Ad Integration Strategy
The landing page must be built as a **dedicated, distraction-free page** (no top nav, no footer links to other pages). Facebook ad traffic is "cold" — visitors don't know you yet. The page must:
- Load fast (under 3 seconds on mobile)
- Make the value proposition clear within the first 5 seconds of scrolling
- Have ONE primary CTA: Register / Enquire
- Include a **Facebook Pixel** in the `<head>` for retargeting and conversion tracking
- Add **Open Graph meta tags** so the page previews beautifully when shared on Facebook
- Use a **lead capture form** (name, email, phone, WhatsApp checkbox) that feeds into your CRM or email list
- Consider a **Facebook Lead Ad → Landing Page** funnel: FB Lead Ad captures the lead, the thank-you page confirms enrolment interest and redirects to the landing page for more info

#### Facebook Pixel Setup (add to `<head>`)
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<!-- End Facebook Pixel Code -->
```
Fire `fbq('track', 'Lead')` on form submission for conversion tracking.

#### Open Graph Tags (add to `<head>`)
```html
<meta property="og:title" content="Study CFP® On Your Terms — Up to 70% IBF Funded" />
<meta property="og:description" content="Self-paced, IBF-funded CFP® e-learning now available. 77th Intake, Cycle 2. Register before seats close." />
<meta property="og:image" content="URL_TO_YOUR_BANNER_IMAGE" />
<meta property="og:url" content="YOUR_LANDING_PAGE_URL" />
<meta property="og:type" content="website" />
```

---

## 2. DESIGN DIRECTION

### Visual Identity
- **Brand Colours:** Deep Navy `#1A2B4A`, Gold/Amber `#C9A84C`, White `#FFFFFF`, Light Cream `#F9F6EF`
- **Typography:** Premium serif for headlines (e.g. Playfair Display or Cormorant Garamond), clean sans-serif for body (e.g. DM Sans or Lato)
- **Tone:** Prestigious, trustworthy, aspirational — professional financial services aesthetic
- **Feel:** Clean, structured, confidence-inspiring. Think Bloomberg meets CFA Institute.

### Layout Structure
The page flows in this exact order (see Section 3 for copy):

```
[ SECTION 1 ]  Hero — Above the Fold
[ SECTION 2 ]  IBF Funding Callout Bar
[ SECTION 3 ]  Problem / Insight
[ SECTION 4 ]  Video Embed
[ SECTION 5 ]  What You'll Study (Modules Overview)
[ SECTION 6 ]  Why Self-Study? (Feature Comparison)
[ SECTION 7 ]  Pricing & Funding Table
[ SECTION 8 ]  Social Proof / Testimonials
[ SECTION 9 ]  About Financial Perspectives (Trust Builder)
[ SECTION 10 ] FAQ
[ SECTION 11 ] Final CTA + Lead Capture Form
[ SECTION 12 ] Footer (minimal — disclaimer only)
```

### Mobile-First Requirement
> 80%+ of Facebook ad traffic lands on mobile. Design mobile-first. Every section must be tested at 375px width. CTAs must be thumb-reachable. Font sizes minimum 16px body, 28px headlines on mobile.

### Sticky CTA Bar
Add a sticky bar at the bottom of the screen (mobile) or top (desktop) that appears after the user scrolls past the hero:
> **"77th Intake — Cycle 2 Now Open | Register Before Seats Close →"**

---

## 3. FULL LANDING PAGE COPY

---

### SECTION 1 — HERO (Above the Fold)

**Pre-headline (small caps, gold):**
> CERTIFIED FINANCIAL PLANNER® · 77TH INTAKE · CYCLE 2

**Main Headline (large, bold, navy):**
> Study CFP® On Your Own Schedule.
> Up to 70% IBF-Funded.

**Subheadline (medium, body font):**
> Singapore's #1 CFP® education provider now offers fully online, self-paced learning for Modules 1–5. Study when it suits you. Sit your exam in May/June 2026. IBF-STS funding approved.

**CTA Button (gold, large):**
> → Register for Cycle 2 Now

**Trust Badges (icons row below CTA):**
- 🏆 25+ Years · Market Leader in Singapore
- 🎓 30,000+ Students Trained
- ✅ IBF-STS Accredited · Up to 70% Subsidy
- 📍 FPAS-Approved Education Provider

---

### SECTION 2 — FUNDING CALLOUT BAR (Full-Width Gold Banner)

**Text:**
> 💡 **IBF-STS Funding Now Approved for Self-Study (Cycle 2)** — Eligible Singapore Citizens & PRs pay as little as **$210 per module** after subsidy. Funding approved from 1 April 2026.

---

### SECTION 3 — THE PROBLEM / INSIGHT

**Section Headline:**
> Your CFP® shouldn't have to wait for a classroom.

**Body Copy:**
> Most financial advisers know the CFP® is the gold standard in financial planning certification. But between client meetings, compliance training, and everything else on your plate — finding fixed class times five days a week can feel impossible.
>
> That's why Financial Perspectives built a fully asynchronous, self-paced CFP® e-learning pathway. Same rigorous curriculum. Same IBF-STS funding. Same FPAS-approved examinations. Just no fixed class schedule to work around.
>
> **Study at midnight. Study on weekends. Study on the MRT.**
> The CFP® fits your life now — not the other way around.

---

### SECTION 4 — VIDEO SECTION

**Section Label (small caps, gold):**
> HEAR IT FROM US

**Section Headline:**
> What Makes Financial Perspectives Different?

**[VIDEO EMBED — 16:9, centred, autoplay off, thumbnail required]**
*Recommended: A 60–90 second overview video — Ronald or a senior instructor speaking directly to the viewer about the self-study programme, the IBF funding, and what students can expect. Human face builds trust with cold Facebook traffic.*

**Caption below video:**
> *Over 30,000 professionals have started their financial planning journey with FP since 1999. Here's why they chose us — and why the self-study option changes everything.*

---

### SECTION 5 — MODULES OVERVIEW

**Section Headline:**
> What You'll Master Across 6 Modules

**Intro line:**
> The CFP® Certification Education Program covers everything you need to advise clients comprehensively — and confidently. Modules 1–5 are available via self-study. Module 6 is delivered in-person.

**Module Cards (display as cards or a clean numbered list):**

**Module 1A — Financial Planning Fundamentals** *(AFP Certification)*
- IBF Level 1 · 35 Hours (incl. assessment)
- Onsite Exam: Wed, 20 May 2026
- Foundation module — mandatory for all first-time candidates
- *Self-study available ✓*

**Module 2A — Risk Management & Insurance Planning**
- 24 Hours (incl. assessment)
- Onsite Exam: Fri, 22 May 2026
- Covers life, health, and general insurance in a financial planning context
- *Self-study available ✓*

**Module 3A — Tax Planning & Estate Planning**
- 24 Hours (incl. assessment)
- Onsite Exam: Fri, 29 May 2026
- Wills, trusts, CPF nominations, LPAs, and tax-efficient strategies
- *Self-study available ✓*

**Module 4A — Investment Planning**
- 24 Hours (incl. assessment)
- Onsite Exam: Wed, 3 Jun 2026
- Portfolio theory, unit trusts, ETFs, and risk-return frameworks
- *Self-study available ✓*

**Module 5A — Retirement Planning**
- 24 Hours (incl. assessment)
- Onsite Exam: Fri, 5 Jun 2026
- CPF, SRS, retirement income strategies
- *Self-study available ✓*

**Module 6A — Financial Plan Construction & Professional Responsibilities**
- 24 Hours (incl. assessment)
- Onsite Exam: Fri, 12 Jun 2026
- *In-person only — taken after passing Modules 1–5*

**Important note (small text, italics):**
> *All examinations are conducted in-person at an FPAS-designated venue from 2026 onwards. First-time candidates are advised to take no more than 3 modules per exam cycle.*

---

### SECTION 6 — WHY SELF-STUDY? (Feature Comparison)

**Section Headline:**
> Is the Self-Study Option Right for You?

| Feature | Tutorial (Zoom) | Self-Study (Online) |
|---|---|---|
| Fixed class schedule | ✅ Yes | ❌ No — study anytime |
| Live instructor access | ✅ Yes | ✅ Recorded content |
| Study at your own pace | ❌ | ✅ Fully asynchronous |
| IBF-STS Funding | ✅ | ✅ (from Cycle 2, 2026) |
| Course fee (before subsidy) | $900/module | $700/module |
| Nett fee (50% subsidy) | $450 | $350 |
| Nett fee (70% subsidy, SC 40+) | $270 | $210 |
| LMS access | ✅ | ✅ |
| Exam revision sessions | ✅ Complementary | ✅ Recorded access |

**Callout box (gold border, navy background):**
> 💡 **Self-study is ideal if you:**
> - Have a busy, unpredictable schedule
> - Prefer to learn at your own pace and revisit content
> - Want the most cost-effective funded option
> - Are a retaker looking to top up your preparation

---

### SECTION 7 — PRICING & FUNDING

**Section Headline:**
> Transparent Pricing. Maximum Funding.

**Subline:**
> IBF-STS funding for the self-study option was officially approved on 1 April 2026. Here's exactly what you'll pay:

**Pricing Table — Self-Study Option:**

| | SC/PR below 40 (50% subsidy) | SC aged 40 & above (70% subsidy) |
|---|---|---|
| Course Fee | $700 | $700 |
| Less IBF-STS Funding | ($350) | ($490) |
| **Nett Fee Payable to FP** | **$350** | **$210** |

**Exam Fees (paid directly to FPAS — not included above):**
- Module 1: $327 (new student) / $196.20 (retaker)
- Modules 2, 3, 4, 5: $196.20 per module
- *(Exam fees are payable directly to FPAS, not to Financial Perspectives)*

**Important notes (small, body text):**
> - IBF-STS grant cap: S$3,000 per participant per course
> - Employer-sponsored candidates must submit an original Letter of Support (LOS) from their employer
> - Funding applies to first exam attempt only
> - Candidates must meet 75% attendance AND pass all assessments to qualify

**CTA Button (centred, gold):**
> → Secure Your Place — Register Now

---

### SECTION 8 — TESTIMONIALS

**Section Headline:**
> What Our Students Say

**Design: Card carousel or 3-column grid on desktop, stacked on mobile. Each card includes:**
- Photo (or initials avatar in navy circle)
- Name, designation, company
- Star rating (5 stars)
- Quote (2–4 sentences)
- Module completed

**[PLACEHOLDER — Insert your actual testimonials here. Suggested prompts for collecting testimonials:]**

> **Testimonial Card Example 1:**
> ⭐⭐⭐⭐⭐
> *"The self-study format was a game-changer for me. I'm a full-time financial adviser with a packed schedule — being able to study at 10pm after my kids are asleep made the CFP® actually achievable."*
> — **Sarah T.**, CFP® Candidate, Module 1 & 2 Completed

> **Testimonial Card Example 2:**
> ⭐⭐⭐⭐⭐
> *"Financial Perspectives has been training CFP® professionals for over 25 years. The content is rigorous, the LMS is easy to navigate, and the IBF funding made it financially sensible. I paid just $210 per module."*
> — **David L.**, Financial Adviser, 40+

> **Testimonial Card Example 3:**
> ⭐⭐⭐⭐⭐
> *"I was a retaker and chose self-study for Cycle 2. The recorded content let me replay the sections I struggled with. I finally passed Module 3."*
> — **Marcus C.**, CFP® Candidate

---

### SECTION 9 — ABOUT FINANCIAL PERSPECTIVES (Trust Builder)

**Section Headline:**
> Singapore's Longest-Standing CFP® Education Provider

**Body Copy:**
> Financial Perspectives (FP) was established in 1999 and pioneered the CFP® Certification Program in Asia. As the first FPAS-approved Education Provider and original IBF strategic partner, we have trained over 30,000 financial professionals across Asia — and we remain the market leader in Singapore for CFP® education today.
>
> We don't just deliver content. We invest in your success — from structured e-learning modules built for working professionals, to IBF funding guidance, to complementary exam revision sessions.
>
> **When you study with FP, you study with the best.**

**Credential Icons / Logos Row:**
- FPAS Approved Education Provider
- IBF Standards Accredited Training Provider
- CFP® (FPSB Licensed)
- 25+ Years | Est. 1999

---

### SECTION 10 — FAQ

**Section Headline:**
> Frequently Asked Questions

**Q: What is the CFP® certification?**
> The CFP® (Certified Financial Planner) is the global gold standard in financial planning certification, recognised in 27 countries. In Singapore, it is awarded by the Financial Planning Association of Singapore (FPAS).

**Q: Who is eligible to enrol?**
> You need either a GCE "A" Level Certificate (2 As and 2 Os) or a Diploma, OR a minimum of 3 years of working experience in any profession.

**Q: What are the IBF-STS funding requirements?**
> You must be a Singapore Citizen or Permanent Resident, physically based in Singapore, and meet the minimum 75% attendance requirement and pass the end-of-course assessment. Funding applies to your first exam attempt only.

**Q: Can I take more than one module per cycle?**
> Yes. First-time candidates may attempt Modules 1–5 in a single cycle, but we recommend no more than 3 modules per exam cycle for the best chance of success. Module 6 can only be taken after passing Modules 1–5.

**Q: How long do I have to complete the full CFP® programme?**
> You have 7 years from the date of passing Module 1 to complete the full CFP® program. After that, you would need to restart from Module 1.

**Q: Are exam fees included in the course fee?**
> No. Examination fees are payable directly to FPAS and are separate from course fees paid to Financial Perspectives.

**Q: What if I need to withdraw?**
> Written notice is required. Cancellations made at least 14 days before course start receive a full refund (minus a $50 admin fee). Within 14 days, 50% is refunded. No refund once the course begins.

**Q: Is my personal data safe?**
> Yes. All personal data is handled in strict accordance with Singapore's Personal Data Protection Act 2012. FP does not share your data with third parties without consent.

---

### SECTION 11 — FINAL CTA + LEAD CAPTURE FORM

**Section Headline (large, bold):**
> Start Your CFP® Journey Today.
> Don't Let This Cycle Pass You By.

**Urgency line (small, italic, gold):**
> *77th Intake · Cycle 2 · May/June 2026 Exam · Limited Seats*

**Form Fields:**
- Full Name *
- Email Address *
- Mobile / WhatsApp Number *
- [ ] I prefer to be contacted via WhatsApp
- Module(s) of interest (checkbox: M1 / M2 / M3 / M4 / M5 / All)
- Study option interest (radio: Self-Study / Tutorial / Not sure yet)
- [ ] I consent to receive course information and updates from Financial Perspectives (PDPA)

**Submit Button (full width, gold, large):**
> → Register My Interest Now

**Below form (small text):**
> Our team will contact you within 1 business day to confirm your enrolment details and assist with your IBF-STS funding application.
> 📞 WhatsApp: 8111 7890 · 📧 enquiries@fp-edu.com · 🌐 www.fp-edu.com

**On form submission:**
- Fire `fbq('track', 'Lead')` for Facebook Pixel conversion
- Redirect to a thank-you page with message: *"Thank you! We'll be in touch within 1 business day. In the meantime, WhatsApp us at 8111 7890 if you have any questions."*

---

### SECTION 12 — FOOTER (Minimal)

```
Financial Perspectives Pte Ltd
1 North Bridge Road, High Street Centre, #03-07/08, Singapore 179094
T: (+65) 8111 7890 | E: enquiries@fp-edu.com | W: www.fp-edu.com

CFP®, CERTIFIED FINANCIAL PLANNER™ and the CFP flame logo are certification marks owned outside the U.S. by
Financial Planning Standards Board Ltd. Financial Planning Association of Singapore is the marks licensing
authority for the CFP marks in Singapore, through agreement with FPSB. Financial Perspectives Pte Ltd does not
certify individuals to use the CFP marks. CFP certification is granted only by FPSB and FPAS to those who
meet all 4-E requirements.

© 2026 Financial Perspectives Pte Ltd. All rights reserved.
FP reserves the right to cancel any course if minimum class size is not met. All dates correct at time of publishing.
```

---

## 4. FACEBOOK AD INTEGRATION — LANDING PAGE STRATEGY

### Ad → Page Funnel Design

```
[Facebook Ad]
    ↓
[Landing Page — this document]
    ↓
[Lead Capture Form]
    ↓
[Thank You Page] → fires fbq('track', 'Lead')
    ↓
[FP Team follows up via WhatsApp / Email within 24hrs]
    ↓
[Enrolment confirmed]
```

### Recommended Ad Copy (to match landing page)
**Primary Text:**
> 📣 CFP® Self-Study is now IBF-funded — and Cycle 2 is open.
>
> Study at your own pace. No fixed class times. Pay as little as $210/module after IBF-STS subsidy.
>
> 77th Intake · May/June 2026 Exam · Limited seats.
>
> 👉 Find out more and register here ↓

**Headline:**
> CFP® Self-Study — Up to 70% IBF Funded

**Description:**
> Study on your schedule. Exam May/June 2026. Singapore's #1 CFP provider since 1999.

### Retargeting Strategy
Set up 3 retargeting audiences in Facebook Ads Manager:
1. **Page Viewers** (visited landing page, did not submit form) → serve "Don't miss Cycle 2" reminder ad
2. **Form Starters** (clicked form but didn't complete) → serve "Still thinking? WhatsApp us" ad
3. **Leads** (form submitted) → exclude from ads, move to email nurture

### URL Parameter Tracking
Add UTM parameters to your Facebook ad URL so you can track source in analytics:
```
https://yourdomain.com/cfp-self-study?utm_source=facebook&utm_medium=paid&utm_campaign=77th-intake-c2&utm_content=self-study-ad
```

---

## 5. TECHNICAL REQUIREMENTS CHECKLIST

- [ ] Page hosted on fp-edu.com domain (trust signal — not a subdomain or third-party builder)
- [ ] SSL certificate active (https://)
- [ ] Mobile-first responsive design (test at 375px, 768px, 1280px)
- [ ] Page load time under 3 seconds (compress images, lazy-load video)
- [ ] Facebook Pixel installed and verified in Events Manager
- [ ] Open Graph meta tags complete (test with Facebook Sharing Debugger)
- [ ] Lead form connected to CRM or Google Sheets / Mailchimp
- [ ] Thank you page with Pixel Lead event firing on form submit
- [ ] UTM parameters preserved through form submission
- [ ] PDPA consent checkbox on form (mandatory for Singapore)
- [ ] Google Analytics or equivalent installed
- [ ] Video thumbnail set (autoplay off — Facebook cold traffic is in public places)
- [ ] All exam dates, fees, and funding figures verified against latest FP schedule document
- [ ] Sticky CTA bar tested on mobile
- [ ] Page tested in Chrome, Safari (iOS), and Samsung Internet

---

## 6. CONTENT ASSETS REQUIRED BEFORE BUILD

| Asset | Status | Owner |
|---|---|---|
| FP logo (PNG, transparent background) | Needed | FP team |
| Ronald / instructor video (60–90 sec) | Needed | Ronald / Abe |
| Hero banner image (1920×1080) | Needed | Abe / Designer |
| 3–5 student testimonials (text + photo optional) | Needed | FP team |
| Facebook Pixel ID | Needed | FP marketing |
| Final hosting URL / domain path | Needed | FP IT / Abe |
| FPAS / IBF logo (for accreditation badges) | Needed | FP team |

---

*Document prepared by Abe for Financial Perspectives Pte Ltd.*
*All programme details based on 77th Intake Schedule and Fees document (Revised 01/04/2026).*
