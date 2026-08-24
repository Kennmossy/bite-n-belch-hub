export function SectionHeading({
  title,
  subtext,
  center = true,
}: {
  title: string;
  subtext?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">{title}</h2>
      <div className={center ? "gold-rule mx-auto mt-4" : "gold-rule mt-4"} />
      {subtext ? <p className="mt-4 text-base text-muted-foreground">{subtext}</p> : null}
    </div>
  );
}
