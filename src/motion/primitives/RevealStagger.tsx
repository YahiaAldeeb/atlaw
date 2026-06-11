import { createElement } from "react";
import { useReveal } from "../useReveal";
import { STAGGER } from "../config";

type RevealStaggerProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  /** Amount between children. Defaults to STAGGER.items (0.06). Use STAGGER.grid for grids. */
  amount?: number;
  delay?: number;
  start?: string;
};

/**
 * RevealStagger — staggers its DIRECT children up on scroll-in. Drop it around a
 * grid/list and it animates each card/row/column in sequence. Honours reduced
 * motion (handled inside useReveal).
 */
export const RevealStagger = ({
  children,
  as = "div",
  amount = STAGGER.items,
  delay = 0,
  start,
  ...rest
}: RevealStaggerProps): JSX.Element => {
  const ref = useReveal<HTMLElement>("stagger", { stagger: amount, delay, start });
  return createElement(as, { ref, ...rest }, children);
};
