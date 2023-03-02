import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  /* initialize recipe array */
  const [recipes, setRecipes] = useState(RecipeData);
  /* add new recipe to existing blank array */
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipe) => [...currentRecipe, newRecipe])
  };
console.log(recipes);
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  
  const deleteRecipe = (indexToDelete) =>
  setRecipes((currentRecipe) =>
  currentRecipe.filter((post, index) => index !== indexToDelete)
  );

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
