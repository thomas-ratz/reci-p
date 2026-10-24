import * as React from "react";
/** Single-choice radio. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  label?: React.ReactNode;
  name?: string;
  value: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
