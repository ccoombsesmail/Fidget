class Category < ApplicationRecord
    validates :name, :description, presence: true
    validates :name, uniqueness: true
    
    has_one_attached :imgUrl
    

end
