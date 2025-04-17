import { SortableList } from "./components/SortableList";

function App() {
  return (
    <>
      <SortableList.Root onChange={(e) => console.debug(e)}>
        <SortableList.Item id={0}>
          <>Item 1</>
        </SortableList.Item>
        <SortableList.Item id={5}>
          <>Item 2</>
        </SortableList.Item>
        <SortableList.Item id={2}>
          <>Item 3</>
        </SortableList.Item>
        <SortableList.Item id={3}>
          <>Item 4</>
        </SortableList.Item>
      </SortableList.Root>
    </>
  );
}

export default App;
