class BrewLogController < ApplicationController
  def index
    newLog = BrewLog.new(brew_log_params)
    user = User.where(machine: brew_log_params[:uid])
    newLog[:brew_id] = user.first.brewNext
    newLog.save
    render plain: "##"
  end

  private
  def brew_log_params
    params.permit(:uid, :sesId, :wort, :therm, :step, :error, :sesType, :timeLeft, :shutScale)
  end
end
