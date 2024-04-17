import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import images from '../../constants/images'

import "./Gallery.css"; // Assuming you'll create this CSS file for styling

function Gallery() {
  return (
    <div className='app__gallery section__padding app__wrapper app__bg' id="gallery">
        <h1 className='headtext__tenor'>Gallery</h1>
        <Carousel 
            infiniteLoop={true} 
            dynamicHeight={false}
            emulateTouch={true} 
            showThumbs={false} 
            showStatus={false} 
            autoPlay={true} 
            interval={1235000}
            className='app__gallery-carousel'
        >
            <div className='gallery__item'>
                <div className="gallery__item-img">
                    <img src={images.img1867115} alt="Image 1" />
                    <p className="legend">Drink</p>
                </div>
            </div>
            <div className='gallery__item'>
                <div className="gallery__item-img">
                    <img src={images.img1867118} alt="Image 2" />
                    <p className="legend">Ramen Name</p>
                </div>
            </div>
            <div className='gallery__item'>
                <div className="gallery__item-img">
                    <img src={images.img1867120} alt="Image 3" />
                    <p className="legend">Ramen Name</p>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Gallery;
