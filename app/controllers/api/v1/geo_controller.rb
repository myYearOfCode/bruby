class Api::V1::GeoController < ApplicationController
  def index
    if current_user
      if !current_user[:ip]
        current_user.assign(ip: request.remote_ip)
        puts current_user
        render json: current_user
      end
    end
  end
end
