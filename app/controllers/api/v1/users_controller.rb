class Api::V1::UsersController < ApplicationController
  def index
    if current_user
      render json: current_user
    else
      render json: {error: "you are not signed in"}
    end
  end
end
