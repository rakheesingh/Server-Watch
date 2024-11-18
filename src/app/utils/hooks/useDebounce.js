import { useRef } from "react";

function useDebounce(debouncefunc, delay) {
  let timer = useRef(null);

  function debounce(...args) {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => debouncefunc(...args), delay);
  }

  return debounce;
}

export default useDebounce;
