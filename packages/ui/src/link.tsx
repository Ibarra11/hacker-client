"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

import { cn } from "./lib/cn";

const linkVariants = cva(
  "font-medium focus-visible:outline-4 cursor-pointer  no-underline aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "text-orange-500 hover:text-orange-800 focus-visible:text-orange-800 focus-visible:outline-orange-100 disabled:text-neutral-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type LinkProps = ComponentProps<"a"> &
  VariantProps<typeof linkVariants> & {
    disabled?: boolean;
  };

export function Link({
  className,
  variant,
  disabled,
  onClick,
  ...props
}: LinkProps) {
  return (
    <a
      {...props}
      className={cn(linkVariants({ variant }), className)}
      aria-disabled={disabled || undefined}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
    />
  );
}

export { linkVariants };
export type { LinkProps };
