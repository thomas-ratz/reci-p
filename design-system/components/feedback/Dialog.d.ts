import * as React from "react";
/** Modal dialog on a warm brown scrim. */
export interface DialogProps {
  open: boolean;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons, right-aligned */
  actions?: React.ReactNode;
  onClose?: () => void;
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
