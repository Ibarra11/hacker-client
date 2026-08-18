import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

import { cn } from "./lib/cn";

const linkVariants = cva(
  "font-medium underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:no-underline",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
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
      tabIndex={disabled ? -1 : props.tabIndex}
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
