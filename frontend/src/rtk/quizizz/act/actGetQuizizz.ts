import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const actGetQuizizz = createAsyncThunk(
  "quizizz/actGetQuizizz",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await axios.get(
        "http://localhost:5000/quizzes?title=&description=&page=1&limit=10",
        {
          signal,
        }
      );
      return res.data.quizzes;
    } catch (error) {
      const errors = error as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        console.log(errors);
      }
      // do what you want with your axios error
      return rejectWithValue(errors.message);
    }
  }
);

export default actGetQuizizz;
