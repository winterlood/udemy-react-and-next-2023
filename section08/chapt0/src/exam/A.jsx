import { useState } from "react";

// useState를 이용한 카운터 앱
export default function A() {
  const [count, setCount] = useState(0);

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
