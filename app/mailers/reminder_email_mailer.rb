class ReminderEmailMailer < ApplicationMailer
  def reminder_email(email)
    mail to:'ross@rossdaly.com', subject: "your beer is ready to rack!"
  end
  def bottle_email(email)
    mail to:'ross@rossdaly.com', subject: "your beer is ready to bottle!"
  end
end
