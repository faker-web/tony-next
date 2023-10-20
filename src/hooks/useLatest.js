import { useRef } from "react";

function useLastest(fn) {
  const ref = useRef(fn)
  ref.current = fn
  return ref
}

export default useLastest