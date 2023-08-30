import "./TodoEditor.css";

export default function TodoEditor() {
  return (
    <div className="TodoEditor">
      <input placeholder="새로운 TODO..." />
      <button>추가</button>
    </div>
  );
}
