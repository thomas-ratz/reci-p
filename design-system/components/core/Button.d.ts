import * as React from "react";
/**
 * Pill-shaped action button.
 * @startingPoint section="Core" subtitle="Primary, secondary, tint, outline, ghost" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tint" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Lucide icon name before the label */
  iconLeft?: string;
  /** Lucide icon name after the label */
  iconRight?: string;
  fullWidth?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
