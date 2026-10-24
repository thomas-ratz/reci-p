import * as React from "react";
/** Text field with optional label, leading icon, hint and error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  /** Leading Lucide icon, e.g. "search" */
  icon?: string;
  size?: "sm" | "md" | "lg";
}
export declare function Input(props: InputProps): JSX.Element;
