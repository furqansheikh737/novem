import SectionHeading from "./section-heading";
import ProcessNode from "./process-node";
import {
  Leaf,
  FlaskConical,
  Snowflake,
  Package,
  Truck,
} from "lucide-react";

const process = [
  {
    title: "Ingredient Sourcing",
    icon: "leaf",
    description:
      "Premium ingredients sourced from trusted suppliers with complete traceability.",
  },
  {
    title: "Research & Development",
    icon: "flaskConical",
    description:
      "Recipes are developed and tested to preserve nutrition and quality.",
  },
  {
    title: "Freeze Drying",
    icon: 'snowflake',
    description:
      "Advanced freeze-drying technology locks in nutrients and extends shelf life.",
  },
  {
    title: "Packaging",
    icon: "package",
    description:
      "Automated packaging ensures safety, freshness, and consistency.",
  },
  {
    title: "Distribution",
    icon: "truck",
    description:
      "Products are shipped globally through an optimized logistics network.",
  },
];

export default function Process() {
  return (
    <section
      id="capabilities"
      className="section bg-white"
    >
      <div className="container-custom">

        <SectionHeading
          subtitle="CAPABILITIES"
          title="Closed Loop Manufacturing"
        />

        <div className="relative mx-auto max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-[#D9C7B5]" />

          <div className="space-y-10">
            {process.map((step) => (
              <ProcessNode
                key={step.title}
                {...step}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}