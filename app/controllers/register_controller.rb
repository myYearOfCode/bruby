class RegisterController < ApplicationController
  def index
    in_uri = URI.parse(request.url)
    output = "#{request.url}#{in_uri.request_uri}"
    @address = "ross@myyearofcode.com"
    #do logic to look up user email from machine id
    ReminderEmailMailer.bottle_email(@address).deliver_now
    ReminderEmailMailer.bottle_email(@address).deliver_later(wait: 20.minutes)
    render plain: "#T#"
  end
end
