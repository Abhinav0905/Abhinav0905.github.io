import Award from 'lucide-react/dist/esm/icons/award.js';
import BookOpen from 'lucide-react/dist/esm/icons/book-open.js';
import ScrollText from 'lucide-react/dist/esm/icons/scroll-text.js';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.js';

const patents = [
  {
    title: 'Embedded Agentic Retrieval with Resettable Continual LoRA Adapters',
    filing: 'USPTO Provisional Patent 63/967,742, 2026',
    description:
      'Designed a RAG architecture that embeds a small LoRA-adapted model inside the retrieval layer for query rewriting, reranking, and context packing. The approach targets fewer LLM calls, lower token cost, reduced latency, and stronger multi-tenant provenance-aware retrieval.',
  },
  {
    title: 'Proof Carrying Workflow',
    filing: 'USPTO Provisional Application 64/083,845, 2026',
    description:
      'Created a framework for verifiable AI-agent execution using cryptographic tool receipts, hash-chained tamper-evident logs, deterministic replay, and two-phase gating before irreversible actions.',
  },
];

const publications = [
  {
    title: 'Career-Aware Resume Tailoring with Multi-Source RAG and LangGraph',
    venue: 'IEEE research paper authored and submitted',
    description:
      'Authored a research paper on a 12-node LangGraph pipeline with multi-source RAG, provenance tracking, and anti-hallucination guardrails. Pilot evaluation across 9 job descriptions showed an average ATS-fit improvement of +7.8 points for domain-aligned roles.',
  },
];

const proofPoints = [
  { icon: ShieldCheck, value: '2', label: 'USPTO provisional patent filings' },
  { icon: BookOpen, value: '1', label: 'IEEE research paper submitted' },
  { icon: Award, value: '+7.8', label: 'average ATS-fit lift in pilot evaluation' },
];

export function Research() {
  return (
    <section id="research" className="py-16 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Patents & Publications</p>
          <h2 className="text-3xl font-bold mt-2">
            Research-Backed AI Engineering
          </h2>
          <p className="text-slate-300 mt-4 leading-7">
            Recent work spans verifiable agent execution, retrieval-layer intelligence, and career-aware AI systems
            with provenance and anti-hallucination controls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {proofPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div key={point.label} className="border border-white/10 bg-white/5 rounded-lg p-5">
                <Icon className="w-6 h-6 text-emerald-300 mb-4" />
                <p className="text-3xl font-bold">{point.value}</p>
                <p className="text-sm text-slate-300 leading-6">{point.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <ScrollText className="w-6 h-6 text-emerald-300" />
              <h3 className="text-2xl font-semibold">Patent Filings</h3>
            </div>
            <div className="space-y-5">
              {patents.map((patent) => (
                <article key={patent.title} className="border border-white/10 bg-white rounded-lg p-6 text-gray-900">
                  <p className="text-sm font-semibold text-emerald-700">{patent.filing}</p>
                  <h4 className="text-xl font-semibold mt-2">{patent.title}</h4>
                  <p className="text-gray-600 leading-7 mt-3">{patent.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-6 h-6 text-emerald-300" />
              <h3 className="text-2xl font-semibold">Publication</h3>
            </div>
            {publications.map((publication) => (
              <article key={publication.title} className="border border-emerald-300/20 bg-emerald-50 rounded-lg p-6 text-gray-900">
                <p className="text-sm font-semibold text-emerald-700">{publication.venue}</p>
                <h4 className="text-xl font-semibold mt-2">{publication.title}</h4>
                <p className="text-gray-600 leading-7 mt-3">{publication.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
