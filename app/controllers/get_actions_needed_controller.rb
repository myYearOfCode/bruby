class GetActionsNeededController < ApplicationController
  def index
    puts 'GetActionsNeededController'
    @body = "##"
    render plain: @body.html_safe
    # render plain: @body
  end
end
