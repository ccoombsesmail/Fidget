class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?, :demo_user


    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def demo_user
        @demo_user = User.find_by(username: 'FidgetDemoUser')
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        # token =  user.reset_session_token!
        # cookies.signed[:session_token] = token 
        # session[:session_token] = cookies.signed[:session_token]

        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end


    def require_logged_in
        render json: ['Must Log In'] unless logged_in?
    end

end
