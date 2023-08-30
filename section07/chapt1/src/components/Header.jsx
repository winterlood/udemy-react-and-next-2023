import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}
