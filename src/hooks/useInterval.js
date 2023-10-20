import { useEffect, useCallback, useRef } from "react";
import useLastest from "./useLatest";

function useInterval(
  fn,
  delay,
  options = { immediate: false }
) {
  const timeRef = useRef(null)
  const immediate = options?.immediate

  const fnRef = useLastest(fn)

  const clear = useCallback(() => {
    clearInterval(timeRef.current)
  }, [])

  useEffect(() => {
    if (!delay || delay < 0) return
    if (immediate) {
      fnRef.current()
    }
    timeRef.current = setInterval(() => {
      fnRef.current()
    }, delay)
    return () => {
      clearInterval(timeRef.current)
    }
  }, [delay])

  return clear
}

export default useInterval