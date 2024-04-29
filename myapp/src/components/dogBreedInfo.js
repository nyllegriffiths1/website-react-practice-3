import React, { useState } from 'react';
import '../styles/dogBreedInfo.css';

function DogBreedInfo() {
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const fetchDogInfo = async () => {
        try {
            const response = await fetch(`/api/dogs?breed=${breed}`);
            const data = await response.json();

            // check if response contains data
            if(data.length > 0) {
                setImageUrl(data[0].image.url);
                setName(data[0].name);
                setDescription(data[0].temperament);
                setErrorMessage('');
            } else {
                setImageUrl('');
                setName('');
                setDescription('');
                setErrorMessage('Breed not found');
            }

        } catch (error) {
            console.error('Error fetching dog info:', error);
            setErrorMessage('Error fetching breed information');
        }
    };

    return (
        <div className='dog-container'>
            <input 
                type='text'
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder='Enter Breed'
            />
            <button onClick={fetchDogInfo}>Get Breed Info</button>

            {errorMessage && <p>{errorMessage}</p>}

            {imageUrl && (
            <div className='dog-breed-info'>
                <img src={imageUrl} alt={name} style={{ maxWidth: '300px' }} />
                <h2>{name}</h2>
                <p>{description}</p>
        </div>
        )}
        </div>
    );
}

export default DogBreedInfo;
