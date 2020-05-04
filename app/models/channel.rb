class Channel < ApplicationRecord
    validates :owner_id, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :vods,
        dependent: :destroy


    has_one_attached :logoUrl



end
