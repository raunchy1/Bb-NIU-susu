"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsappButton({ message }: { message: string }) {
  return (
    <motion.a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg shadow-black/10"
    >
      <MessageCircle size={24} strokeWidth={1.6} />
    </motion.a>
  );
}
