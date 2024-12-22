import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";

import { actGetQuizizz } from "../rtk/quizizz/quizizzSlice";

const useQuizizz = () => {
  const { quizizz, loading, quizizzError } = useAppSelector((state) => state.persistedReducer.quizizz);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(actGetQuizizz());
    return () => {
      //clean up fn here
      promise.abort();
    }
  }, [dispatch]);

  return { quizizz, loading, quizizzError }
}

export default useQuizizz