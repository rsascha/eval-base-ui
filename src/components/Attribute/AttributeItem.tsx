import {
  CloseSquareOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useAttributeData } from "./useAttributeData";

type AttributeItemProps = {
  id: number;
  title: string;
  eye: boolean;
};

export function AttributeItem({ id }: AttributeItemProps) {
  const toggleEye = useAttributeData((state) => state.toggleEye);
  const items = useAttributeData((state) => state.items);
  const item = items.find((item) => item.id === id);
  const { title, eye } = item || { title: "", eye: false };
  return (
    <div className="grid items-center grid-cols-[1fr_auto_auto] p-2 h-10 border-b-1">
      <p className="text-xs">{title}</p>
      {eye ? (
        <EyeOutlined className="mr-2" onClick={() => toggleEye(id)} />
      ) : (
        <EyeInvisibleOutlined className="mr-2" onClick={() => toggleEye(id)} />
      )}
      <CloseSquareOutlined className="mr-1" />
    </div>
  );
}
