import React, { useState } from "react";
import { Link } from "react-router-dom";

const recipes = [
  { id: 1, title: "Sushi", category: "Japanese" },
  { id: 2, title: "Tacos", category: "Mexican" },
  { id: 3, title: "Pizza", category: "Italian" },
];

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 w-full rounded mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="block mb-2">
              {recipe.title}
            </Link>
          ))
        ) : (
          <p className="text-red-500">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
