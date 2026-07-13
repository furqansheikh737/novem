interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#B8794B]">
        {subtitle}
      </p>

      <h2 className="font-serif text-4xl text-[#2D2B2A] lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}