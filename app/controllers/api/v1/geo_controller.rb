require 'net/http'
require 'uri'
class Api::V1::GeoController < ApplicationController
  def index
    #enable dummy lookup when on localhost
    if current_user
      if request.remote_ip == "::1"
        brewer_ip = "50.241.127.210"
      else
        brewer_ip = request.remote_ip
      end

      uri = URI.parse("http://api.ipstack.com/#{brewer_ip}?access_key=46db599d985d0436ad9ce504f3e6736b")
      response = Net::HTTP.get_response uri
      render json: response.body
    end
  end
end
