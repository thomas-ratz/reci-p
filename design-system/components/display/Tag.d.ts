import * as React from "react";
/** Selectable filter chip. */
export interface TagProps {
  selected?: boolean;
  icon?: string;
  onClick?: () => void;
  /** Shows an × and calls this when pressed */
  onRemove?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
