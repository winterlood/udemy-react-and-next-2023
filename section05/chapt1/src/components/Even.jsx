import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    return () => {
      console.log("EVEN 언마운트");
    };
  }, []);

  return <div>짝수입니다</div>;
}
