import * as React from "react";
/** Hover/focus hint in dark brown. */
export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: "top" | "bottom";
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
