import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";

import { actGetAnnouncements } from "../rtk/announcements/announcementsSlice";

const useAnnouncements = () => {
  const { announcements, loading, announcementsError } = useAppSelector((state) => state.persistedReducer.announcemens);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(actGetAnnouncements());
    return () => {
      //clean up fn here
      promise.abort();
    }
  }, [dispatch]);





  return { announcements, loading, announcementsError }
}

export default useAnnouncements