module GalleryModule
    def get_photos
        conn = Faraday.new(url: 'https://picsum.photos')
        response = conn.get '/v2/list', { limit: 30 }
        data = JSON.parse(response.body)
        render json: data
    end
    
end