import { PlusSquareOutlined } from "@ant-design/icons";
import { SortableList } from "../SortableList";
import { AttributeItem } from "./AttributeItem";
import { useAttributeData } from "./useAttributeData";

export function Attribute() {
  const items = useAttributeData((state) => state.items);
  const sortItems = useAttributeData((state) => state.sortItems);

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4">
      <div className="w-60">
        <div className="bg-pc-gray-300 border-b-2 p-2 flex justify-between items-center h-12">
          <h3>Attribute</h3>
          <PlusSquareOutlined className="text-2xl" />
        </div>
        <div className="bg-pc-gray-200">
          <SortableList.Root onChange={({ ids }) => sortItems(ids)}>
            {items.map((item) => (
              <SortableList.Item key={item.id} id={item.id}>
                <AttributeItem id={item.id} title={item.title} eye={item.eye} />
              </SortableList.Item>
            ))}
          </SortableList.Root>
        </div>
      </div>
      <div>
        <pre className="text-xs">{JSON.stringify(items, null, 2)}</pre>
      </div>
    </div>
  );
}
