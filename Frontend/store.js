import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipeSlice"; // ✅ Correct import

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store; // ✅ Ensure this default export is present
