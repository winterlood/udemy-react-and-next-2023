import "./Button.css";

export default function Button({ text, color, children }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "none",
};
