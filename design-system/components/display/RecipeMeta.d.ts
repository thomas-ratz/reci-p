import * as React from "react";
/** Row of recipe facts: time, servings, difficulty. */
export interface RecipeMetaProps {
  items: Array<{ icon?: string; label?: string; value: React.ReactNode }>;
  size?: "sm" | "md";
  /** Hairline dividers between items */
  divider?: boolean;
}
export declare function RecipeMeta(props: RecipeMetaProps): JSX.Element;
