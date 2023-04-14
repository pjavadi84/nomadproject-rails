class ImagesController < ApplicationController
    # validates :description, presence: true
    
    def index
        @images = Image.all # Fetch all images
        render json: @images
    end

    def show
        @image = Image.find(params[:id]) # Find the image by ID
        @gallery = @image.gallery # Fetch the associated gallery for the image
        render json: @image
    end

    def new
        @gallery = Gallery.find(params[:gallery_id]) # Find the parent gallery
        @image = @gallery.images.new # Build a new image associated with the gallery
    end

    private

    def image_params
        params.require(:image).permit(:author, :width, :height, :url, :download_url, :description).merge(gallery_id: params[:gallery_id])
    end
end
