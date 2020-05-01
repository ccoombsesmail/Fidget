class StaticPagesController < ApplicationController
    def root
        @demoUser = User.find_by(username: 'FidgetDemoUser')
    end
end
