class Api::V1::RecipesController < ApplicationController
  def index
    if current_user
      render json: current_user.recipes
    else
      render json: {error: "you are not signed in"}
    end
  end

  def create
    if current_user
      newRecipe = Recipe.new(recipe_params)
      if newRecipe.save
        newBrew = Brew.new(recipe: newRecipe, user: current_user)
        if newBrew.save
          render json: { recipes: current_user.recipes }
        else
          errors = newBrew.errors.full_messages.join(', ❌').prepend('❌')
          render json: { error: errors }
        end
      else
        errors = newRecipe.errors.full_messages.join(', ❌').prepend('❌')
        render json: { error: errors }
      end
    else
      render json: {error: "you must be signed in to create a recipe."}
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :s1Temp, :s1Time, :s2Temp, :s2Time, :s3Temp, :s3Time, :s4Temp, :s4Time, :s5Temp, :s5Time, :s6Temp, :s6Time, :s7Temp, :s7Time, :s8Temp, :s8Time, :s9Temp, :s9Time, :s10Temp, :s10Time)
  end
end