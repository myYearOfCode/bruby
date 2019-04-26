class PicoChangeStateController < ApplicationController
  def index
    puts "PicoChangeStateController"
    @body = "##"
    render plain: @body
    # render text: "##"
  end
end
