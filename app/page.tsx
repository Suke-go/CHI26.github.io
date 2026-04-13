import { CycleDiagram } from "@/app/components/CycleDiagram";
import { SearchSection } from "@/app/components/SearchSection";
import { TopologyExplainerViz } from "@/app/components/TopologyExplainerViz";
import { YearlyMetricsChart } from "@/app/components/YearlyMetricsChart";
import {
  getExplainerContent,
  getRepresentativeCases,
  getYearlyMetrics
} from "@/lib/data";

export default function HomePage() {
  const metrics = getYearlyMetrics();
  const cases = getRepresentativeCases();
  const explainer = getExplainerContent();

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-6 sm:px-6">
      <section className="space-y-3 rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-calm">HCI Research Atlas</p>
        <h1 className="text-2xl font-semibold leading-tight">Topology-derived concept bridges in HCI</h1>
        <p className="text-sm leading-6 text-calm">
          A guided, mobile-first reading experience that summarizes how persistent loops reveal integrating boundaries between research areas.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Beginner-friendly topology explainer</h2>
        <p className="text-sm leading-6 text-calm">{explainer.intro}</p>
        <TopologyExplainerViz />
        <ol className="space-y-2">
          {explainer.steps.map((step, index) => (
            <li
              key={step.title}
              className="animate-[fadeIn_400ms_ease_forwards] rounded-xl border border-slate-200 p-3 opacity-0"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <p className="text-sm font-medium">{step.title}</p>
              <p className="text-sm text-calm">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Yearly structural metrics</h2>
        <p className="text-sm text-calm">Total H1 persistence (line) and triadic closure (bars), 2019-2024.</p>
        <YearlyMetricsChart data={metrics} />
        <ul className="space-y-1 text-xs text-calm">
          {metrics.map((row) => (
            <li key={row.year}>
              {row.year}: H1 {row.totalH1Persistence.toFixed(1)} · closure {row.triadicClosure.toFixed(2)} · {row.note}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Representative boundary cases</h2>
        <div className="space-y-4">
          {cases.map((item) => (
            <article key={item.id} className="space-y-2 rounded-xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-wide text-calm">
                {item.type === "integrating" ? "Integrating boundary" : "Non-integrating boundary"} · {item.year}
              </p>
              <h3 className="font-medium">{item.label}</h3>
              <CycleDiagram integrating={item.type === "integrating"} />
              <p className="text-sm text-calm">{item.summary}</p>
              <p className="text-sm">
                <span className="font-medium">Topology signal:</span> {item.topologySignal}
              </p>
              <p className="text-sm">
                <span className="font-medium">Interpretation:</span> {item.interpretation}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Interpretation</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium">What topology captures</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-calm">
              {explainer.captures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">What topology does not capture</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-calm">
              {explainer.misses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SearchSection />
    </main>
  );
}
