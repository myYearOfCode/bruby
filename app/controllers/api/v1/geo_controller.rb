class Api::V1::GeoController < ApplicationController
  def index
    render json: request.remote_ip
  end
end
