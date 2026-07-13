import { z } from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2, "Please enter your full name"),
    email: z.string().email("Enter a valid email address"),
    phone: z.string().min(6, "Enter a valid phone number"),
    arrival: z.string().min(1, "Select an arrival date"),
    departure: z.string().min(1, "Select a departure date"),
    guests: z.coerce.number().int().min(1).max(8),
    message: z.string().max(1000).optional().or(z.literal("")),
  })
  .refine((data) => data.departure > data.arrival, {
    message: "Departure must be after arrival",
    path: ["departure"],
  });

export type ContactInput = z.infer<typeof contactSchema>;
