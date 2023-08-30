import { useEffect } from "react";

export default function Home({ name }) {
  console.log("HOME");

  useEffect(() => {
    console.log("HOME MOUNT");
  }, []);

  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수

  return {
    props: {
      name: "KOREA",
    },
  };
};
