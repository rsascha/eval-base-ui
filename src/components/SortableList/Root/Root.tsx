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
import { cloneElement, isValidElement, ReactElement, useState } from "react";

type MultiSelectRootProps = {
  children: React.ReactNode;
};

export function Root({ children }: MultiSelectRootProps) {
  let length = 1;
  if (Array.isArray(children)) {
    length = children.length;
  }
  const array = Array.from({ length }, (_, i) => i + 1);
  const [items, setItems] = useState(array);
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
      setItems((items) => {
        const aId = Number(active.id);
        const oId = Number(over.id);
        const oldIndex = items.indexOf(aId);
        const newIndex = items.indexOf(oId);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function getElement(index: number) {
    if (!Array.isArray(children)) return null;
    const child = children[index - 1] as ReactElement<{
      sortableIndex: number;
    }>;
    if (!child) return null;
    if (!isValidElement(child)) return null;
    const elem = cloneElement(child, {
      key: index,
      sortableIndex: index,
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
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div>{items.map((index) => getElement(index))}</div>
      </SortableContext>
    </DndContext>
  );
}
