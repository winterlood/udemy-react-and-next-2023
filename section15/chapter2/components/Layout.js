import { useRouter } from "next/router";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const router = useRouter();

  const onClickHeader = () => {
    router.push("/");
  };

  return (
    <div>
      <header
        onClick={onClickHeader}
        className={style.header}
      >
        NARAS 🌏
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
