module ApplicationCable
  class Connection < ActionCable::Connection::Base
      # identified_by :current_user

      # def connect
      #   self.current_user = get_current_user
      # end

      # private
      # def get_current_user
      #   user = User.find_by(session_token: cookies.signed[:session_token])
      #   reject_unauthorized_connection if user.nil?
      #   user
      # end
  end
end
