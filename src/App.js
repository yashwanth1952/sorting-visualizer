import "./App.css";
import SortController from "./comps/SortController";
import SortDisplayer from "./comps/SortDisplayer";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto auto auto auto auto auto",
      }}
    >
      <SortController />
      <SortDisplayer />
    </div>
  );
}

export default App;
