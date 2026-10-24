import * as React from "react";
/** Grouped, scalable, tick-off-able ingredient list. */
export interface IngredientListProps {
  groups: Array<{ title?: string; items: Array<{ qty?: number; unit?: string; name: string; note?: string }> }>;
  /** Multiplier applied to every qty (servings / base servings) */
  scale?: number;
  checkable?: boolean;
}
export declare function IngredientList(props: IngredientListProps): JSX.Element;
