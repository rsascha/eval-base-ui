import { Select } from "./components/Select";

function App() {
  return (
    <>
      <div className="w-1/3">
        <Select.Root placeholder="Select an item">
          <Select.Item value="1">123</Select.Item>
          <Select.Item value="2">456</Select.Item>
          <Select.Item value="3">789</Select.Item>
        </Select.Root>
      </div>
    </>
  );
}

export default App;
