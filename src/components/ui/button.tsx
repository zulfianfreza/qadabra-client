import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "bg-violet-700 text-gray-50 hover:bg-violet-700/90 dark:bg-gray-50 dark:text-violet-700 dark:hover:bg-gray-50/90",
        destructive:
          "bg-red-700 text-gray-50 hover:bg-red-700/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline:
          "border border-violet-700 hover:bg-violet-700/90 hover:text-white text-violet-700",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-md px-8",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-xl",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, rounded }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
