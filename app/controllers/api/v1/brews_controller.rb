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

  def update
    if current_user
      brew = Brew.find(params[:id])
      if brew.update(
        description: update_params[:description],
        rating: update_params[:rating]
        )
        render json: brew
      else
        errors = brew.errors.full_messages.join(', ❌').prepend('❌')
        render json: { error: errors }
      end
    else
      render json: {error: "you must be signed in to edit a brew."}
    end
  end

  private

  def update_params
    params.require(:brew).permit(:description, :rating)
  end

  def show_params
    params.permit(:id)
  end
end
