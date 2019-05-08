class Api::V1::BrewLogsController < ApplicationController
  def show
    if current_user
      render json: current_user.brew_logs.where(sesId: params[:id])
    else
      render json: {error: "you are not signed in"}
    end
  end
end
