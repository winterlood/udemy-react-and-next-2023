import { useState } from "react";

export default function Body() {
  const [light, setLigth] = useState("OFF");

  return (
    <div className="body">
      {light}
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
