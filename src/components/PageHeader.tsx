import { Link } from "@tanstack/react-router";

export function PageHeader({
  title,
  subtext,
  crumb,
}: {
  title: string;
  subtext?: string;
  crumb: string;
}) {
  return (
    <section className="bg-cream pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="container-page">
        <nav className="text-xs font-medium text-muted-foreground">
          <Link to="/" className="transition-colors duration-200 hover:text-blush-deep">
            Home
          </Link>
          <span className="px-2 text-gold">/</span>
          <span className="text-charcoal">{crumb}</span>
        </nav>
        <h1 className="mt-4 text-[2rem] font-bold text-charcoal sm:text-4xl lg:text-5xl">{title}</h1>
        <div className="gold-rule mt-4" />
        {subtext ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">{subtext}</p>
        ) : null}
      </div>
    </section>
  );
}
