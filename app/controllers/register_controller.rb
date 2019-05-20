class RegisterController < ApplicationController
  def index
    in_uri = URI.parse(request.url)
    output = "#{request.url}#{in_uri.request_uri}"
    @address = "ross@myyearofcode.com"
    #do logic to look up user email from machine id
    ReminderEmailMailer.reminder_email(@address).deliver_later(wait: 14.days)
    ReminderEmailMailer.bottle_email(@address).deliver_later(wait: 28.days)
    render plain: "#T#"
  end
end
