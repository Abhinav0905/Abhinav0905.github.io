import Award from 'lucide-react/dist/esm/icons/award.js';
import BookOpen from 'lucide-react/dist/esm/icons/book-open.js';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.js';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap.js';
import ScrollText from 'lucide-react/dist/esm/icons/scroll-text.js';

const patents = [
  {
    title: 'Systems and Methods for Verifiable Citation Receipts and Omission Auditing in AI-Generated Responses',
    filing: 'USPTO Provisional Application 64/144,085 (2026)',
    description: 'Creates verifiable citation receipts and checks whether generated answers omit available evidence.',
  },
  {
    title: 'Embedded Agentic Retrieval with Resettable Continual LoRA Adapters',
    filing: 'USPTO Provisional Application 63/967,742 (2026)',
    description: 'Places a small, adapted model in the retrieval layer for query rewriting, reranking and context packing.',
  },
  {
    title: 'Proof Carrying Workflow',
    filing: 'USPTO Provisional Application 64/083,845 (2026)',
    description: 'Uses tool receipts, tamper-evident logs, replay and approval gates for verifiable agent actions.',
  },
];

const publications = [
  {
    title: 'Citation Receipts: A Protocol for Verifiable AI Citation Counts',
    status: 'Accepted for poster presentation at the AI4MetaScience Workshop at NeurIPS 2026',
    href: 'https://openreview.net/forum?id=rThrMcXwsa',
  },
  {
    title: 'PhyRoute: Voltage Screening under Feeder Reconfiguration',
    status: 'Accepted for oral presentation at ICDLAI 2026, Paper 377; proceedings publication pending',
    href: 'https://doi.org/10.5281/zenodo.22905467',
  },
  {
    title: 'GridFresh: Testing Simple Telemetry-Refresh Rules for Distribution Voltage Control',
    status: 'Accepted for presentation at ICATCICT 2026, Paper 298; Springer ACSAR proceedings publication pending',
    href: 'https://doi.org/10.5281/zenodo.22881516',
  },
  {
    title: 'Career-Aware Resume Tailoring via Multi-Source Retrieval-Augmented Generation with Provenance Tracking',
    status: 'Case study, arXiv:2605.05257 and SSRN 6567122',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6567122',
  },
  {
    title: "Does Google's Open Knowledge Format Improve RAG? A Controlled Evaluation",
    status: 'SSRN 7227678; 360 views and 230 downloads as of October 2026',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7227678',
  },
];

const books = [
  {
    title: 'Python, Made Friendly',
    detail: 'Published in 2026 | ISBN 979-8-90673-969-8',
    href: 'https://www.amazon.co.uk/Python-Made-Friendly-Kumar-Abhinav/dp/B0HNS1L49D',
  },
  {
    title: 'Tableau Made Friendly: From Data to Dashboards',
    detail: 'Published in 2026 | ISBN 9798906735867',
    href: 'https://www.amazon.co.uk/Tableau-Made-Friendly-Data-Dashboards/dp/B0HPBKF5F9',
  },
];

const recognition = [
  '2nd Place, YouCam API Skin AI & Apparel VTO Hackathon (ShadeSpan), with a $1,000 award in a 2026 event reporting 1,273 participants.',
  '2nd Place, Replit Track, Google Agentic Cinema: The Blockbuster Hackathon (FrameKind), with a $4,500 award in an event reporting about 10,100 registered participants across five tracks.',
  'Invited industry speaker at the IEEE 5th World Conference on Applied Intelligence and Computing (AIC 2026).',
  'Panelist at Autonomous Vehicles & AI USA 2026 in Anaheim on safety standards, validation and testing.',
  'Completed 10 manuscript reviews: 3 ACM CIKM 2026 Applied Research reviews, 3 SIGIR 2026 Workshop on eCommerce reviews and 4 IEEE Access reviews.',
  'Completed three technical-judging engagements and reviewed 23 AI and software projects across Austin AI Hub and LaserHacks 2026.',
  'AI mentor with AI4Good Incubator UK and technical mentor to a five-student Boston University Spark! team.',
];

export function Research() {
  return (
    <section id="research" className="py-16 bg-gradient-to-br from-emerald-50 via-white to-sky-50 text-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Research & Recognition</p>
          <h2 className="text-3xl font-bold mt-2">Patents, publications, books and professional service</h2>
          <p className="text-gray-600 mt-4 leading-7">
            Work focused on verifiable AI, retrieval systems, power-system screening and practical technical education.
            Publication status is stated exactly: accepted work is not described as published while proceedings are pending.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="border border-emerald-100 bg-white rounded-lg p-5 shadow-sm">
            <ScrollText className="w-6 h-6 text-emerald-700 mb-4" />
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-600 leading-6">USPTO provisional patent applications</p>
          </div>
          <div className="border border-emerald-100 bg-white rounded-lg p-5 shadow-sm">
            <GraduationCap className="w-6 h-6 text-emerald-700 mb-4" />
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-gray-600 leading-6">research papers and accepted presentations</p>
          </div>
          <div className="border border-emerald-100 bg-white rounded-lg p-5 shadow-sm">
            <BookOpen className="w-6 h-6 text-emerald-700 mb-4" />
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-gray-600 leading-6">published technical books</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <ScrollText className="w-6 h-6 text-emerald-700" />
              <h3 className="text-2xl font-semibold">Provisional Patent Applications</h3>
            </div>
            <div className="space-y-4">
              {patents.map((patent) => (
                <article key={patent.title} className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
                  <p className="text-sm font-semibold text-emerald-700">{patent.filing}</p>
                  <h4 className="text-lg font-semibold mt-2">{patent.title}</h4>
                  <p className="text-sm text-gray-600 leading-6 mt-2">{patent.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-6 h-6 text-sky-700" />
              <h3 className="text-2xl font-semibold">Research & Publications</h3>
            </div>
            <div className="space-y-4">
              {publications.map((publication) => (
                <article key={publication.title} className="border border-sky-100 bg-white rounded-lg p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{publication.title}</h4>
                      <p className="text-sm text-gray-600 leading-6 mt-2">{publication.status}</p>
                    </div>
                    <a
                      href={publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${publication.title}`}
                      className="shrink-0 text-sky-700 hover:text-sky-950"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 mt-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-6 h-6 text-emerald-700" />
              <h3 className="text-2xl font-semibold">Technical Books</h3>
            </div>
            <div className="space-y-4">
              {books.map((book) => (
                <a
                  key={book.title}
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:border-emerald-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{book.title}</h4>
                      <p className="text-sm text-gray-600 mt-2">{book.detail}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 shrink-0 text-emerald-700" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-6 h-6 text-amber-700" />
              <h3 className="text-2xl font-semibold">Awards, Speaking & Service</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-4">
              {recognition.map((item) => (
                <li key={item} className="rounded-lg border border-amber-100 bg-white p-5 text-sm leading-6 text-gray-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
