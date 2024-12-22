import { createSlice } from "@reduxjs/toolkit";
import actGetAnnouncements from "./act/actGetannouncements";

export interface AnnouncementsState {
  announcements: {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  announcementsError: string | null | Record<string, unknown>;
}

const initialState: AnnouncementsState = {
  announcements: [],
  loading: "idle",
  announcementsError: null,
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetAnnouncements.pending, (state) => {
      state.loading = "pending";
      state.announcementsError = null;
    });
    builder.addCase(actGetAnnouncements.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.announcements = action.payload;
    });
    builder.addCase(actGetAnnouncements.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.announcementsError = action.payload;
      }
    });
  },
});

export { actGetAnnouncements };
// export const {  } = announcementsSlice.actions;
export default announcementsSlice.reducer;
