import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cloneElement, isValidElement, useState } from "react";
import { ItemType } from "../Item";

type MultiSelectRootProps = {
  children: ItemType[];
};

export function Root({ children }: MultiSelectRootProps) {
  const initSortableIndexItems = children.map((c) => c.props.sortableIndex);
  const [sortableIndexItems, setSortableIndexItems] = useState(
    initSortableIndexItems
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!active) return;
    if (!over) return;
    if (active.id !== over.id) {
      setSortableIndexItems((items) => {
        const oldIndex = items.indexOf(Number(active.id));
        const newIndex = items.indexOf(Number(over.id));
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function getItemElement(sortableIndex: number) {
    const child = children.find((c) => c.props.sortableIndex === sortableIndex);
    if (!child) return null;
    if (!isValidElement(child)) return null;
    const elem = cloneElement(child, {
      key: sortableIndex,
      sortableIndex,
    });
    return elem;
  }

  if (!children) {
    return null;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sortableIndexItems}
        strategy={verticalListSortingStrategy}
      >
        <div>
          {sortableIndexItems.map((sortableIndex) =>
            getItemElement(sortableIndex)
          )}
        </div>
      </SortableContext>
    </DndContext>
  );
}
