import React from 'react';

const RecipeOverview = (props) => {
  return(
    <div className="recipeOverview">
      <button>edit</button>
      <button>brew next</button>
      <button value={props.recipe.id} onClick={props.deleteRecipe}>delete</button>
      {props.recipe.name}
    </div>
  )
}

export default RecipeOverview;
