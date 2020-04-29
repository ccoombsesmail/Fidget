class StaticPagesController < ApplicationController
    def root
        @demoUser = User.find_by(username: 'PleaseHireMe')
    end
end
