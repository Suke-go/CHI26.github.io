"use client";

import { FormEvent, useState } from "react";
import { searchConcept } from "@/lib/data";
import type { SearchResult } from "@/lib/types";

export function SearchSection() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(searchConcept(query));
  };

  return (
    <section className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">Lightweight concept search</h2>
      <p className="text-sm text-calm">Search a concept term to retrieve linked cases, years, and concise explanations.</p>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. therapy"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          aria-label="Concept term"
        />
        <button className="w-full rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white" type="submit">
          Search
        </button>
      </form>

      {result && (
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-sm font-medium">Query: {result.term}</p>
          {result.matches.length === 0 ? (
            <p className="mt-2 text-sm text-calm">No matches found in local index.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {result.matches.map((match) => (
                <li key={match.caseId} className="rounded-lg bg-slate-50 p-2 text-sm">
                  <p className="font-medium">{match.caseLabel}</p>
                  <p className="text-calm">Year: {match.year}</p>
                  <p className="text-calm">{match.explanation}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
