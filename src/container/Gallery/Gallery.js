import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import gallery from '../../constants/gallery';

import "./Gallery.css"; // Assuming you'll create this CSS file for styling

function Gallery() {
  const [t] = useTranslation(["global", "dishes"]);
  return (
    <div className='app__gallery section__padding app__wrapper app__bg' id="gallery">
        <h1 className='headtext__tenor'>{t("navbar.gallery")}</h1>
        <Carousel 
            infiniteLoop={true} 
            dynamicHeight={false}
            emulateTouch={true} 
            showThumbs={false} 
            showStatus={true} 
            showIndicators={false}
            preventMovementUntilSwipeScrollTolerance={true}
            className='app__gallery-carousel'
        >
        {Object.entries(gallery).map(([key, picture]) => (
            <div className='gallery__item' key={key}>
                <div className="gallery__item-img">
                    <img src={picture.file} alt={picture.alt} loading='lazy' decoding='async'/>
                    <p className="p__opensans legend">{t(`dishes.${picture.alt}`, { ns: 'dishes'})}</p>
                </div>
            </div>
        ))}

        </Carousel>
    </div>
  )
}

export default Gallery;
