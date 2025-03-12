import { useState } from "react";

function EditRecipe() {
  const [title, setTitle] = useState("Chocolate Cake");
  const [ingredients, setIngredients] = useState("Flour, Sugar, Cocoa, Eggs");
  const [instructions, setInstructions] = useState("Mix and bake at 350°F for 30 mins.");
  const [category, setCategory] = useState("Dessert");

  const handleSave = () => {
    alert("Recipe Updated Successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-5 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Edit Recipe</h2>
      
      <label className="block text-lg font-semibold">Title:</label>
      <input 
        className="border p-2 w-full rounded-md" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />

      <label className="block text-lg font-semibold mt-3">Ingredients:</label>
      <textarea 
        className="border p-2 w-full rounded-md" 
        rows="3"
        value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)} 
      />

      <label className="block text-lg font-semibold mt-3">Instructions:</label>
      <textarea 
        className="border p-2 w-full rounded-md" 
        rows="4"
        value={instructions} 
        onChange={(e) => setInstructions(e.target.value)} 
      />

      <label className="block text-lg font-semibold mt-3">Category:</label>
      <select className="border p-2 w-full rounded-md" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Breakfast</option>
        <option>Dessert</option>
        <option>Dinner</option>
      </select>

      <button 
        className="bg-yellow-500 text-white px-5 py-2 rounded-md mt-4 w-full"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditRecipe;
