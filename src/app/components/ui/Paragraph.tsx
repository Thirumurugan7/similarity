import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm, sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: React.ForwardedRef<
  HTMLParagraphElement,
  ParagraphProps
> = ({}) => {
  return <div className="max-w-prose">Paragraph</div>;
};

export default Paragraph;
