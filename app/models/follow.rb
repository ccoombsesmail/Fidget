class Follow < ApplicationRecord
    validates :channel_id, :user_id, presence: true 

    belongs_to :user

    belongs_to :channel

 

end
