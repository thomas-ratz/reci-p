import * as React from "react";
/** −/+ numeric stepper, primarily for scaling servings. */
export interface StepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  /** Prefix label, default "Serves" */
  label?: string;
  unit?: string;
}
export declare function Stepper(props: StepperProps): JSX.Element;
