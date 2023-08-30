import "./Body.css";
import Button from "./Button";

function ButtonChild() {
  return <div>버튼의 자식 컴포넌트</div>;
}

export default function Body() {
  const buttonProps = {
    text: "1번 버튼",
    color: "yellow",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <div className="body">
      <h1>body</h1>
      <Button {...buttonProps}>
        <ButtonChild />
      </Button>
      <Button text={"2번 버튼"} />
      <Button text={"3번 버튼"} />
    </div>
  );
}
