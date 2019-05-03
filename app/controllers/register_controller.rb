class RegisterController < ApplicationController
  def index
    in_uri = URI.parse(request.url)
    output = "#{request.url}#{in_uri.request_uri}"
    puts output
    render plain: "#T#"
  end
end
