import * as React from "react";
/** Round icon-only button; always pass an accessible label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  variant?: "tint" | "ghost" | "solid" | "overlay";
  size?: "sm" | "md" | "lg";
  /** Toggled-on state (e.g. saved) — tints the glyph orange */
  active?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
