type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-8 space-y-4 fade-in">
      {eyebrow ? <p className="text-xs tracking-[0.2em] text-[#A63A3A] uppercase">{eyebrow}</p> : null}
      <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm leading-8 md:text-base">{subtitle}</p> : null}
    </header>
  );
}
