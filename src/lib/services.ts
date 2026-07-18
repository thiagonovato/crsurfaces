import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const SERVICES_DIR = path.join(process.cwd(), "content", "services");

export type ServiceCategory = "flooring" | "countertops";

export type ServiceFrontmatter = {
  title: string;
  slug: string;
  category: ServiceCategory;
  order: number;
  excerpt: string;
  metaDescription: string;
};

export type Service = ServiceFrontmatter & {
  contentHtml: string;
};

function readServiceFile(filename: string): { data: ServiceFrontmatter; content: string } {
  const fullPath = path.join(SERVICES_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as ServiceFrontmatter, content };
}

export function getAllServicesMeta(): ServiceFrontmatter[] {
  const files = fs.readdirSync(SERVICES_DIR).filter((f) => f.endsWith(".md"));
  const services = files.map((f) => readServiceFile(f).data);
  return services.sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const files = fs.readdirSync(SERVICES_DIR).filter((f) => f.endsWith(".md"));
  const match = files.find((f) => f.replace(/\.md$/, "") === slug);
  if (!match) return null;

  const { data, content } = readServiceFile(match);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    ...data,
    contentHtml: processed.toString(),
  };
}

export function getAllServiceSlugs(): string[] {
  const files = fs.readdirSync(SERVICES_DIR).filter((f) => f.endsWith(".md"));
  return files.map((f) => f.replace(/\.md$/, ""));
}
