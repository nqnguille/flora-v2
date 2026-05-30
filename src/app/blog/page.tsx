import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Flora",
  description: "Cannabis medicinal sin rodeos. Terpenos, REPROCANN, uso responsable.",
};

export default function BlogPage() {
  return (
    <div className="pt-16 relative z-10">
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-tag text-flora-accent mb-5 block">Blog</span>
          <h1 className="font-garamond font-bold text-white text-6xl sm:text-7xl leading-tight mb-5">
            Para quienes<br />ya decidieron.
          </h1>
          <p className="font-jakarta text-white/45 text-lg">
            Sin evangelizar. Información concreta para adultos.
          </p>
        </div>
      </section>

      <section className="pb-24 px-5">
        <div className="max-w-4xl mx-auto grid gap-4">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group glass hover:glass-strong rounded-3xl p-8 flex flex-col sm:flex-row gap-6 transition-all hover:border-flora-accent/20 border border-transparent">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-tag text-flora-accent glass-accent px-3 py-1 rounded-full text-[0.6rem]">
                    {post.category}
                  </span>
                  <span className="font-jakarta text-white/30 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-garamond font-semibold text-white text-2xl mb-2 leading-snug group-hover:text-flora-accent transition-colors">
                  {post.title}
                </h2>
                <p className="font-jakarta text-white/40 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-2 sm:min-w-[72px]">
                <span className="font-jakarta text-xs text-white/25">
                  {new Date(post.date).toLocaleDateString("es-AR", { day: "numeric", month: "short" })}
                </span>
                <span className="font-jakarta text-xs font-semibold text-white/40 group-hover:text-flora-accent transition-colors">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
