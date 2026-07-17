import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-ink text-cream hover:bg-forest-soft",
        secondary:
          "rounded-full border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-sand/50",
        accent:
          "rounded-full bg-gold text-ink hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(193,161,102,0.35)]",
        ghost: "rounded-full bg-transparent text-ink hover:bg-sand/60",
        outline:
          "rounded-full border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-sand/40",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-5 text-xs",
        lg: "h-12 px-8 text-[0.8125rem]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { buttonVariants };
