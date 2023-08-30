import { useState } from "react";

function LigthBulb({ light }) {
  return (
    <>
      {light === "ON" ? (
        <div style={{ backgroundColor: "orange" }}>ON</div>
      ) : (
        <div style={{ backgroundColor: "gray" }}>OFF</div>
      )}
    </>
  );
}

function StaticLigthBulb() {
  console.log("STATIC LIGTH BULB 컴포넌트 : ");
  return <div style={{ backgroundColor: "gray" }}>OFF</div>;
}

export default function Body() {
  const [light, setLigth] = useState("OFF");

  return (
    <div className="body">
      <LigthBulb light={light} />
      <StaticLigthBulb />
      <button
        onClick={() => {
          setLigth("ON");
        }}
      >
        불켜기
      </button>
      <button
        onClick={() => {
          setLigth("OFF");
        }}
      >
        불끄기
      </button>
    </div>
  );
}
