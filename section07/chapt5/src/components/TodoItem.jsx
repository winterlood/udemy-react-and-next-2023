import "./TodoItem.css";

export default function TodoItem({
  content,
  createdDate,
  isDone,
  id,
  onUpdate,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        type="checkbox"
        checked={isDone}
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <button>삭제</button>
    </div>
  );
}
