import { articles as fallbackArticles, site, type Article } from "@/lib/data";

const FEED_URL = `https://medium.com/feed/@${site.socials.medium.split("@")[1]}`;
const WORDS_PER_MINUTE = 230;

function decode(s: string) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function stripTags(s: string) {
  return decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function tag(item: string, name: string) {
  const m = item.match(new RegExp(`<${name}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`));
  return m ? m[1].trim() : "";
}

function excerpt(body: string, max = 150) {
  const firstPara = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map((m) => stripTags(m[1]))
    .find((p) => p.length > 60);
  const text = firstPara ?? stripTags(body);
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max)) + "…";
}

// Pulls the latest posts from the public Medium RSS feed; falls back to the hand-picked list if Medium is unreachable
export async function getMediumArticles(limit = 6): Promise<Article[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 60 * 60 * 24 } });
    if (!res.ok) throw new Error(`Medium feed ${res.status}`);
    const xml = await res.text();

    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
    const parsed = items.slice(0, limit).map((item): Article => {
      const body = tag(item, "content:encoded");
      const words = stripTags(body).split(" ").length;
      return {
        title: decode(tag(item, "title")),
        blurb: excerpt(body),
        href: tag(item, "link").split("?")[0],
        readTime: `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`,
        date: new Date(tag(item, "pubDate")).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
      };
    });

    return parsed.length ? parsed : fallbackArticles;
  } catch {
    return fallbackArticles;
  }
}
