import useUpdate from "../hooks/useUpdate";

export default function Controller({ onClickButton }) {
  useUpdate(() => {
    console.log("Controller UPDATE");
  });
  return (
    <div>
      <button onClick={() => onClickButton(-1)}>-1</button>
      <button onClick={() => onClickButton(-10)}>
        -10
      </button>
      <button onClick={() => onClickButton(-100)}>
        -100
      </button>
      <button onClick={() => onClickButton(100)}>
        +100
      </button>
      <button onClick={() => onClickButton(10)}>+10</button>
      <button onClick={() => onClickButton(1)}>+1</button>
    </div>
  );
}
