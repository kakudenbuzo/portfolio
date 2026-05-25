import { PageClient } from "@/components/page-client";
import type { ZennArticle } from "@/components/zenn-section";

function extractTag(xml: string, tag: string): string {
  const cdata = xml.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
  if (cdata) return cdata[1].trim();
  const plain = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return plain ? plain[1].trim() : "";
}

function formatDate(raw: string): string {
  if (!raw) return "";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

async function fetchZennArticles(): Promise<ZennArticle[]> {
  try {
    const res = await fetch("https://zenn.dev/kakudenbuzo/feed");
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];
    return items.slice(0, 6).map((item) => ({
      title: extractTag(item, "title"),
      link: extractTag(item, "link"),
      pubDate: formatDate(extractTag(item, "pubDate")),
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const articles = await fetchZennArticles();
  return <PageClient articles={articles} />;
}
