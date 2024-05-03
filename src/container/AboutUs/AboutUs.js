import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./AboutUs.css"
import video from "../../assets/about-us.mp4";
import { useTranslation } from 'react-i18next'

function AboutUs() {
  const [t] = useTranslation("global");
  const videoRef = React.useRef();

  return (
    <div className='app__aboutUs section__padding app__wrapper app__bg' id="about">
      <div className='app__aboutUs-video flex__center'>
        <video
        src={video}
        ref={videoRef}
        type="video/mp4"
        muted
        loop
        controls={false}
        autoPlay
        playsInline
        />
        <div className='app__aboutUs-video_overlay flex__center'/>
      </div>
      <Carousel className="app__aboutUs-carousel" infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true} dynamicHeight={false} emulateTouch={true} showThumbs={false} showStatus={false} autoPlay={true} stopOnHover={true} interval={15000}>
        <div className="app__aboutUs-content">
          <h1 className='headtext__tenor'>{t("about.title.1")}</h1>
          <p className='p__tenor' style={{whiteSpace: "pre-line", paddingBottom: "2rem"}}>{t("about.message.1")}<br/>{t("about.message.2")}</p>
        </div>
        <div className="app__aboutUs-content">
          <h1 className='headtext__tenor'>{t("about.title.2")}</h1>
          <p className='p__tenor' style={{whiteSpace: "pre-line"}}>{t("about.message.4")}</p>
        </div>
        <div className="app__aboutUs-content">
          <h1 className='headtext__tenor'>{t("about.title.3")}</h1>
          <p className='p__tenor' style={{whiteSpace: "pre-line"}}>{t("about.message.3")}</p>
        </div>

      </Carousel>
    </div>
  )
}

export default AboutUs