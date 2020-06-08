    @categories.each do |category|
        json.set! category.id do
            json.id category.id
            json.name category.name
            json.description category.description
            json.imgUrl url_for(category.imgUrl)
        end
    end
