import { ReactElement } from "react";
import { SelectItem } from "../item";
import { Select } from "@base-ui-components/react";

type SelectRootProps = {
  children: ReactElement<typeof SelectItem>[];
  defaultValue?: string;
  placeholder?: string;
};

/**
 * @example
 * ```tsx
 * <SelectRoot defaultValue="1" placeholder="Select an option">
 *  <SelectItem value="1">Option 1</SelectItem>
 * ```
 */
export function SelectRoot({
  children,
  defaultValue,
  placeholder,
}: SelectRootProps) {
  return (
    <Select.Root defaultValue={defaultValue}>
      <Select.Trigger
        className={`
          flex
          items-center
          justify-between
          `}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronUpDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner sideOffset={8}>
          <Select.ScrollUpArrow />
          <Select.Popup>{children}</Select.Popup>
          <Select.ScrollDownArrow />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

function ChevronUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
}
