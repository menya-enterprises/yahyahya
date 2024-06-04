import React from 'react'

import "./Menu.css"
import { useTranslation } from 'react-i18next';

import images from '../../constants/images';
import { Carousel } from 'react-responsive-carousel';

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { GiCrossedAirFlows } from 'react-icons/gi';

function Menu() {
  const [t] = useTranslation(["global"]);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (e) => {
    const imgSrc = e.target.lastChild.src
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
    
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <div className='app__menu section__padding app__wrapper app__bg' id="menu">
      <h1 className='headtext__tenor'>{t("navbar.menu")}</h1>
      <div className='app__menu-inventory'>
        <Carousel
            infiniteLoop={true} 
            dynamicHeight={true}
            emulateTouch={true} 
            showThumbs={false} 
            showStatus={true} 
            showIndicators={false}
            preventMovementUntilSwipeScrollTolerance={true}
            className='inventory-carousel'
        >
          <div className="inventory-item" onClick={(e) => handleImageClick(e)}>
            <img src={images.menu_front} alt="menu" loading='lazy' decoding='async'/>
          </div>
          <div className="inventory-item" onClick={(e) => handleImageClick(e)}>
            <img src={images.menu_back} alt="menu" loading='lazy' decoding='async'/>
          </div>
          <div className='inventory-item' onClick={(e) => handleImageClick(e)}>
        <img src={images.menu_summer} alt="menu" loading='lazy' decoding='async'/>
      </div>
      </Carousel>

    

      
      </div>
      {selectedImage && (
        <div className="modal slide-bottom">
            <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={() => closeModal()}
              />
            <TransformWrapper initialScale={1}>
          {({ ...rest }) => (
          <TransformComponent>
              <img src={selectedImage} alt="menu" />
              </TransformComponent>
            )}
          </TransformWrapper>
          <div className="modal-overlay" onClick={closeModal}/>
        </div>
    
      )}

    </div>
  )
}

export default Menu