import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectCategory = "flooring" | "countertops";

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  category: ProjectCategory;
  order: number;
  excerpt: string;
  metaDescription: string;
  images: string[];
};

export type Project = ProjectFrontmatter & {
  contentHtml: string;
};

function readProjectFile(filename: string): { data: ProjectFrontmatter; content: string } {
  const fullPath = path.join(PROJECTS_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as ProjectFrontmatter, content };
}

export function getAllProjectsMeta(): ProjectFrontmatter[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));
  const projects = files.map((f) => readProjectFile(f).data);
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));
  const match = files.find((f) => f.replace(/\.md$/, "") === slug);
  if (!match) return null;

  const { data, content } = readProjectFile(match);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    ...data,
    contentHtml: processed.toString(),
  };
}

export function getAllProjectSlugs(): string[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));
  return files.map((f) => f.replace(/\.md$/, ""));
}
