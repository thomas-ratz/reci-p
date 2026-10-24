import * as React from "react";
/** Lucide icon (CDN, 2px stroke) tinted with currentColor. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name in kebab-case, e.g. "clock", "chef-hat", "heart". */
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  /** Fill the glyph with its colour (e.g. rating stars, saved heart) */
  filled?: boolean;
}
export declare function Icon(props: IconProps): JSX.Element;
