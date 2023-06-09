import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import Image from '../components/Image';


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter images based on search query
  const filteredImages = images.filter(image => image.author.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list?limit=30');
      setImages(response.data);
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    // Handle click on image
    setSelectedImage(image);
    console.log("image being clicked!!")
  };

  return (
    <div className='gallery-images'>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by author..."
        />
      </div>

      {filteredImages.map((image) => (
        <Image 
          width={300} 
          key={image.id} 
          src={image.download_url} 
          alt={image.author} 
          onClick={() => handleImageClick(image)} />
      ))}

        {selectedImage && (
        <div className="modal">
          <img src={selectedImage.download_url} alt={selectedImage.author} onClick={() => setSelectedImage(null)} />
          <div className='image-properties-details'>
            <p>Name: {selectedImage.author}</p>
            <ul>
                <p> W: {selectedImage.width} x H:{selectedImage.height} </p>
               
                <p>{selectedImage.url}</p>
        
                <p>Download: {selectedImage.download_url}</p>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
