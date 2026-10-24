import * as React from "react";
/** Tabs — underline for page sections, pill for compact toggles. */
export interface TabsProps {
  items: Array<string | { value: string; label: string; count?: number }>;
  value: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "pill";
}
export declare function Tabs(props: TabsProps): JSX.Element;
