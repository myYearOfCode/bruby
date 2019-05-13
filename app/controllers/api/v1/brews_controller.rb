class Api::V1::BrewsController < ApplicationController

  def show
    if current_user
        if current_user.brews.find(show_params[:id])
          brew =  Brew.find(show_params[:id])
          recipe = Recipe.find(brew[:recipe_id])
          render json: {brew: brew, recipe: recipe}
        else
          render json: {error: "your user is unable to access that record"}
        end
    else
      render json: {error: "you must be signed in to view a brew."}
    end
  rescue ActiveRecord::RecordNotFound
    render json: {
      recipes: nil,
      error: "no recipe found"
    }
  end

  private

  def show_params
    params.permit(:id)
  end
end
