import { useRef, useEffect } from "react";

export default function useUpdate(cb) {
  const isMountRef = useRef(false);

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    cb();
  });
}
