import "./Button.css";

export default function Button({ color, text, children }) {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <button
      onClick={onClick}
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
