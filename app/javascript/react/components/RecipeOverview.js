import React from 'react';

const RecipeOverview = (props) => {
  let showImage = () => {
    if (props.recipe.profile_photo){
      return <div className="thumbnail">
        <img className="recipeThumbnail" src={props.recipe.profile_photo}/>
      </div>
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
        <div>
          {props.recipe.name} • {props.recipe.style || ""}
        </div>
      </div>
      <div className="recipeDescription">
        {showImage()}
        <div>
          Description:{props.recipe.description}
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
