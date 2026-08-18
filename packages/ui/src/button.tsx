"use client";
import { type ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium shadow-sm focus-visible:outline-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-orange-500 text-white hover:bg-orange-800 focus-visible:bg-orange-800 focus-visible:outline-orange-100 disabled:bg-neutral-200 disabled:text-neutral-500",
        secondary:
          "border border-neutral-200 bg-neutral-50 text-neutral-900 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-purple-100 disabled:bg-neutral-200  disabled:text-neutral-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export { buttonVariants };
export type { ButtonProps };
