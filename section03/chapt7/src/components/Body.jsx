import "./Body.css";
import { useState, useRef } from "react";

export default function Body() {
  const nameRef = useRef();
  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name + " : " + e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (state.name === "") {
      nameRef.current.focus();
    }
  };

  return (
    <div className="body">
      <div>
        <input
          ref={nameRef}
          name="name"
          placeholder="이름"
          value={state.name}
          onChange={onChange}
        />
      </div>
      <div>
        <select
          name="gender"
          value={state.gender}
          onChange={onChange}
        >
          <option value="">밝히지 않음</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={state.bio}
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
}
