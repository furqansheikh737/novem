import SectionHeading from "./section-heading";
import ServiceCard from "./service-card";

const services = [
  {
    title: "OEM Manufacturing",
    description:
      "End-to-end manufacturing solutions for food and pet nutrition brands with scalable production capabilities.",
    icon: "factory",
  },
  {
    title: "Freeze Drying",
    description:
      "Advanced freeze-drying technology that preserves nutrition, flavor, and product quality.",
    icon: "snowflake",
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality control, food safety standards, and complete traceability throughout production.",
    icon: "shieldCheck",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="section bg-[#F8F4EF]">
      <div className="container-custom">
        <SectionHeading
          subtitle="Services"
          title="What We Do"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}