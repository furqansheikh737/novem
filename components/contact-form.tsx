"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { contactSchema, ContactFormData } from "@/lib/validations";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "OEM Manufacturing",
    },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }

      toast.success("Your inquiry has been sent successfully.");

      reset({
        service: "OEM Manufacturing",
      });
    } catch {
      toast.error("Unable to send your message. Please try again.");
    }
  }

  return (
    <div className="rounded-[30px] border border-[#E7D8CA] bg-white p-8 shadow-xl lg:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Honeypot */}
        <input
          type="text"
          {...register("website")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Full Name *
          </label>

          <input
            {...register("name")}
            autoComplete="name"
            placeholder="John Doe"
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition-all duration-200 focus:border-[#B8794B] focus:ring-2 focus:ring-[#B8794B]/20"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Company</label>

          <input
            {...register("company")}
            autoComplete="organization"
            placeholder="ABC Foods"
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition-all duration-200 focus:border-[#B8794B] focus:ring-2 focus:ring-[#B8794B]/20"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Email *</label>

          <input
            type="email"
            {...register("email")}
            autoComplete="email"
            placeholder="john@email.com"
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition-all duration-200 focus:border-[#B8794B] focus:ring-2 focus:ring-[#B8794B]/20"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Phone</label>

          <input
            {...register("phone")}
            autoComplete="tel"
            placeholder="+1 234 567 890"
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition-all duration-200 focus:border-[#B8794B] focus:ring-2 focus:ring-[#B8794B]/20"
          />
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Service</label>

          <select
            {...register("service")}
            className="h-14 w-full rounded-2xl border border-[#DDD] px-5 outline-none transition-all duration-200 focus:border-[#B8794B] focus:ring-2 focus:ring-[#B8794B]/20"
          >
            <option>OEM Manufacturing</option>
            <option>Freeze Drying</option>
            <option>Quality Assurance</option>
            <option>Distribution</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Message *</label>

          <textarea
            rows={5}
            {...register("message")}
            placeholder="Tell us about your project..."
            className="w-full rounded-2xl border border-[#DDD] px-5 py-4 outline-none transition-all duration-200 focus:border-[#B8794B] focus:ring-2 focus:ring-[#B8794B]/20"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-20"
                />

                <path
                  d="M22 12A10 10 0 0 1 12 2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Start A Project"
          )}
        </Button>
      </form>
    </div>
  );
}
