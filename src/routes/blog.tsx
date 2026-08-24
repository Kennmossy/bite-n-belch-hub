import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { blogPosts, business } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Baking Tips and Stories | Bite n Belch Baking Home" },
      {
        name: "description",
        content:
          "Baking tips, budget cake ideas, and behind-the-scenes stories from our home bakery kitchen in Kaduna.",
      },
      { property: "og:title", content: "Baking Tips and Stories | Bite n Belch" },
      {
        property: "og:description",
        content:
          "Tips, behind-the-scenes stories, and everything sweet from the Bite n Belch kitchen.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]!;
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHeader
        crumb="Blog"
        title="Baking Tips and Stories"
        subtext="Tips, behind-the-scenes stories, and everything sweet from the Bite n Belch kitchen."
      />

      <section className="pb-14">
        <div className="container-page">
          <Reveal>
            <article className="grid overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift lg:grid-cols-2">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-56 w-full object-cover lg:h-full"
              />
              <div className="p-6 sm:p-8">
                <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                  {featured.category}
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{featured.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{featured.date}</p>
                <span className="mt-5 inline-flex cursor-pointer items-center text-sm font-semibold text-blush-deep transition-colors duration-200 hover:text-charcoal">
                  Read More
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lift">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <span className="self-start rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{post.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blush">
        <div className="container-page py-14 text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Follow Us on Instagram for Daily Baking Inspiration
          </h2>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-charcoal shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Instagram className="h-4 w-4 text-blush-deep" />
            Visit Our Instagram
          </a>
        </div>
      </section>
    </>
  );
}
