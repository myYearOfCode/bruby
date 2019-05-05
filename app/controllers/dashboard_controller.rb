class DashboardController < ApplicationController
  def index
    if current_user
      render :index
    else
      render 'homes#index'
    end
  end
end
