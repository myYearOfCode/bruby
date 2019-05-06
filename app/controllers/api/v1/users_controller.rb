class Api::V1::UsersController < ApplicationController
  def index
    if current_user
      render json: current_user
    else
      render json: {error: "you are not signed in"}
    end
  end

  def update
    if current_user
      current_user["brewNext"] = update_params["brewNext"]
      current_user.save
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
