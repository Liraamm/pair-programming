import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";

function App() {
  const [paragraph, setParagraph] = useState([
    {
      id: 1,
      text: "dsjdsk",
    },
  ]);
  function addParagraph(newData) {
    setParagraph([...paragraph, newData]);
  }
  function increment(counter) {
    return counter + 1;
  }
  function decrement(counter) {
    return counter - 1;
  }
  return (
    <div className="App">
      <Counter increment={increment} decrement={decrement} />
      <Paragraph addParagraph={addParagraph} paragraph={paragraph} />
    </div>
  );
}

export default App;
