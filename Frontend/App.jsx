import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import SearchResults from "./pages/SearchResults";

import RecipeDetails from "./pages/RecipeDetails";
import EditRecipe from "./pages/EditRecipe";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />

          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <footer className="bg-yellow-500 text-center text-white py-3 mt-5">
        © 2025 Recipe Cookbook. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
