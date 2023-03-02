
import React from "react";

function RecipeView({recipeElement, deleteRecipe}) {
    return (
        
        
        <tr>
            <td>
            {recipeElement.name}
            </td>
            <td>
            {recipeElement.cuisine}
            </td>
            <td>
              
            <img src={recipeElement.photo} alt="url" width={"100%"} height={"100%"}/>
            </td>
            <td className="content_td">
              <p>
            {recipeElement.ingredients}
            </p>
            </td>
            <td className="content_td">
            <p>
            {recipeElement.preparation}
            </p>
            </td> 
            <td>
            <button name="delete" onClick={deleteRecipe}>
            Delete
            </button>
            </td>
        </tr>
        

        
    )

  }
  
  export default RecipeView;