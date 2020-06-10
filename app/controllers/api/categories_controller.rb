class Api::CategoriesController < ApplicationController

    def index
        @categories = Category.all
        render :index
    end

    def show
        @category = Category.find_by(name: params[:id])
        
        if @category
            render :show
        else
            render json: {:error => "Category Does Not Exist"}, status: 422
        end
    end

end
