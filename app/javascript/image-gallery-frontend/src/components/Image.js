import React from 'react';

function Image({ width, src, alt, onClick }) {
  return (
    <div className="image">
        <div className="modal-overlay">
            <img src={src} alt={alt} onClick={onClick} width={width} />
            <p>{alt}</p>
        </div>
    </div>
  );
}

export default Image;