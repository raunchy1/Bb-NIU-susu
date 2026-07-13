"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const searchParams = useSearchParams();
  const room = searchParams.get("room");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      guests: 2,
      message: room ? `I'm interested in the ${room.replace(/-/g, " ")} room.` : "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-line px-8 py-16 text-center"
      >
        <p className="font-serif text-2xl">Thank you.</p>
        <p className="mt-3 text-secondary">
          Your message has reached us. We&apos;ll reply within a day with
          availability and rates.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} autoComplete="name" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} autoComplete="email" />
          {errors.email && (
            <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" {...register("phone")} autoComplete="tel" />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-700">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="guests">Guests</Label>
          <Input id="guests" type="number" min={1} max={8} {...register("guests")} />
          {errors.guests && (
            <p className="mt-1 text-xs text-red-700">{errors.guests.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <Label htmlFor="arrival">Arrival</Label>
          <Input id="arrival" type="date" {...register("arrival")} />
          {errors.arrival && (
            <p className="mt-1 text-xs text-red-700">{errors.arrival.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="departure">Departure</Label>
          <Input id="departure" type="date" {...register("departure")} />
          {errors.departure && (
            <p className="mt-1 text-xs text-red-700">{errors.departure.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={4} {...register("message")} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again, or write to us on WhatsApp.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
