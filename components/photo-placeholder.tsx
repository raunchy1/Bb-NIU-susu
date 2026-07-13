import type { CSSProperties } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-line bg-[#F1ECE3]",
        className
      )}
      style={style}
    >
      <Camera size={28} strokeWidth={1.2} className="text-secondary/40" />
    </div>
  );
}
