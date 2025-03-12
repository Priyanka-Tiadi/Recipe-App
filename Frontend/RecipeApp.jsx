import React, { useState, useEffect } from "react";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [image, setImage] = useState("");

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addRecipe = () => {
    if (!name.trim() || !description.trim()) return;

    // Check for duplicate recipe names
    const exists = recipes.some((r) => r.name.toLowerCase() === name.toLowerCase());
    if (exists) {
      alert("⚠️ This recipe name already exists! Try a different name.");
      return;
    }

    const newRecipe = { name, description, category, image };
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setName("");
    setDescription("");
    setCategory("Breakfast");
    setImage("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">🍽 Recipe App</h1>
      <div className="space-y-4">
        <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-3 w-full rounded-lg" />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-3 w-full rounded-lg" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-3 w-full rounded-lg">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-3 w-full rounded-lg" />

        {/* Preview Image */}
        {image && <img src={image} alt="Recipe Preview" className="mt-2 rounded-lg w-40 h-40 object-cover" />}

        <button onClick={addRecipe} className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700">
          ➕ Add Recipe
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-6">📋 Recipe List</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">😞 No recipes found. Try adding a new one!</p>
      ) : (
        recipes.map((recipe, index) => (
          <div key={index} className="border p-4 mt-3 rounded-lg bg-white shadow-md">
            <p className="font-bold text-lg">{recipe.name} ({recipe.category})</p>
            <p className="text-gray-700 break-words">{recipe.description}</p>

            {/* Show Image */}
            {recipe.image && <img src={recipe.image} alt={recipe.name} className="mt-2 w-40 h-40 rounded-lg object-cover" />}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeApp;
