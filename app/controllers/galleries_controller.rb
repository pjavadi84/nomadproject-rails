class GalleriesController < ApplicationController
    include GalleryModule

    def index
        get_photos
    end
end
