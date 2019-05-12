class Api::V1::UsersController < ApplicationController
  def index
    if current_user
      puts json: current_user
      render json: current_user
    else
      render json: {error: "you are not signed in"}
    end
  end

  def update
    if current_user
      if update_params["brewNext"]
        current_user["brewNext"] = update_params["brewNext"]
        recipeName = Recipe.find(update_params["brewNext"]).name
        current_user["brewNextName"] = recipeName
        current_user.save
      end
      render json: current_user
    else
      render json: {error: "you are not signed in"}
    end
  end

  private
  def update_params
    params.require(:user).permit(:brewNext, :id)
  end
end
