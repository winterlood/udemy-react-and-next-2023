import "./App.css";
import { useState, useEffect, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const isMountRef = useRef();
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  useEffect(() => {
    console.log("마운트");
  }, []);

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("업데이트");
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
    </div>
  );
}

export default App;
