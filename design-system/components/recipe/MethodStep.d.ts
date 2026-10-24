import * as React from "react";
/** Numbered method step with optional timer chip and done state. */
export interface MethodStepProps {
  number: number;
  title?: string;
  children: React.ReactNode;
  /** e.g. "15 min" */
  timer?: string;
  done?: boolean;
  onToggle?: () => void;
}
export declare function MethodStep(props: MethodStepProps): JSX.Element;
