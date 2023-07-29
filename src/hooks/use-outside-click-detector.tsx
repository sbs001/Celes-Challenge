import { RefObject, useEffect } from "react";

const useOutsideClickDetector = (
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void
) => {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick, ref])
}

export default useOutsideClickDetector;
