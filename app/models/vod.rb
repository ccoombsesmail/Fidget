class Vod < ApplicationRecord
    validates :channel_id, :title, :category, uniqueness: true

    belongs_to :channel

    has_one_attached :videoUrl

end
