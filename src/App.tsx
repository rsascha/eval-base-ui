import { SortableList } from "./components/SortableList";
import { SortableDemo } from "./components/SortableDemo/SortableDemo";

function App() {
  return (
    <>
      <SortableDemo />
      <div>
        <SortableList.Root>
          <SortableList.Item sortableIndex={0}>
            <div className="flex items-center gap-2">
              <div>*</div>
              <div>Item 1</div>
              <div>XYZ</div>
            </div>
          </SortableList.Item>
          <SortableList.Item sortableIndex={1}>
            <div className="flex items-center gap-2">
              <div>*</div>
              <div>Item 1</div>
              <div>XYZ</div>
            </div>
          </SortableList.Item>
        </SortableList.Root>
      </div>
    </>
  );
}

export default App;
