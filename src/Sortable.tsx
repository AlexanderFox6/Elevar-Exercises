import React, { ReactElement } from "react";
import { TreeNode, TreeProps } from "./TreeComponent";

type SortableProps = {
  children: ReactElement<TreeProps> | ReactElement<TreeProps>[];
};

function Sortable({ children }: SortableProps) {
  const sortData = (data: TreeNode[]): TreeNode[] => {
    return data
      .sort((a, b) => a.text.localeCompare(b.text))
      .map((node) => ({
        ...node,
        children: node.children ? sortData(node.children) : undefined,
      }));
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      data: sortData(child.props.data),
    })
  );
}

export default Sortable;
export type { SortableProps };
