import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full border-0 border-b border-line bg-transparent py-3 text-foreground placeholder:text-secondary/70 focus:outline-none focus:border-accent transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
