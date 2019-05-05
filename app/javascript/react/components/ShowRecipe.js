import React from 'react';

const ShowRecipe = (props) => {

  let recipeStepNames = ["Preparing to Brew","Heating","Dough In","Mash 1","Mash 2","Mash Out","Hops 1","Hops 2","Hops 3","Hops 4"]
  return(
    <h3> {props.recipe.name} </h3>
  )
}
export default ShowRecipe;
