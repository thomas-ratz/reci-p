import * as React from "react";
/** Small uppercase status label (New, Vegan, Quick). Non-interactive. */
export interface BadgeProps {
  tone?: "neutral" | "accent" | "success" | "warning" | "danger" | "inverse";
  icon?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
