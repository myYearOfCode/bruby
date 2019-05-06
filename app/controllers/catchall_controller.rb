require 'net/http'
require 'uri'
require 'pry'

class CatchallController < ApplicationController
  def index
    in_uri = URI.parse(request.url)
    output = "#{request.url}#{in_uri.request_uri}"
    render plain: output
  end
end
