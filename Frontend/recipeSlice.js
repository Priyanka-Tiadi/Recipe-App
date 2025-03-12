import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [
    {
      id: 1,
      title: "Chocolate Cake",
      ingredients: "Flour, Sugar, Cocoa, Eggs",
      instructions: "Mix and bake at 350°F for 30 mins.",
      image: "", // New field
      category: "Dessert", // New field
    },
  ],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    editRecipe: (state, action) => {
      const { id, title, ingredients, instructions, image, category } = action.payload;
      const recipe = state.recipes.find((r) => r.id === id);
      if (recipe) {
        recipe.title = title;
        recipe.ingredients = ingredients;
        recipe.instructions = instructions;
        recipe.image = image; // Update image
        recipe.category = category; // Update category
      }
    },
  },
});

export const { editRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
