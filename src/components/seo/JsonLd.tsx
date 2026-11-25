import { safeSerializeJsonLd } from "@/lib/seo/schema";

export function JsonLd({
  nodes,
}: {
  nodes: Array<Record<string, unknown> | null | undefined>;
}) {
  const validNodes = nodes.filter(
    (node): node is Record<string, unknown> => Boolean(node && typeof node === "object"),
  );
  if (validNodes.length === 0) return null;

  const graph = {
    "@context": "https://schema.org",
    "@graph": validNodes,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeSerializeJsonLd(graph) }}
    />
  );
}
