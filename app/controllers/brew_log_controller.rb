class BrewLogController < ApplicationController
  def index
    newLog = BrewLog.new(brew_log_params)
    newLog[:brew_id] = current_user.brewNext
    newLog.save
    render plain: "##"
  end

  private
  def brew_log_params
    params.permit(:uid, :sesId, :wort, :therm, :step, :error, :sesType, :timeLeft, :shutScale)
  end
end
