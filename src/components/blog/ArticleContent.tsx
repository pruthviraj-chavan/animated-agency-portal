import { Fragment } from "react";
import { Link } from "react-router-dom";

export interface ArticleHeading {
  id: string;
  level: 2 | 3;
  text: string;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      tokens.push(
        <strong key={`${match.index}-b`} className="font-semibold text-[#141210]">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        if (href.startsWith("/")) {
          tokens.push(
            <Link
              key={`${match.index}-l`}
              to={href}
              className="font-medium text-[#FF5422] underline underline-offset-4 hover:text-[#e8460e]"
            >
              {label}
            </Link>,
          );
        } else {
          tokens.push(
            <a
              key={`${match.index}-a`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#FF5422] underline underline-offset-4 hover:text-[#e8460e]"
            >
              {label}
            </a>,
          );
        }
      }
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }

  return tokens.map((t, i) => <Fragment key={i}>{t}</Fragment>);
}

export function extractArticleHeadings(markdown: string, articleTitle?: string): ArticleHeading[] {
  const lines = markdown.split("\n");
  const seen = new Map<string, number>();
  const headings: ArticleHeading[] = [];
  const cleanTitle = (articleTitle || "").trim().toLowerCase();

  for (const raw of lines) {
    const line = raw.trim();
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    const match = h2 || h3;
    if (!match) continue;
    const text = match[1].trim();
    if (cleanTitle && text.toLowerCase() === cleanTitle) continue;
    const base = slugifyHeading(text) || "section";
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count}`;
    headings.push({
      id,
      level: h2 ? 2 : 3,
      text,
    });
  }

  return headings;
}

export function ArticleContent({
  content,
  articleTitle,
}: {
  content: string;
  articleTitle?: string;
}) {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  const seenIds = new Map<string, number>();
  const cleanTitle = (articleTitle || "").trim().toLowerCase();

  let listItems: string[] = [];

  const flushList = (keyPrefix: string) => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`${keyPrefix}-ul`} className="my-4 list-disc space-y-2 pl-6 text-stone-700">
        {listItems.map((item, idx) => (
          <li key={idx} className="leading-relaxed">
            {renderInlineMarkdown(item)}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  const makeHeadingId = (text: string) => {
    const base = slugifyHeading(text) || "section";
    const count = seenIds.get(base) || 0;
    seenIds.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();
    if (!line) {
      flushList(`empty-${idx}`);
      return;
    }

    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flushList(`h2-${idx}`);
      const text = h2[1].trim();
      if (cleanTitle && text.toLowerCase() === cleanTitle) return;
      const id = makeHeadingId(text);
      blocks.push(
        <h2
          key={`h2-${idx}`}
          id={id}
          className="scroll-mt-28 mt-9 mb-3 text-2xl font-bold tracking-tight text-[#141210]"
        >
          {text}
        </h2>,
      );
      return;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      flushList(`h3-${idx}`);
      const text = h3[1].trim();
      const id = makeHeadingId(text);
      blocks.push(
        <h3
          key={`h3-${idx}`}
          id={id}
          className="scroll-mt-28 mt-6 mb-2.5 text-lg sm:text-xl font-bold text-[#141210]"
        >
          {text}
        </h3>,
      );
      return;
    }

    const bullet = line.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      listItems.push(bullet[1].trim());
      return;
    }

    flushList(`p-${idx}`);
    blocks.push(
      <p key={`p-${idx}`} className="my-3.5 text-base leading-relaxed text-stone-700">
        {renderInlineMarkdown(line)}
      </p>,
    );
  });

  flushList("end");

  return <div className="space-y-1">{blocks}</div>;
}
