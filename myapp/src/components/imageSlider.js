import React from 'react';
import imagesData from '../images.json';

const ImageSlider = () => {
    return (
        <div className='image-slider'>
            {imagesData.map(image => (
                <img key={image.id} src={require(`../images/${image.filename}`).default} alt={image.alt} />
            ))}
        </div>
    );
};

export default ImageSlider;
