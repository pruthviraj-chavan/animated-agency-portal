import { useEffect } from "react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Reveal } from "@/components/dv/primitives";
import { AlertTriangle, ExternalLink, Mail, MapPin, ShieldCheck } from "lucide-react";

const sections = [
  { id: "info-we-collect", title: "Information we collect" },
  { id: "how-we-use", title: "How we use your information" },
  { id: "sharing", title: "Sharing of information" },
  { id: "cookies", title: "Cookies & analytics" },
  { id: "retention-security", title: "Data retention & security" },
  { id: "your-rights", title: "Your rights & choices" },
  { id: "children", title: "Children's privacy" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

const governmentSources = [
  {
    label: "Udyam Registration (Government of India)",
    detail: "Official Udyam registration portal — verify registration number UDYAM-MH-15-0320983",
    href: "https://udyamregistration.gov.in/Udyam_Verify.aspx",
  },
  {
    label: "Ministry of Micro, Small & Medium Enterprises",
    detail: "Government of India MSME ministry — official source for enterprise classification",
    href: "https://msme.gov.in",
  },
  {
    label: "Dun & Bradstreet D-U-N-S lookup",
    detail: "Commercial registry (not a government body) — verify D-U-N-S number 312163123",
    href: "https://www.dnb.com/duns-number/lookup.html",
  },
];

const collectItems = [
  {
    title: "Contact form submissions",
    body: "When you contact us through our website forms or email, we collect the name, email address, phone number and project details you choose to provide. Messages submitted through the site are delivered to our team inbox at team.dievekter@gmail.com.",
  },
  {
    title: "Chat conversations",
    body: "Our website includes an optional chat widget. Messages you type in the chat are processed by our chat service provider so we can respond to your questions. Please avoid sharing passwords, financial details or other sensitive personal information in chat.",
  },
  {
    title: "Technical information",
    body: "Like most websites, our hosting provider may automatically log standard technical data such as your IP address, browser type, device type, referring pages and the pages you visit. This information is used only for security, performance and aggregate traffic understanding.",
  },
  {
    title: "Information we do not collect",
    body: "Our public website does not require account creation, does not collect payment information and does not collect precise location data.",
  },
];

const useItems = [
  "Responding to enquiries, project briefs and support requests you send us.",
  "Preparing proposals, quotes and project communications you have asked for.",
  "Improving the performance, security and content of our website.",
  "Meeting legal, accounting and regulatory obligations that apply to our business.",
  "With your consent, sharing occasional updates about our services. You can opt out at any time by emailing us.",
];

export const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | dieVekter";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Privacy policy for dieVekter — how we collect, use and protect your information, plus our disclaimer of non-affiliation with any government entity.",
      );
    }
  }, []);

  return (
    <div className="dv-root flex min-h-screen flex-col overflow-x-hidden">
      <SiteNav />
      <main className="flex-grow pt-24 sm:pt-28">
        {/* Header */}
        <section className="bg-dv-bg">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-dv-accent">
                Legal
              </p>
              <h1 className="mt-3 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl font-semibold tracking-tight text-dv-fg">
                Privacy Policy
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-dv-muted">
                This policy explains how DIEVEKTER ("dieVekter", "we", "us") collects, uses and
                protects information when you visit www.dievekter.tech or contact us through it.
                It applies to our public website and any mobile applications that link to this
                page.
              </p>
              <p className="mt-4 text-sm text-dv-dim">Effective date: 25 October 2026</p>
            </Reveal>
          </div>
        </section>

        {/* Disclaimer — prominent, easy to see */}
        <section className="bg-dv-bg" aria-labelledby="disclaimer-heading">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 pb-4">
            <Reveal>
              <div className="rounded-2xl border border-dv-accent/40 bg-dv-accent/[0.06] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-dv-accent/40 bg-dv-accent/10 text-dv-accent">
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2
                      id="disclaimer-heading"
                      className="text-lg sm:text-xl font-semibold tracking-tight text-dv-fg"
                    >
                      Disclaimer: we are not a government entity
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-dv-muted">
                      DIEVEKTER is an independent, privately owned technology company registered in
                      Maharashtra, India. We are{" "}
                      <strong className="text-dv-fg">
                        not a government organisation, government department or public authority
                      </strong>
                      , and we are not affiliated with, endorsed by or acting on behalf of any
                      government entity, in India or anywhere else. Nothing on this website or in
                      our applications should be read as an official government communication.
                    </p>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-dv-muted">
                      Where our website or apps mention government registrations or reference
                      government-related information, that information is shown only to describe
                      our own business credentials, and it is sourced from the official portals
                      linked below. Always verify any government registration directly on the
                      official government website.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {governmentSources.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full rounded-xl border border-dv-line bg-dv-surface p-4 transition-colors hover:border-dv-accent/50"
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-dv-fg">
                          {s.label}
                          <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-dv-dim" aria-hidden="true" />
                        </span>
                        <span className="mt-1.5 block text-xs leading-relaxed text-dv-muted">
                          {s.detail}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="bg-dv-bg pb-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
              {/* Table of contents */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dv-fg">
                  On this page
                </p>
                <nav className="mt-4 space-y-2.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-dv-muted transition-colors hover:text-dv-fg"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="max-w-3xl space-y-14">
                <Reveal>
                  <section id="info-we-collect" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Information we collect
                    </h2>
                    <div className="mt-5 space-y-4">
                      {collectItems.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-dv-line bg-dv-surface/60 p-5"
                        >
                          <h3 className="text-sm font-semibold text-dv-fg">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-dv-muted">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="how-we-use" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      How we use your information
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {useItems.map((u) => (
                        <li key={u} className="flex items-start gap-3 text-sm leading-relaxed text-dv-muted">
                          <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-dv-accent" aria-hidden="true" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="sharing" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Sharing of information
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-dv-muted">
                      <p>
                        We do not sell or rent your personal information. We share it only in these
                        limited circumstances:
                      </p>
                      <ul className="space-y-3">
                        <li>
                          <strong className="text-dv-fg">Service providers.</strong> Our contact
                          form and chat widget are powered by third-party services (including email
                          delivery and form/chat providers) that process your submissions on our
                          behalf so we can reply to you. These providers process data only to
                          deliver the service.
                        </li>
                        <li>
                          <strong className="text-dv-fg">Hosting and infrastructure.</strong> Our
                          website is hosted by commercial hosting providers that may process
                          technical logs for security and availability.
                        </li>
                        <li>
                          <strong className="text-dv-fg">Legal requirements.</strong> We may
                          disclose information where required by law, court order or a request from
                          a competent government authority.
                        </li>
                      </ul>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="cookies" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Cookies &amp; analytics
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed text-dv-muted">
                      Our website uses only the minimal cookies and browser storage needed for it to
                      function (for example, interface preferences such as theme selection). We do
                      not use advertising cookies and we do not run third-party ad trackers on this
                      website. Any embedded chat widget may set its own cookies strictly to operate
                      the chat. You can clear or block cookies in your browser settings; the site
                      will continue to work, though some preferences may reset.
                    </p>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="retention-security" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Data retention &amp; security
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-dv-muted">
                      <p>
                        We keep enquiry emails and form submissions only as long as needed to handle
                        your request and to maintain our business records, after which they are
                        deleted. Technical logs retained by our hosting providers follow the
                        provider's standard retention periods.
                      </p>
                      <p>
                        We apply reasonable technical and organisational safeguards appropriate to a
                        small technology business, including encrypted transport (HTTPS), restricted
                        access to our team inbox and careful vendor selection. No method of
                        transmission over the internet is completely secure, so we cannot guarantee
                        absolute security.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="your-rights" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Your rights &amp; choices
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-dv-muted">
                      <p>
                        Depending on where you live, you may have rights under applicable law —
                        including India's Digital Personal Data Protection Act, 2023, the EU/UK GDPR
                        or similar regulations — to access, correct, export or delete the personal
                        information we hold about you, to withdraw consent, or to object to
                        processing.
                      </p>
                      <p>
                        To exercise any of these rights, email us at{" "}
                        <a
                          href="mailto:team.dievekter@gmail.com"
                          className="text-dv-accent underline-offset-4 hover:underline"
                        >
                          team.dievekter@gmail.com
                        </a>
                        . We respond to genuine requests within a reasonable period. If you are in
                        the EU/UK, you also have the right to complain to your local data protection
                        authority.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="children" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Children's privacy
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed text-dv-muted">
                      Our website and services are directed at businesses and adults. We do not
                      knowingly collect personal information from children under 13 (or under a
                      higher age where local law requires). If you believe a child has sent us
                      personal information, contact us and we will delete it.
                    </p>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="changes" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Changes to this policy
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed text-dv-muted">
                      We may update this policy as our website, products or legal obligations
                      change. The latest version is always published at this page with a new
                      effective date. Continued use of the website after an update means you accept
                      the revised policy.
                    </p>
                  </section>
                </Reveal>

                <Reveal>
                  <section id="contact" className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-dv-fg">
                      Contact us
                    </h2>
                    <div className="mt-5 rounded-xl border border-dv-line bg-dv-surface/60 p-5 text-sm leading-relaxed text-dv-muted">
                      <p className="flex items-start gap-2">
                        <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-dv-dim" aria-hidden="true" />
                        <a
                          href="mailto:team.dievekter@gmail.com"
                          className="hover:text-dv-fg break-all"
                        >
                          team.dievekter@gmail.com
                        </a>
                      </p>
                      <p className="mt-3 flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-dv-dim" aria-hidden="true" />
                        DIEVEKTER · Flat 4, Rohidas Nagar, Radhanagari, Kolhapur, Maharashtra 416204,
                        India
                      </p>
                    </div>
                  </section>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Privacy;
