import { MultiSelect } from "./components/MultiSelect";
import { SortableDemo } from "./components/SortableDemo/SortableDemo";

function App() {
  return (
    <>
      <SortableDemo />
      <div>
        <MultiSelect.Root>
          <MultiSelect.Item>
            <div className="flex items-center gap-2">
              <div>*</div>
              <div>Item 1</div>
              <div>XYZ</div>
            </div>
          </MultiSelect.Item>
          <MultiSelect.Item>
            <div className="flex items-center gap-2">
              <div>*</div>
              <div>Item 1</div>
              <div>XYZ</div>
            </div>
          </MultiSelect.Item>
        </MultiSelect.Root>
      </div>
    </>
  );
}

export default App;
