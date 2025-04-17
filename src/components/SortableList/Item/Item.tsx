import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactElement, ReactNode } from "react";

type ItemProps = {
  id: number;
  children: ReactNode;
};

/**
 * Renders a div.
 * @example
 * ```
 * <SortableList.Item id={5}>
 *  <>Item 2</>
 * </SortableList.Item>
 * ```
 */
export function Item({ id, children }: ItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move"
    >
      {children}
    </div>
  );
}

export type ItemType = ReactElement<React.ComponentProps<typeof Item>>;
