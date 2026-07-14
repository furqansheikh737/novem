import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  company: z.string().optional(),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z.string().optional(),

  service: z.string().min(1, "Please select a service"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters"),

  website: z.string().optional(), // Honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;