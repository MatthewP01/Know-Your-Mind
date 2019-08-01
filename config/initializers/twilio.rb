Twilio.configure do |config|
  config.account_sid = Rails.application.credentials[:twilio_account_sid]
  config.auth_token = Rails.application.credentials[:twilio_auth_token]
end

# client = Twilio::REST::Client.new
#   client.messages.create({
#     from: 'Rails.application.credentials.twilio_phone_number,
#     to: '+12036064428',
#     body: 'Hello there! This is a test'
#   })
