import React from "react";
import { useParams } from "react-router-dom";

const recipesData = [
  { id: 1, title: "Sushi", category: "Japanese", image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg", ingredients: ["Rice", "Fish", "Seaweed"] },
  { id: 2, title: "Tacos", category: "Mexican", image: "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-11.jpg", ingredients: ["Tortilla", "Beef", "Cheese"] },
  { id: 3, title: "Pizza", category: "Italian", image: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg", ingredients: ["Dough", "Tomato Sauce", "Cheese"] },
  { id: 4, title: "Dal Makhani", category: "Indian", image: "https://kblog.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/05/11134415/Dal-Makhani-Recipe-1.jpg", ingredients: ["Lentils", "Tomato", "Butter"] },
  { id: 5, title: "Dosa", category: "South Indian", image: "https://masalachaimedia.com/wp-content/uploads/2022/12/Best-dosa-in-Bangalore-1024x682.jpg",ingredients: ["2 cups Rice","1/2 cup Urad Dal (Black Gram Lentils)","Water (as needed for soaking & grinding)","Salt (to taste)","Oil or Ghee (for cooking)"]  },
  { id: 6, title: "Manchurian", category: "Indo Chinese", image: "https://thumbs.dreamstime.com/b/veg-manchurian-popular-indo-chinese-food-made-cauliflower-florets-other-vegetable-served-white-plate-over-rustic-225789604.jpg",ingredients:["1 cup Cabbage finely grated","1/2 cup Carrot finely grated","1/2 cup Capsicum (Bell Pepper), finely chopped","2 tablespoons Cornflour","1 teaspoon Soy Sauce","Salt to taste","oil"] },
  { id: 7, title: "Pickle", category: "Tamato Pickle", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/tomato-pickle-recipe.jpg", ingredients:["5 Tomatoes, chopped","4 tablespoons Oil (Mustard oil or any cooking oil)","1/2 teaspoon Fenugreek Seeds (Methi Seeds)","1/2 teaspoon Asafoetida (Hing)"]},
  { id: 8, title: "Rasagulla", category: "Indian Sweet", image: "https://www.lekhafoods.com/media/1050922/kolkata-rasagulla.jpg",ingredients:["1 liter Full-fat Milk","2 tbsp Lemon Juice (or Vinegar)","1 cup Sugar","2-3 Cardamom Pods (crushed)","4 cups Water"] },
  { id: 9, title: "Punjabi Patato Samosa", category: "Indian Snack", image: "https://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg" ,ingredients:["2 cups All-Purpose Flour (Maida)","1/4 cup Oil or Ghee","1/2 teaspoon Salt","1/2 teaspoon Carom Seeds (Ajwain)","1/2 cup Water (as needed, to knead the dough)"]},
  { id: 10, title: "Orange Juice", category:"Juice", image: "https://img.freepik.com/premium-photo/orange-juice-glass-bottle-oranges_140916-1089.jpg",ingredients:["4-5 Orange","Ice Cubes","1-2 spoon sugar","Black salt"] },
  { id: 11, title: "Mushroom Bhaji", category:"Indian Curry", image: "https://flawlessfood.co.uk/wp-content/uploads/2022/07/Mushroom-Bhaji-Indian-Curry-Flawless-21-1024x1024.jpg",ingredients:["250g Mushrooms (Sliced)","1 Onion (Finely chopped)","1 Tomato (Chopped)","½ teaspoon Turmeric Powder","1 Green Chili (Chopped)","½ teaspoon Garam Masala","2 tablespoons Oil","Salt to Taste","Fresh Coriander Leaves (For garnish)"] },
  { id: 12, title: "Pasta Alfredo", category:"Italian", image: "https://ravs-kitchen.com/wp-content/uploads/2020/06/IMG_8858.jpg",ingredients:["250g Fettuccine Pasta (or any pasta of choice)","2 tablespoons Butter","2 Garlic Cloves (Minced)","½ teaspoon Salt ","½ teaspoon Black Pepper ","½ teaspoon Nutmeg ","½ cup Milk ",]},
  
];

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2 className="text-center text-red-500">Recipe Not Found</h2>;
  }

  return (
    <div className="text-center p-5">
      <h2 className="text-3xl font-bold">{recipe.title}</h2>
      
      {/* ✅ Updated image styling for better size control */}
      <img 
  src={recipe.image} 
  alt={recipe.title} 
  style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "10px" }}
  className="mx-auto my-5 shadow-lg"
/>

      <h3 className="text-xl font-semibold">Ingredients:</h3>
      <ul className="list-disc mx-auto w-1/3 text-left">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
