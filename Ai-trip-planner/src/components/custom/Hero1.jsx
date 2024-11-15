import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Hero1 = () => {
    const [items, setItems] = useState([
        {
            name: 'Switzerland',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!',
            backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
        },
        {
            name: 'Finland',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!',
            backgroundImage: 'https://i.ibb.co/jrRb11q/img2.jpg',
        },
        {
            name: 'Iceland',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!',
            backgroundImage: 'https://i.ibb.co/NSwVv8D/img3.jpg',
        },
        {
            name: 'Australia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!',
            backgroundImage: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
        },
        {
            name: 'Netherlands',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!',
            backgroundImage: 'https://i.ibb.co/jTQfmTq/img5.jpg',
        },
        {
            name: 'Ireland',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!',
            backgroundImage: 'https://i.ibb.co/RNkk6L0/img6.jpg',
        },
    ]);

    const nextSlide = () => {
        setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    };

    const prevSlide = () => {
        setItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, prevItems.length - 1)]);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 overflow-hidden">
            <div className="relative w-full max-w-screen-lg">
                <div className="relative flex overflow-hidden w-full">
                    {items.map((item, index) => (
                        <div key={index}
                        className={`absolute w-full h-96 md:h-[500px] transition-transform duration-500 ease-in-out transform ${
                          index === 0 ? 'translate-x-0' : 'translate-x-full'
                        }`}
                        
                        style={{
                            backgroundImage: `url(${item.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                        
                        </div>
                    ))}
                </div>

                <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-4">
                    <button
                        className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        onClick={()=>prevSlide}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        onClick={nextSlide}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
