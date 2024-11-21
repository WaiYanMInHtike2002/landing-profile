import { config } from "@/config/config";
import { EmailProps } from "@/types/contactType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { log } from "console";
export const createContactFetch = createAsyncThunk(
  "contact/createContactFetch",
  async (payload: EmailProps, thunkApi) => {
    const { onSuccess } = payload;
    try {
      const response = await fetch(`${config.apiUrl}/contact`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      onSuccess && onSuccess();
    }
  }
);
export const contactSlice = createSlice({
  name: "contact",
  initialState: {},
  reducers: {},
});
export default contactSlice.reducer;
