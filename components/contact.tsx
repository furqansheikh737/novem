import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";
import { Mail, Phone, Factory, ShieldCheck, Truck, Snowflake } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-[#F8F4EF]"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="Contact"
          title="Let's Build Something Together"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="font-serif text-4xl text-[#2D2B2A]">
              Tell us about your project.
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Whether you're launching a new food brand or scaling production,
              Novem is ready to help from concept to distribution.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <Factory className="text-[#B8794B]" />
                <span>OEM Manufacturing</span>
              </div>

              <div className="flex items-center gap-4">
                <Snowflake className="text-[#B8794B]" />
                <span>Freeze Drying</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-[#B8794B]" />
                <span>Quality Assurance</span>
              </div>

              <div className="flex items-center gap-4">
                <Truck className="text-[#B8794B]" />
                <span>Global Distribution</span>
              </div>
            </div>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="text-[#B8794B]" />
                <span>hello@novem.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#B8794B]" />
                <span>+1 (234) 567-890</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}