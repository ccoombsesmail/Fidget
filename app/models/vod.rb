class Vod < ApplicationRecord
    validates :channel_id, :title, :category, presence: true

    belongs_to :channel

    has_one_attached :videoUrl

    # filter --> {:filterType => value}
    def self.all_filter(filter)
    
        if !filter[:channel_id].nil?
            newFilter = {:channel_id => filter[:channel_id].to_i}
           return Vod.where("channel_id = :channel_id", newFilter)
        elsif !filter[:category].nil?
            newFilter = {:category => filter[:category]}
            return Vod.where("category = :category", newFilter)
        elsif !filter[:random].nil?
          count = Vod.count + 1
          ids = []
          vods = []
          while ids.length < 5
            randomId = rand(count)
            if randomId != 0 && !ids.include?(randomId)
              ids.push(randomId)
            end
          end
          ids.each do |id|
            vods.push(Vod.where("id = ?", "#{id}")[0])
          end
          return vods
        end

        return Vod.all
        
    end

end


