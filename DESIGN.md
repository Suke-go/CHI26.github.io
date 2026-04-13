# CHI 2026 Supplementary Web Page -- Design Requirements

## Project

**Paper**: *Topological Bridges: Detecting Cross-Cluster Concept Relationships in HCI Research via Persistent Homology*
**Venue**: CHI 2026 Extended Abstract
**Purpose**: Paper supplement site -- not a TDA tutorial, but a guide to reading HCI field reorganization through topological lenses.

---

## Design Philosophy

> This site is not a topology tutorial.
> It is a site for sharing how to read the internal reorganization of HCI as a field.
> Topology is introduced only to the minimum extent necessary for that purpose.

The structure is **question-first, method-second**:

1. Establish why field reorganization matters (SciSci + HCI meta-science)
2. Introduce topology minimally
3. Show actual analysis and how to interpret it

---

## Reader Layers

| Layer | Chapters | Goal | Time |
|-------|----------|------|------|
| **A: Grasp** | 0--1 | What problem is being addressed | 30 sec -- 2 min |
| **B: Understand** | 2--5 | Why topology, what is computed | 5 -- 10 min |
| **C: Interpret** | 6--10 | What is found, how to read it, what it does not say | 10 -- 15 min |

---

## Chapter Specifications

### Chapter 0: Overview

| Item | Detail |
|------|--------|
| **Purpose** | In 30 seconds, convey the site's thesis |
| **Takeaway** | Target = HCI corpus internal structure; focus = early field reorganization; topology = method for that |
| **Sections** | (0-1) What this site is about, (0-2) The core question, (0-3) How to read this site |
| **Figure** | Hero visual: left = established topic map, right = emerging boundary schematic. No math figures yet. |
| **Content** | HCI field changes may occur before they are visible as topics. This project describes that early reorganization. The supplement covers background, minimal topology, relationship to existing methods, and how to read the analysis. |
| **Avoid** | Starting with "We use topology to find holes"; showing H_1 or Vietoris-Rips upfront; leading with prediction accuracy |
| **Transition** | "To see why this question matters, we first place it in the context of Science of Science and HCI's own meta-level concerns." |

---

### Chapter 1: Why This Matters in HCI

| Item | Detail |
|------|--------|
| **Purpose** | Place the research question in SciSci and HCI meta-science context |
| **Takeaway** | Describing field evolution is a core SciSci challenge; HCI makes it especially hard; the question is about describing reorganization, not about finding loops |
| **Sections** | (1-1) Science of Science and field evolution, (1-2) Why HCI is especially difficult to summarize, (1-3) The research question of this project |

#### 1-1: Science of Science and field evolution

| Item | Detail |
|------|--------|
| **Content** | SciSci studies scientific activity via large-scale data. Not just counting -- structure, reorganization, precursors, interpretability matter. Science mapping and bibliometrics are key instruments. Cite Fortunato et al. (Science, 2018). |
| **Figure** | SciSci conceptual diagram: actors, papers, ideas, fields, evolution linked by arrows. No project-specific data yet. |
| **Avoid** | "SciSci is not just counting papers" (too confrontational); dismissing bibliometrics as outdated |
| **Message** | Field change should be captured as structural change, not just frequency change. |

#### 1-2: Why HCI is especially difficult to summarize

| Item | Detail |
|------|--------|
| **Content** | HCI has multiple paradigms, diverse contribution types, contested core concepts. Simple frequency or single-map approaches are insufficient. Cite Hornbaek & Oulasvirta (CHI 2017), Liu et al. co-word analysis, Generative Theories of Interaction. |
| **Figure** | HCI plurality diagram: methods, systems, theory, design, applications, evaluation cultures in a ring/network |
| **Avoid** | "HCI is messy"; "impact cannot be measured" |
| **Message** | In HCI, field change happens as re-arrangement of concepts, methods, and application areas -- not just topic counts. |

#### 1-3: The research question of this project

| Item | Detail |
|------|--------|
| **Content** | Three questions: (RQ1) How do HCI subareas become adjacent before stabilizing as named topics? (RQ2) Can early field reorganization be described structurally and interpretably? (RQ3) Can such descriptions complement existing frequency-based maps? |
| **Figure** | Question diagram: left = visible topics, right = pre-topic boundary states |
| **Transition** | "To answer this question, we need a way of describing more than local similarity or direct co-occurrence. This is where topology becomes useful." |

---

### Chapter 2: Topology -- Minimal Background

| Item | Detail |
|------|--------|
| **Purpose** | Explain topology as a standalone section, limited to what this research requires |
| **Takeaway** | Topology reads connectivity and holes; this project reads connectivity change in point clouds; birth edge, loop, and closure are the three key ideas |
| **Sections** | (2-1) What topology looks at, (2-2) Vietoris-Rips as growing connectivity, (2-3) Persistent homology and H_1, (2-4) Birth edge, loop, and closure in this project |

#### 2-1: What topology looks at

| Item | Detail |
|------|--------|
| **Content** | Connectivity patterns over coordinate details. From point clouds, read clusters, loops, filled regions. |
| **Figure** | Toy point cloud -- unconnected state |

#### 2-2: Vietoris-Rips as growing connectivity

| Item | Detail |
|------|--------|
| **Content** | Raise distance threshold, connect nearby points, structure changes step by step |
| **Figure** | 4-panel schematic: (i) isolated points, (ii) local clusters, (iii) loop appears, (iv) loop fills in. Label as "schematic". |

#### 2-3: Persistent homology and H_1

| Item | Detail |
|------|--------|
| **Content** | Persistent homology tracks when structures appear and disappear. H_1 = loop-like structures. Persistence = how long a structure survives. |
| **Figure** | Simplified barcode or birth-death diagram. Math-heavy details in collapsible section. |

#### 2-4: Birth edge, loop, and closure in this project

| Item | Detail |
|------|--------|
| **Content** | Three observation levels: **local** (birth edge -- which local relationship establishes the boundary), **meso** (persistent loop -- unfilled boundary structure), **macro** (yearly topology summaries). Representative cycle = birth edge + shortest path before birth. |
| **Figure** | Birth edge highlight: (i) just before loop, (ii) birth edge added = loop forms, (iii) closure = triangle fills |
| **Avoid** | Stopping at "topology lets us see holes"; skipping birth edge to explain only loops |
| **Transition** | "With this intuition in place, we can now position our approach among existing ways of mapping research fields." |

---

### Chapter 3: Existing Approaches

| Item | Detail |
|------|--------|
| **Purpose** | Survey the methodological landscape and position this work |
| **Takeaway** | Each existing method has a clear target; this project complements rather than replaces them; focus is on pre-topic boundary states |
| **Sections** | (3-1) Citation-based, (3-2) Co-word / co-occurrence, (3-3) Topic / semantic, (3-4) Graph-based prediction, (3-5) Where this project sits |

#### 3-1 through 3-4

Each section covers: what it maps, strengths, HCI applications, and a schematic figure (citation map, co-word network, embedding cluster, triangle closing).

#### 3-5: Where this project sits

| Item | Detail |
|------|--------|
| **Content** | Citation = lineage; co-word = visible topics; semantic = similarity; graph prediction = closure. This project = boundary states that are not yet stable topics or dense neighborhoods. |
| **Figure** | Comparison table: method family x target / strength / limitation / what ours adds |
| **Avoid** | "Existing methods fail"; listing baselines without positioning |
| **Transition** | "We now turn from methodological positioning to the actual corpus and how the analytical objects in this project are defined." |

---

### Chapter 4: Data and Operationalization

| Item | Detail |
|------|--------|
| **Purpose** | Define what is analyzed |
| **Takeaway** | "Cross-area link" = semantic community boundary, not institutional interdisciplinarity |
| **Sections** | (4-1) Corpus, (4-2) Concepts, (4-3) Year-specific embeddings, (4-4) Semantic communities, (4-5) Candidate pairs |
| **Content** | Target venues + years; noun phrase extraction + filtering; year-specific Word2Vec (d=100, w=5); Louvain on epsilon-separated graph; candidate = cross-community + zero cumulative co-occurrence |
| **Figure** | Analysis object flow: papers -> concepts -> embedding space -> communities -> candidate pairs |

---

### Chapter 5: Detecting Boundary Structures

| Item | Detail |
|------|--------|
| **Purpose** | Connect Ch.2 topology intuition to real data processing |
| **Takeaway** | The method operates at local / meso / macro simultaneously; outputs are readable, not just topological |
| **Sections** | (5-1) From distances to filtration, (5-2) Persistent H_1 and structural gaps, (5-3) Birth edge and representative cycle, (5-4) Bridge scoring, (5-5) Yearly topology summaries |
| **Content** | Distance matrix; Rips complex; H_1 computation; representative cycle via shortest path + birth edge; cross-community edge extraction; persistence scoring; total persistence and triadic closure |
| **Figure** | Pipeline figure -- preferably 3-column (local / meso / macro), not single row |

---

### Chapter 6: Evidence

| Item | Detail |
|------|--------|
| **Purpose** | Show actual observations by scale |
| **Sections** | (6-1) Micro: representative cases, (6-2) Meso: ranking evidence, (6-3) Macro: yearly structure |

#### 6-1: Micro -- representative cases

| Item | Detail |
|------|--------|
| **Content** | VR-Therapy integration case; Blockchain-HCI decay case; intermediate concept interpretation |
| **Figure** | Actual representative cycle with explanation strip below |

#### 6-2: Meso -- ranking evidence

| Item | Detail |
|------|--------|
| **Content** | Precision@50 / NDCG; baseline comparison; interpretability + ranking tradeoff |
| **Figure** | Bar chart / comparison chart |

#### 6-3: Macro -- yearly structure

| Item | Detail |
|------|--------|
| **Content** | Total persistence; triadic closure; yearly summary meaning |
| **Figure** | Structural tension wave. **Must include note**: "Yearly topology-derived summary measures; not direct tracking of the same loop across time." |

---

### Chapter 7: How to Read the Outputs

| Item | Detail |
|------|--------|
| **Purpose** | Explicit reading guide |
| **Sections** | (7-1) What "cross-area link" means here, (7-2) Reading cycle birth / persistence / death, (7-3) Reading representative cycles |
| **Content** | cross-area = between semantic communities; birth = boundary formation; persistence = unresolved boundary; death = possible resolution; representative cycle = bridge hypothesis |
| **Figure** | Reading guide box -- 3-line meaning summary |

---

### Chapter 8: What This Captures / What It Does Not

| Item | Detail |
|------|--------|
| **Purpose** | Explicit scope statement |
| **Sections** | (8-1) What the analysis captures, (8-2) What it does not establish |
| **Figure** | Two-column claims table |

**Captures**: proximity, community separation, boundary structures, yearly topology descriptors

**Does NOT establish**: institutional interdisciplinarity, causality, author intent, unique true path, aligned geometric tracking

---

### Chapter 9: Implications for HCI and SciSci

| Item | Detail |
|------|--------|
| **Purpose** | Return to positioning |
| **Sections** | (9-1) Implications for HCI, (9-2) Implications for SciSci, (9-3) Future directions |
| **Content** | HCI: reading subarea reorganization; SciSci: interpretable structural descriptors; Future: expert validation, corpus expansion, aligned embeddings |
| **Figure** | Optional synthesis box |

---

## Cross-Chapter Design Rules

### 1. One message per chapter
Each page conveys a single point.

### 2. Do not mix figure roles
- Toy figure = intuition building
- Representative cycle = interpretation
- Ranking figure = evidence
- Yearly figure = macro summary

### 3. Prioritize "how to read" over "TDA-ness"
Math terminology goes in collapsible sections.

### 4. Claim / non-claim early and often
Do not wait until Ch.8. From Ch.4 onward, include small scope notes.

### 5. Poster vs. Web have different roles
- Poster: fast communication
- Web: explain *why* something is read a certain way

---

## Technical Stack (TBD)

| Concern | Decision |
|---------|----------|
| Static site generator | TBD (candidates: plain HTML/CSS, Astro, Next.js static, Jekyll) |
| Hosting | GitHub Pages (CHI26.github.io) |
| Interactive figures | TBD (candidates: D3.js, Observable, static SVG) |
| Collapsible math sections | HTML details/summary or JS accordion |
| Responsive | Required (reviewers may read on tablet) |

---

## File Structure (Planned)

```
CHI26.github.io/
  DESIGN.md            # This file
  index.html           # Ch.0 Overview (landing page)
  chapters/
    01-why-hci.html
    02-topology.html
    03-existing.html
    04-data.html
    05-detection.html
    06-evidence.html
    07-reading.html
    08-scope.html
    09-implications.html
  assets/
    css/
    js/
    figures/
      ch0/
      ch1/
      ch2/
      ...
  data/                # JSON data for interactive figures
```

---

## Version History

| Date | Version | Description |
|------|---------|-------------|
| 2026-04-13 | 0.1 | Initial design requirements |

---

## Implementation Notes (Mobile-first + Science Communication)

### A. Mobile-first readability principles adopted

1. **Single-column first**: base width is optimized for smartphones, then expanded for tablets/desktop via progressive enhancement.
2. **Readable line height and restrained visual hierarchy**: prioritize comprehension over decorative density.
3. **One-claim-per-panel**: each chapter page keeps one central message to reduce cognitive switching.
4. **Scope notes from early chapters**: claim / non-claim reminders are placed from Ch.4 onward to avoid over-interpretation.
5. **Math details in disclosure UI**: default path is interpretation-first, with optional deep math.

### B. Web implementation for GitHub Pages

- Static HTML/CSS/JS structure chosen to ensure low-friction GitHub Pages deployment.
- `.nojekyll` added to avoid unintended Jekyll processing.
- D3 loaded via CDN and used for a **non-interactive** explanatory animation on the landing page.

### C. Non-interactive animation policy (D3)

- Animation purpose is narrative scaffolding (state transition intuition), not data exploration.
- No user controls required; motion is subtle, looped, and secondary to text.
- Figure labels and captions explicitly mark schematics vs. empirical results.

### D. External references checked for implementation

- D3 official docs and examples for transition behavior and SVG rendering.
- GitHub Docs for GitHub Pages static publishing behavior.
- W3C accessibility guidance to keep keyboard navigation and structure basic-compliant.
