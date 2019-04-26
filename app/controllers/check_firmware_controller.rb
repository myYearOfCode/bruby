class CheckFirmwareController < ApplicationController
  def index
    puts "CheckFirmwareController"
    @body = "#F#"
    render plain: @body.html_safe
    # render text: "#F#"
  end
end
