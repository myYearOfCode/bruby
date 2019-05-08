import React from 'react';

const RecipeOverview = (props) => {
  return(
    <div className={`recipeOverview ${props.recipeExpanded == props.recipe.id ? "selectedRecipe is-active" : ""}`}>
      <div
        className="recipeOverviewName"
        onClick={() => props.viewRecipeHandler(props.recipe.id)}
        value={props.recipe.id}
        name={props.recipe.id}
      >
        {props.recipe.name}
        {props.recipe.style}
      </div>
      <div className='recipeRightRide'>
        <div className='recipeButtons'>
          <button
            className='recipeButton'
            value={props.recipe.id}
            onClick={props.loadRecipeHandler}
          >
            edit
          </button>
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
    </div>
  )
}

export default RecipeOverview;
