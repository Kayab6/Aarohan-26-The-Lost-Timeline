# The Lost Timeline

AAROHAN’26 — THE LOST TIMELINE

Frontend-Only Website | Premium UI/UX Implementation

1. Objective

Build a complete, visually exceptional frontend website for AAROHAN’26 — The Lost Timeline, an immersive time-travel-themed STEM challenge.

The website is the central entry point for event participants. It introduces the storyline, displays four missions, explains the event rules, and connects participants to four independently deployed round websites.

This project is frontend-only. Do not build a backend.

Use React, Tailwind CSS, and Framer Motion where appropriate. You may use other suitable frontend libraries if they improve the result.

The priority is outstanding visual quality, originality, smooth interactions, and responsive design.

2. Design vision

Create a cinematic, futuristic time-travel interface inspired by scientific mission-control systems, deep space, fractured timelines, and holographic machinery.

The website should feel like entering a futuristic temporal research facility.

It must be sophisticated, immersive, and visually memorable while remaining easy to use for student participants.

Avoid generic SaaS dashboards, ordinary college-event templates, excessive glassmorphism, and indiscriminate neon effects.

3. Visual design system

Use this palette:

Cosmic black: #050711

Deep-space navy: #0A1024

Cerulean blue: #00A6E8

Electric cyan: #52E4FF

Neon rose: #FF3F88

Soft white: #F4F7FF

Muted blue-grey: #9AA9C7

Use cosmic black and deep navy as the primary surfaces. Cerulean and cyan should guide attention. Neon rose should highlight temporal anomalies and selected warning states.

Typography:

A distinctive display font for the main event identity.

A readable sans-serif for body text.

A monospaced font for system messages, mission identifiers, and technical labels.

Maintain consistent spacing, strong hierarchy, excellent readability, and intentional visual rhythm.

4. Background and animation

Create an atmospheric, layered space environment with:

Multiple subtle star fields.

Slow-moving particles.

Orbital ellipses and temporal rings.

Soft cyan and rose ambient lighting.

Delicate grid patterns.

Subtle shimmer and depth.

A broken holographic clock or Chrono-Core.

Use CSS, SVG, and lightweight animation techniques. Use Framer Motion for meaningful transitions if helpful.

Animations must be restrained and performant. Support reduced-motion preferences and avoid excessive GPU-intensive effects.

5. Shared header

Create a consistent header on every page.

Left:

AAROHAN’26 wordmark linking to Home.

Right:

IEEE WIE.

IEEE SIGHT.

Use supplied official logos if available. Otherwise, display organization names as text; do not invent logos.

Main navigation:

Home

Story

Missions

Rules

Leaderboard only if included in the approved frontend scope.

Include a clear active-page indicator, elegant hover states, keyboard accessibility, and responsive mobile navigation.

6. Home page — Chrono-Core activation

Build a visually striking hero section.

Display:

TEMPORAL RESEARCH DIVISION // 3026

AAROHAN’26

THE LOST TIMELINE

Supporting line:

Four eras. Four fragments. One timeline to save.

Explain briefly that a malfunctioning Chrono-Core has fractured the timeline, scattering four Time Fragments across history.

Primary CTA: BEGIN MISSION

Navigate to the Missions page.

Secondary CTA: EXPLORE THE STORY

Navigate to the Story page.

Create an original CSS/SVG-based Chrono-Core visual featuring a fragmented clock, layered orbital rings, fine technical markings, and subtle cyan and rose lighting.

Below the hero, include a concise event introduction, four mission previews, and a final CTA to Missions.

Do not invent countdowns, statistics, registrations, or unrelated sections.

7. Story page — The timeline has collapsed

Use the supplied event story as the source of truth.

In the year 3026, scientists create the Chrono-Core, a time-travel device. During its first activation, it overloads and creates a Temporal Rift. Four Time Fragments scatter across history, threatening the stability of the timeline.

Participants become Chrono Explorers and must recover the four fragments to restore the Chrono-Core.

Present the story through a visually engaging timeline with four era markers:

Ancient Civilization — The Hidden Artifact.

Medieval Era — The Architect’s Blueprint.

Industrial Revolution — Factory Meltdown.

Year 3026 — The Temporal Lock.

Use chronological progression, subtle timeline animations, technical system-message panels, and original era-inspired illustrations.

Preserve the supplied storyline. Do not introduce conflicting story details.

8. Missions page — Four temporal portals

Build four high-quality mission cards in a consistent design system.

Every card must contain:

Round number.

Mission title.

Era.

STEM theme.

Short description.

Time Fragment identifier.

Availability status.

Action to open the corresponding deployed round website.

Mission 01 — The Hidden Artifact

Era: Ancient Civilization
Theme: Digital Forensics and Steganography

Investigate an ancient artifact image to uncover a hidden message and locate the first Time Fragment.

Visual motif: Ancient inscriptions, archaeological geometry, and signal-scanning effects.

Mission 02 — The Architect’s Blueprint

Era: Medieval Era
Theme: Coordinate Geometry

Use equations and a coordinate plane to reconstruct a medieval structure and reveal the location of the second fragment.

Visual motif: Castle silhouettes, graph-paper geometry, coordinate axes, circles, and parabolas.

Mission 03 — Factory Meltdown

Era: Industrial Revolution
Theme: Arduino and Electronics

Program and connect electronic components to restore a factory control system and recover the third fragment.

Visual motif: Industrial schematics, circuit traces, sensor indicators, and restrained warning lights.

Mission 04 — The Temporal Lock

Era: Future / Year 3026
Theme: Digital Logic

Construct a circuit using AND, OR, and NOT gates to satisfy the Chrono-Core’s activation conditions and recover the final fragment.

Visual motif: Futuristic logic gates, circuit diagrams, and a sealed temporal portal.

Mission states and links

Use a single centralized frontend configuration object for the four round URLs.

Example structure:

rounds = [{ id, title, era, theme, description, url }]

Use the actual supplied URLs when available. Do not invent external destinations.

If a URL is configured, enable the action and open that URL.

If a URL is missing, display COMING SOON and disable the action.

Preserve the existing destination exactly.

Open round websites in a separate tab if that is the specified behaviour.

Never render an empty or broken link.

Do not recreate the four independent round websites.

Make the cards visually distinctive while preserving consistent spacing, typography, proportions, and interactions.

9. Rules page — Mission protocol

Create a readable, visually polished rules page using clear headings and structured panels.

Use only the approved event information:

Teams contain 4–5 members.

The event has four rounds.

Each round has a fixed time limit.

Successful teams receive the corresponding Time Fragment and proceed to the next stage.

Scoring and exact time limits are finalized by the organizers.

Do not invent penalties, eligibility conditions, scoring policies, or other rules.

If additional approved rules are supplied later, organize them into the existing design system.

10. Footer

Create a compact footer with:

AAROHAN’26.

The Lost Timeline.

Amrita Vishwa Vidyapeetham, Bengaluru.

Approved contact details, if supplied.

Links to the main pages.

Do not invent contact details or social media links.

11. Interactions and motion

Implement functional interactions:

Working page navigation.

Active navigation states.

Functional mission links.

Disabled Coming Soon states.

Responsive mobile menu.

Hover, focus, and pressed states.

Smooth transitions where appropriate.

Scroll-reveal animations only where they improve the experience.

Every visible button and link must have a defined action.

Do not autoplay audio or add unnecessary interactive features.

12. Technical requirements

Use:

React.

Tailwind CSS.

Framer Motion where appropriate.

Lucide icons if needed.

Local or publicly accessible assets.

Keep the code modular, reusable, and easy to maintain.

Suggested component structure:

Header

Footer

ChronoCore

HomePage

StoryPage

MissionCard

MissionsPage

RulesPage

Use client-side routing for the pages. Keep mission URLs in a single configuration source.

Do not implement:

Flask or another backend.

Database connections.

Authentication or login.

Admin dashboards.

Team registration.

Score calculation.

CSV imports.

Leaderboard data processing.

New round websites.

The frontend may display an existing approved leaderboard page only if it is already part of the intended scope. Do not fabricate live rankings or scores.

13. Responsive design and accessibility

Ensure excellent behaviour on:

Desktop.

Laptop.

Tablet.

Mobile.

Prevent horizontal overflow. Adapt the hero composition and mission grid to smaller screens. Maintain readable text and accessible touch targets.

Use semantic HTML, keyboard navigation, visible focus states, sufficient contrast, and reduced-motion support.

14. Implementation sequence

Build in this order:

Establish the design system.

Create the shared header and navigation.

Implement the Home hero and Chrono-Core.

Implement the Story timeline.

Implement the four Missions cards and URL states.

Implement the Rules page and footer.

Add polished animations and microinteractions.

Test every route, external link, responsive layout, and visible control.

Focus on the quality of the actual implementation, not merely the number of effects.

15. Acceptance criteria

The final frontend must:

Have a distinctive cinematic time-travel identity.

Maintain a consistent design across all pages.

Represent the four missions accurately.

Use real configured round URLs only.

Display Coming Soon for missing URLs.

Have working navigation and responsive layouts.

Avoid fake functionality and fabricated content.

Be accessible and performant.

Be easy to update when the actual round URLs and approved assets are supplied.

Begin by creating the design system and the Home page. Then implement the remaining pages using the same visual language.

The primary objective is a premium, immersive UI with reliable frontend behaviour.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7e02a7bb-4975-5743-bf10-c0ca9fd9c9a4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
