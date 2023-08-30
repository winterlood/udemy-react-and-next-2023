import "./Header.css";
import { memo } from "react";

function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

export default memo(Header);
