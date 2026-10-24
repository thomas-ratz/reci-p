import * as React from "react";
/** Striped stand-in for food photography until real images are supplied. */
export interface ImagePlaceholderProps {
  label?: string;
  /** CSS aspect-ratio, default "4 / 3" */
  ratio?: string;
  radius?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;
