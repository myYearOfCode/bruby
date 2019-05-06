import React from 'react';

const RecipeOverview = (props) => {
  return(
    <div className="recipeOverview">
      <div className="recipeOverviewName">
        {props.recipe.name}
      </div>
      <div className='recipeButtons'>
        <button className='recipeButton'>edit</button>
        <button
          className='recipeButton'
          value={props.recipe.id}
          onClick={props.brewNextOnChangeHandler}
        >
          brew next
        </button>
        <button
          className='recipeButton'
          value={props.recipe.id}
          onClick={props.deleteRecipe}
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default RecipeOverview;
