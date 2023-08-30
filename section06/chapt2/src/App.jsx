import "./App.css";
import { useState } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput("");

  const onClickButton = (value) => {
    setCount(count + value);
  };

  useUpdate(() => {
    console.log("APP UPDATE");
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 && <Even />}
        </section>
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
      <input value={text} onChange={onChangeText} />
    </div>
  );
}

export default App;
