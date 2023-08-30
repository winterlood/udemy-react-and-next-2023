import { useEffect, useState } from "react";
import style from "./Searchbar.module.css";
import { useRouter } from "next/router";

export default function Searchbar({ q }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "") {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요..."
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
