class Api::V1::SessionsController < ApplicationController
  def index
    if current_user
      brew_logs = current_user.brew_logs
      # find unique session ids
      session_ids = brew_logs.pluck(:sesId).uniq
      response={}
      # restructure the data so the session id key holds all of the logs
      if session_ids
        session_ids.each do |session|
            response[session] = BrewLog.where(sesId: session)
        end
      end
      render json: response
    else
      binding.pry
      render json: {error: "you are not signed in"}
    end
  end

  def show
    if current_user
      brew_logs = current_user.brew_logs
      # find unique session ids
      session_ids = brew_logs.pluck(:sesId).uniq
      response={}
      # restructure the data so the session id key holds all of the logs
      if session_ids.include? show_params[:id]
        response[show_params[:id]] = BrewLog.where(sesId: show_params[:id])
        render json: response
      else
        render json: {error: "your user is unable to access that record"}
      end
    else
      render json: {error: "you are not signed in"}
    end
  end

  private
  def show_params
    params.permit(:id)
  end
end
