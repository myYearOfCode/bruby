class DashboardController < ApplicationController
  def index
    if current_user
      render :index
    else
      redirect_to "/"
    end
  end
end
