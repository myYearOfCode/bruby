import React from 'react';

const RecipeOverview = (props) => {
  return(
    <div className="recipeOverview">
      <button>edit</button>
      <button>brew next</button>
      {props.recipe.name}
    </div>
  )
}

export default RecipeOverview;
