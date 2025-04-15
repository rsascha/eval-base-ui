import { Select } from "./components/Select";

function App() {
  return (
    <>
      <Select.Root placeholder="Select an item">
        <Select.Item value="123">123</Select.Item>
        <Select.Item value="456">456</Select.Item>
        <Select.Item value="789">789</Select.Item>
      </Select.Root>
    </>
  );
}

export default App;
