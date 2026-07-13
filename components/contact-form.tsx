"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    console.log(data);

    // Backend yahan connect hoga
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  return (
    <div className="rounded-[30px] border border-[#E7D8CA] bg-white p-8 shadow-xl lg:p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Full Name *
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition focus:border-[#B8794B]"
            placeholder="John Doe"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Company
          </label>

          <input
            {...register("company")}
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition focus:border-[#B8794B]"
            placeholder="ABC Foods"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Email *
          </label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition focus:border-[#B8794B]"
            placeholder="john@email.com"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Phone
          </label>

          <input
            {...register("phone")}
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition focus:border-[#B8794B]"
            placeholder="+1 234 567 890"
          />
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Service
          </label>

          <select
            {...register("service")}
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition focus:border-[#B8794B]"
          >
            <option>OEM Manufacturing</option>
            <option>Freeze Drying</option>
            <option>Quality Assurance</option>
            <option>Distribution</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Message *
          </label>

          <textarea
            rows={5}
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full rounded-2xl border border-[#DDD] px-5 py-4 outline-none transition focus:border-[#B8794B]"
            placeholder="Tell us about your project..."
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Sending..." : "Start A Project"}
        </Button>
      </form>
    </div>
  );
}