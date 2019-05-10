class ReminderEmailMailer < ApplicationMailer
  def reminder_email(email)
    mail to:'ross@rossdaly.com', subject: "this is going to work"
  end
end
