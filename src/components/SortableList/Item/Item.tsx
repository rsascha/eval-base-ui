import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";

type ItemProps = {
  sortableIndex?: number;
  children: ReactNode;
};

export function Item({ sortableIndex = 0, children }: ItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: sortableIndex });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children} {sortableIndex}
    </div>
  );
}
