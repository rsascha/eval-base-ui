import { MultiSelect } from "./components/MultiSelect";

function App() {
  return (
    <>
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
              <div>**</div>
              <div>Item 2</div>
              <div>XYZ</div>
            </div>
          </MultiSelect.Item>{" "}
          <MultiSelect.Item>
            <div className="flex items-center gap-2">
              <div>***</div>
              <div>Item 3</div>
              <div>XYZ</div>
            </div>
          </MultiSelect.Item>
        </MultiSelect.Root>
      </div>
    </>
  );
}

export default App;
