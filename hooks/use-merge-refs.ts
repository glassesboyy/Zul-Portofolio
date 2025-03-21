import { useCallback } from "react";
import type { RefCallback } from "react";

export function useMergeRefs<T>(
  ...refs: (RefCallback<T> | React.RefObject<T> | null | undefined)[]
) {
  return useCallback(
    (element: T | null) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === "function") {
          ref(element);
        } else {
          (ref as React.MutableRefObject<T | null>).current = element;
        }
      });
    },
    [refs]
  );
}
