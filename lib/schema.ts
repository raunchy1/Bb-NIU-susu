import { z } from "zod";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function buildContactSchema(v: Dictionary["contact"]["form"]["validation"]) {
  return z
    .object({
      name: z.string().min(2, v.name),
      email: z.string().email(v.email),
      phone: z.string().min(6, v.phone),
      arrival: z.string().min(1, v.arrival),
      departure: z.string().min(1, v.departure),
      guests: z.coerce.number().int().min(1).max(8),
      message: z.string().max(1000).optional().or(z.literal("")),
    })
    .refine((data) => data.departure > data.arrival, {
      message: v.departureAfterArrival,
      path: ["departure"],
    });
}

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  guests: number;
  message?: string;
};
