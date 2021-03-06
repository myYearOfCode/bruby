import React from 'react';

const RecipeOverview = (props) => {

  let isBrewNext = () => {
    // debugger
    if (props.brewNext == props.recipe.id){
      return <span className="brewingNextLabel"> Brewing Next</span>
    }
  }

  return(
    <div className={`recipeOverview ${props.recipeExpanded == props.recipe.id ? "selectedRecipe is-active" : ""}`}>
      <div
        className="recipeOverviewName"
        onClick={() => props.viewRecipeHandler(props.recipe.id)}
        value={props.recipe.id}
        name={props.recipe.id}
      >
        <div className="recipeTitle">
          {props.recipe.name} • {props.recipe.style || ""} {isBrewNext()}
        </div>
      </div>
      <div className="recipeDescription">
        <div>
          <span className="recipeCategory">Description:</span>
          <span>{` ${props.recipe.description}`}</span>
        </div>
        <div>
            <span className="recipeCategory">Yeast: </span>
            <span>{`${props.recipe.yeast}`}</span>
        </div>
      </div>
      <div className='recipeRightRide'>
        <div className='recipeButtons'>
          <button
            className='recipeButton'
            value={props.recipe.id}
            onClick={props.loadRecipeHandler}
          >
            Edit
          </button>
          <button
            className='recipeButton'
            value={props.recipe.id}
            onClick={props.brewNextOnChangeHandler}
          >
            Brew Next
          </button>
          <button
            className='recipeButton'
            value={props.recipe.id}
            onClick={props.deleteRecipe}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeOverview;
