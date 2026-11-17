import Bug from 'lucide-react/dist/esm/icons/bug.js';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.js';
import GitPullRequest from 'lucide-react/dist/esm/icons/git-pull-request.js';

const contributions = [
  {
    project: 'OpenAPI Generator',
    reference: 'PR #24730',
    status: 'Merged after maintainer review',
    summary:
      'Moved repeated Python legacy-model conversion helpers into a shared module, cutting generated source size by 7.2% in the tested sample.',
    href: 'https://github.com/OpenAPITools/openapi-generator/pull/24730',
    type: 'pr',
  },
  {
    project: 'Temporal',
    reference: 'PR #343',
    status: 'Merged after maintainer review',
    summary: 'Added a LiteLLM activity sample to the Temporal Python samples repository.',
    href: 'https://github.com/temporalio/samples-python/pull/343',
    type: 'pr',
  },
  {
    project: 'Prefect',
    reference: 'PR #22760',
    status: 'Merged after maintainer review',
    summary: 'Fixed nested deployment-parameter rendering in the Prefect UI.',
    href: 'https://github.com/PrefectHQ/prefect/pull/22760',
    type: 'pr',
  },
  {
    project: 'CALL-E AI',
    reference: 'PR #466',
    status: 'Merged after maintainer integration',
    summary: 'Added a fail-closed outage-support coordination and live-contact verification workflow.',
    href: 'https://github.com/CALLE-AI/awesome-phone-call-agents/pull/466',
    type: 'pr',
  },
  {
    project: 'Elasticsearch',
    reference: 'PR #156238',
    status: 'Merged and backported',
    summary:
      'Fixed source filtering for backslash-named and escaped-dot fields, added regression coverage and aligned map- and byte-based behavior. The fix was backported to Elasticsearch 9.6, 9.5, 9.4 and 8.19.',
    href: 'https://github.com/elastic/elasticsearch/pull/156238',
    type: 'pr',
  },
  {
    project: 'CALL-E AI',
    reference: 'Issue #477',
    status: 'Maintainer fix deployed',
    summary:
      'Identified five unsupported JSON Schema keywords in Developer API result-schema handling. Maintainers merged the documentation and OpenAPI fixes and confirmed them against the live API.',
    href: 'https://github.com/CALLE-AI/awesome-phone-call-agents/issues/477',
    type: 'issue',
  },
  {
    project: 'Genblaze / Backblaze',
    reference: 'Issues #223, #224 and #225',
    status: 'Three reports fixed by maintainers',
    summary:
      'Reported reproducible SDK defects in pricing estimation, provider validation and MP4 path handling. Maintainers addressed them through PRs #230 and #231 the following day.',
    href: 'https://github.com/backblaze-labs/genblaze/issues/223',
    type: 'issue',
  },
];

export function OpenSource() {
  return (
    <section id="open-source" className="py-16 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Open Source</p>
          <h2 className="text-3xl font-bold mt-2">Merged fixes and maintainer-verified reports</h2>
          <p className="text-slate-300 mt-4 leading-7">
            Public engineering work across developer tools, workflow systems, data platforms and AI projects. Each item
            links to the upstream record so the change, review history and final status can be checked directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {contributions.map((contribution) => {
            const Icon = contribution.type === 'pr' ? GitPullRequest : Bug;

            return (
              <article key={`${contribution.project}-${contribution.reference}`} className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg">{contribution.project}</h3>
                      <p className="text-sm text-slate-400">{contribution.reference}</p>
                    </div>
                  </div>
                  <a
                    href={contribution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${contribution.project} ${contribution.reference}`}
                    className="text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-5 inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {contribution.status}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{contribution.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
