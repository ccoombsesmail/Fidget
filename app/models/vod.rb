class Vod < ApplicationRecord
    validates :channel_id, :title, :category, presence: true

    belongs_to :channel

    has_one_attached :videoUrl

end
