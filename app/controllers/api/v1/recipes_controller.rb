class Api::V1::RecipesController < ApplicationController
  def index
    if current_user
      render json: current_user.recipes
    else
      render json: {error: "you are not signed in"}
    end
  end
end
