class DashboardController < ApplicationController
  def index
    if current_user
      render :index
    else
      flash.now[:error] = "Please sign in to access that feature."
      redirect_to new_user_session_path 
    end
  end
end
