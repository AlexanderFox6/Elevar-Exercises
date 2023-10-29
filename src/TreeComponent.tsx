import React, { useState } from "react";

type TreeNode = {
  text: string;
  children?: TreeNode[];
};

type TreeProps = {
  data: TreeNode[];
  collapsible?: boolean;
};

function TreeComponent({ data, collapsible }: TreeProps) {
  return (
    <ul>
      {data.map((node) => (
        <TreeNode key={node.text} node={node} collapsible={collapsible} />
      ))}
    </ul>
  );
}

function TreeNode({
  node,
  collapsible,
}: {
  node: TreeNode;
  collapsible?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(event: React.MouseEvent) {
    if (collapsible) {
      event.stopPropagation();
      setIsOpen(!isOpen);
    }
  }

  return (
    <li onClick={handleClick}>
      {node.text}
      {isOpen && node.children && (
        <ul>
          {node.children.map((child) => (
            <TreeNode key={child.text} node={child} collapsible={collapsible} />
          ))}
        </ul>
      )}
    </li>
  );
}

export { TreeComponent, TreeNode };
export type { TreeProps };
