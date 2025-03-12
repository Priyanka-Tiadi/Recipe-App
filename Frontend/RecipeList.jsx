import React, { useState } from "react"; // ✅ Correct import
import { Link } from "react-router-dom";
import "./RecipeList.css";


import "./RecipeList.css"; 

const recipesData = [
  { id: 1, title: "Sushi", category: "Japanese", image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg" },
  { id: 2, title: "Tacos", category: "Mexican", image: "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-11.jpg" },
  { id: 3, title: "Pizza", category: "Italian", image: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg"},
  { id: 4, title: "Dal Makhani", category: "Indian", image: "https://kblog.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/05/11134415/Dal-Makhani-Recipe-1.jpg"},
  { id: 5, title: "Dosa", category: "South Indian", image: "https://masalachaimedia.com/wp-content/uploads/2022/12/Best-dosa-in-Bangalore-1024x682.jpg"},
  { id: 6, title: "Manchurian", category: "Indo Chinese", image: "https://thumbs.dreamstime.com/b/veg-manchurian-popular-indo-chinese-food-made-cauliflower-florets-other-vegetable-served-white-plate-over-rustic-225789604.jpg"},
  { id: 7, title: "Pickle", category: "Tamato Pickle", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/tomato-pickle-recipe.jpg"},
   { id: 8, title: "Rasagulla", category: "Indian Sweet", image: "https://www.lekhafoods.com/media/1050922/kolkata-rasagulla.jpg"},
   { id: 9, title: "Punjabi Patato Samosa", category: "Indian Snack", image: "https://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg" },
   { id: 10, title: "Orange Juice", category:"Juice", image: "https://img.freepik.com/premium-photo/orange-juice-glass-bottle-oranges_140916-1089.jpg"},
    { id: 11, title: "Mushroom Bhaji", category:"Indian Curry", image: "https://flawlessfood.co.uk/wp-content/uploads/2022/07/Mushroom-Bhaji-Indian-Curry-Flawless-21-1024x1024.jpg"},
    { id: 12, title: "Pasta Alfredo", category:"Italian", image: "https://ravs-kitchen.com/wp-content/uploads/2020/06/IMG_8858.jpg"}
];

const RecipeList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 Filter recipes based on search query
  const filteredRecipes = recipesData.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Recipe List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 w-full mb-4 rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h3 className="text-lg font-bold">{recipe.title}</h3>
              <p className="text-gray-500">{recipe.category}</p>
            </Link>
          ))
        ) : (
          <p className="text-center text-red-500">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;