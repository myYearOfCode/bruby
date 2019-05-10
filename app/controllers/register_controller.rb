class RegisterController < ApplicationController
  def index
    in_uri = URI.parse(request.url)
    output = "#{request.url}#{in_uri.request_uri}"
    @address = "ross@myyearofcode.com"
    #do logic to look up user email from machine id 
    ReminderEmailMailer.reminder_email(@address).deliver_now
    render plain: "#T#"
  end
end
