import * as React from "react";
/**
 * Recipe teaser for grids and lists.
 * @startingPoint section="Recipe" subtitle="Card with photo, title, time, rating" viewport="700x420"
 */
export interface RecipeCardProps {
  title: string;
  /** Eyebrow, e.g. "Weeknight" */
  category?: string;
  time?: string;
  serves?: string;
  rating?: number;
  ratingCount?: number;
  /** Badge over the photo, e.g. "New" */
  badge?: string;
  /** Image URL; striped placeholder when omitted */
  image?: string;
  saved?: boolean;
  onSave?: () => void;
  onClick?: () => void;
  layout?: "vertical" | "horizontal";
}
export declare function RecipeCard(props: RecipeCardProps): JSX.Element;
