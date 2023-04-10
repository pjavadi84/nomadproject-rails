import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import Image from '../components/Image';


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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
      {images.map((image) => (
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
                <li>Width: {selectedImage.width}</li>
                <li>height: {selectedImage.height}</li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
