import * as React from "react";
/** Brief dark-brown confirmation pill. Position it yourself (bottom-center). */
export interface ToastProps {
  icon?: string;
  children: React.ReactNode;
  /** Optional action label, e.g. "Undo" */
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
