import * as React from "react";
/** Five-star rating; interactive when onRate is set. */
export interface RatingProps {
  value?: number;
  /** Number of ratings — shows "4.8 (213)" */
  count?: number;
  size?: number;
  onRate?: (stars: number) => void;
}
export declare function Rating(props: RatingProps): JSX.Element;
