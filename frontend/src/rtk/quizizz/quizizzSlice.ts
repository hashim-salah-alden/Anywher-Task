import { createSlice } from "@reduxjs/toolkit";
import actGetQuizizz from "./act/actGetQuizizz";

export interface QuizizzQuestion {
  questionText: string;
  options: string[]; // Array of options for the question
  correctAnswer: string; // Correct answer
  explanation?: string; // Optional explanation
}

export interface Quizizz {
  _id: string;
  title: string;
  description: string;
  questions: QuizizzQuestion[]; // Dynamic array of questions
  totalMarks: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface QuizizzState {
  quizizz: Quizizz[]; // Array of quizzes
  loading: "idle" | "pending" | "succeeded" | "failed"; // Loading status
  quizizzError: string | null | Record<string, unknown>; // Error handling
}

const initialState: QuizizzState = {
  quizizz: [],
  loading: "idle",
  quizizzError: null,
};

const quizizzSlice = createSlice({
  name: "quizizz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetQuizizz.pending, (state) => {
      state.loading = "pending";
      state.quizizzError = null;
    });
    builder.addCase(actGetQuizizz.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.quizizz = action.payload;
    });
    builder.addCase(actGetQuizizz.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.quizizzError = action.payload;
      }
    });
  },
});

export { actGetQuizizz };
// export const {  } = announcementsSlice.actions;
export default quizizzSlice.reducer;
