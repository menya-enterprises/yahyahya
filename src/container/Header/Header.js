import React from 'react'

import "./Header.css"

import images from '../../constants/images';
import { useTranslation } from 'react-i18next';

function Header() {
  const [t] = useTranslation("global");
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1 className="headtext__tenor" style={{fontFamily: "serif", lineHeight: "117px"}}>{t("banner.title")}</h1>
        <p className="p__opensans" style={{ margin: "0 0 1rem 0", color: "var(--color-lightSilver)"}}>{t("banner.subtitle")}</p>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.header01} alt="ramen header" />
      </div>
    </div>
  )
}

export default Header