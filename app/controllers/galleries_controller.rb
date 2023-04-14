class GalleriesController < ApplicationController
    include GalleryModule

    def index
       @galleries = Gallery.all
       render json: @galleries
    end

    def show
        @gallery = Gallery.find(:id)
        render json: @gallery
    end

    def new
        @gallery = Gallery.new
    end

    def create
        @gallery.save!
        
        if @gallery
            render json: @gallery
        else
            render json: error
        end
    end

    def update
    end

    def destroy
    end

    private

    def gallery_params
        params.require(:gallery).permit(:name, :description)
    end
end
