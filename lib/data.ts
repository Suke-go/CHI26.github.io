import yearlyMetrics from "@/data/yearly_metrics.json";
import representativeCases from "@/data/representative_cases.json";
import conceptIndex from "@/data/concept_index.json";
import explainerContent from "@/data/explainer_content.json";
import type {
  ConceptIndexEntry,
  ExplainerContent,
  RepresentativeCase,
  SearchResult,
  YearlyMetric
} from "@/lib/types";

export const getYearlyMetrics = () => yearlyMetrics as YearlyMetric[];
export const getRepresentativeCases = () => representativeCases as RepresentativeCase[];
export const getConceptIndex = () => conceptIndex as ConceptIndexEntry[];
export const getExplainerContent = () => explainerContent as ExplainerContent;

export const searchConcept = (rawTerm: string): SearchResult | null => {
  const term = rawTerm.trim().toLowerCase();
  if (!term) {
    return null;
  }

  const index = getConceptIndex();
  const cases = getRepresentativeCases();

  const entry = index.find((item) => item.term.toLowerCase() === term);
  if (!entry) {
    return {
      term: rawTerm,
      matches: []
    };
  }

  const matches = entry.caseIds
    .map((id) => {
      const matchCase = cases.find((c) => c.id === id);
      if (!matchCase) {
        return null;
      }

      return {
        caseId: matchCase.id,
        caseLabel: matchCase.label,
        year: matchCase.year,
        explanation: entry.explanation
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return {
    term: entry.term,
    matches
  };
};
