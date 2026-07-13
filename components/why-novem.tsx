import SectionHeading from "./section-heading";
import FeatureItem from "./feature-item";

const features = [
  {
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous quality testing before delivery.",
    icon: "shieldCheck",
  },
  {
    title: "Integrated Manufacturing",
    description:
      "Complete production process under one roof for maximum efficiency.",
    icon: "factory",
  },
  {
    title: "Supply Chain",
    description:
      "Reliable sourcing, inventory management and global distribution.",
    icon: "boxes",
  },
  {
    title: "Certified Standards",
    description:
      "International food safety and manufacturing certifications.",
    icon: "badgeCheck",
  },
] as const;

export default function WhyNovem() {
  return (
    <section id="why" className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Why Novem"
          title="Built Around Quality"
        />

        <div className="mb-16 flex justify-center">
          <div className="flex h-32 w-32 rotate-45 items-center justify-center rounded-3xl bg-[#B8794B] shadow-xl">
            <div className="-rotate-45 text-center text-white">
              <h3 className="font-serif text-2xl">
                Novem
              </h3>

              <p className="text-xs uppercase tracking-widest">
                Quality First
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((item) => (
            <FeatureItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}