import React from "react";
import { SortableProps } from "./Sortable";

function Collapsible({ children }: SortableProps) {
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { collapsible: true })
  );
}

export default Collapsible;
