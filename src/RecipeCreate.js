import React, { useState } from "react";


function RecipeCreate({createRecipe}) {



  /*
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  */

  /* initialize form object */
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState({...initialFormState});  /* initialize recipe object and store in setFormData*/
  const handleChange = ({target}) => setFormData({...formData, [target.name]: target.value}); /* add new value entered in form to exisiting blank object */
  

  /* handle submit event */
  const handleSubmit = (event) => {
    event.preventDefault(); /* to prevent page from loading */
    console.log("Submitted", formData.name, formData.cuisine, formData.ingredients, formData.preparation);
    createRecipe(formData);
    setFormData(initialFormState);
    event.target.reset();
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="title">
            <td>
            <label htmlFor="name">
              
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            </label>
          </td>
            <td >
              <label htmlFor="cuisine">
              
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
              value={formData.cuisine}
              
              />
              </label>
            </td>
            
            <td>
              <label htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                alt="URL"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
              </label>
            </td>
            <td>
            <label htmlFor="ingredients">
            
            <textarea 
              id="ingredients" 
              type="text"
              name="ingredients"
              placeholder="Ingredients" 
              onChange={handleChange}
              value={formData.ingredients} 
              
              />
            </label>
            </td>
            <td>
            <label htmlFor="preparation">
            
            <textarea 
              id="preparation" 
              type="text"
              name="preparation"
              placeholder="Preparation"
              onChange={handleChange}
              value={formData.preparation} 
              />
            </label>
            </td>
            <td>
            <label htmlFor="actions">
              <button type="submit">Create</button>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
