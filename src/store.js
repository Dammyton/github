import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice.js";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
