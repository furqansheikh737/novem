import SectionHeading from "./section-heading";
import ApplicationCard from "./application-card";

const applications = [
  {
    title: "Pet Food",
    image: "/pet-food.webp",
    description:
      "Premium freeze-dried pet nutrition made with carefully sourced ingredients and advanced manufacturing.",
  },
  {
    title: "Agriculture",
    image: "/agri-food.avif",
    description:
      "Freeze-dried ingredients and food solutions engineered for industrial and commercial production.",
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="section bg-[#F8F4EF]"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="Applications"
          title="Built for Modern Manufacturing"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {applications.map((item) => (
            <ApplicationCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}