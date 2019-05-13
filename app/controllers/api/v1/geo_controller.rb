class Api::V1::GeoController < ApplicationController
  def index
    if current_user
      #{request.remote_ip}
      require 'net/http'
      require 'uri'
      uri = URI.parse("http://api.ipstack.com/50.241.127.210?access_key=46db599d985d0436ad9ce504f3e6736b")
      response = Net::HTTP.get_response uri
      render json: response.body
    end
  end
end
