class RegisterController < ApplicationController
  def index
    puts "RegisterController"
    @body = "#T#"
    render plain: @body.html_safe
    # render text: "#T#"
  end
end
