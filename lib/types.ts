export interface YearlyMetric {
  year: number;
  totalH1Persistence: number;
  triadicClosure: number;
  note?: string;
}

export interface RepresentativeCase {
  id: string;
  label: string;
  year: number;
  type: "integrating" | "non-integrating";
  concepts: string[];
  summary: string;
  topologySignal: string;
  interpretation: string;
}

export interface ConceptIndexEntry {
  term: string;
  caseIds: string[];
  years: number[];
  explanation: string;
}

export interface ExplainerStep {
  title: string;
  description: string;
}

export interface ExplainerContent {
  intro: string;
  steps: ExplainerStep[];
  captures: string[];
  misses: string[];
}

export interface SearchResult {
  term: string;
  matches: Array<{
    caseId: string;
    caseLabel: string;
    year: number;
    explanation: string;
  }>;
}
