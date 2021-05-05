// CHECKED 1.0
import { useEffect } from "react";

export const useDocTitle = (title?: string) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
};