import { ReactElement } from "react";
import { SelectItem } from "../item";

type SelectRootProps = {
  children: ReactElement<typeof SelectItem>[];
};

/**
 * @example
 * ```tsx
 * <Select.Root>
 *  <Select.Item>123</Select.Item>
 * ```
 */
export function SelectRoot({ children }: SelectRootProps) {
  return <div>{children}</div>;
}
