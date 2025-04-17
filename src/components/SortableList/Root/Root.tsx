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
import { cloneElement, isValidElement, useEffect, useState } from "react";
import { ItemType } from "../Item";

type MultiSelectRootProps = {
  children: ItemType[];
  onChange?: ({ ids }: { ids: number[] }) => void;
};

/**
 * Renders Fragment of the sortable list.
 * @example
 * ```
 * <SortableList.Root onChange={(e) => console.debug(e)}>
 *  <SortableList.Item id={0}>
 *   <>Item 1</>
 * ```
 */
export function Root({ children, onChange }: MultiSelectRootProps) {
  const initSortableIds = children.map((c) => c.props.id);
  const [sortableIds, setSortableIds] = useState(initSortableIds);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (!onChange) return;
    const isEqual =
      sortableIds.length === initSortableIds.length &&
      sortableIds.every((id, i) => id === initSortableIds[i]);
    if (isEqual) return;
    onChange({ ids: sortableIds });
  }, [onChange, sortableIds, initSortableIds]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!active) return;
    if (!over) return;
    if (active.id !== over.id) {
      setSortableIds((items) => {
        const oldIndex = items.indexOf(Number(active.id));
        const newIndex = items.indexOf(Number(over.id));
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function getItemElement(id: number) {
    const child = children.find((c) => c.props.id === id);
    if (!child) return null;
    if (!isValidElement(child)) return null;
    const elem = cloneElement(child, { key: id, id });
    return elem;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sortableIds}
        strategy={verticalListSortingStrategy}
      >
        <>{sortableIds.map((id) => getItemElement(id))}</>
      </SortableContext>
    </DndContext>
  );
}
