import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const recipesData = [
  { id: 1, title: "Chocolate Cake", category: "Dessert", image: "https://sugargeekshow.com/wp-content/uploads/2020/01/chocolate-bundt-cake-featured.jpg" },
  { id: 2, title: "Cheesecake", category: "Dessert", image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/moms-famous-cheesecake-2.jpg" },
  { id: 3, title: "Ice Cream Sundae", category: "Dessert", image: "https://images.squarespace-cdn.com/content/v1/575ef1b97da24fd757acb056/a53c1d67-df4c-4f8d-83f6-cf6e19e5a39f/Ice-cream-sundae-hero-10.jpg" },
  { id: 4, title: "Omelette", category: "Breakfast", image: "https://static.vecteezy.com/system/resources/previews/037/799/034/non_2x/ai-generated-breakfast-omelette-on-a-plate-top-view-isolated-on-transparent-png.png" },
  { id: 5, title: "Avocado Toast", category: "Breakfast", image: "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-avocado-toast-1629717043.jpg" },
  { id: 6, title: "Pancakes", category: "Breakfast", image: "https://image.brigitte.de/10941328/t/Tc/v3/w960/r1/-/pancakes.jpg" },
  { id: 7, title: "Chicken Biryani", category: "Dinner", image: "https://static.vecteezy.com/system/resources/previews/024/650/050/non_2x/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai-free-photo.jpg" },
  { id: 8, title: "Spaghetti Bolognese", category: "Dinner", image: "https://gourmandiz.dhnet.be/wp-content/uploads/2019/08/spaghettibolo-4096x2731.jpg" },
  { id: 9, title: "Easy Pad Thai", category: "Dinner", image: "https://www.sidechef.com/recipe/6123c8c9-03f3-4f37-aa62-22a1873989d1.jpeg?d=1408x1120" },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // ✅ Fix: Define navigate

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredRecipes =
    selectedCategory === "All"
      ? recipesData
      : selectedCategory === "Favorites"
      ? recipesData.filter((recipe) => favorites.includes(recipe.id))
      : recipesData.filter((recipe) => recipe.category === selectedCategory);

  return (
    <div className="container mx-auto p-5">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-5">Welcome to the Recipe Cookbook</h2>

      {/* Navigation Bar */}
      <div className="navbar flex space-x-4 text-lg font-semibold">
        <span
          style={{ cursor: "pointer" }}
          className="text-blue-600 hover:underline"
          onClick={() => setSelectedCategory("All")}
        >
          Home
        </span>

        <span
          className="text-blue-600 hover:underline cursor-pointer" 
          onClick={() => navigate("/recipes")} // ✅ Fixed navigation
        >
          Recipe
        </span>

        <span className="cursor-pointer text-blue-600 hover:underline">Search</span>
      </div>

      {/* Category Filter */}
      <div className="w-full flex flex-wrap justify-evenly gap-8 mt-5 p-3">
        {["All", "Breakfast", "Dessert", "Dinner", "Favorites"].map((category) => (
          <button
            key={category}
            className={`min-w-[140px] px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-lg text-lg tracking-wide
            ${selectedCategory === category ? "bg-yellow-500 text-white transform scale-105" : "bg-blue-500 text-white hover:bg-yellow-400"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipe Cards */}
<div className="flex overflow-x-auto gap-5 p-4 whitespace-nowrap">        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <button
              className={`absolute top-2 right-2 text-2xl transition-transform duration-200 transform hover:scale-110 ${
                favorites.includes(recipe.id) ? "text-red-500" : "text-gray-400"
              }`}
              onClick={() => toggleFavorite(recipe.id)}
            >
              {favorites.includes(recipe.id) ? "❤️" : "🤍"}
            </button>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-500">{recipe.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
