class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token
  # {
  #   "auth": {
  #     "email": "me@me.com",
  #     "password": "me"
  #   }
  # }
end
