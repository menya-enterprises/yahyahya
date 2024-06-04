import React from 'react'

import "./Header.css"

import { useTranslation } from 'react-i18next';
import ramen from "../../assets/ramen_header.jpg";
import ramenSm from "../../assets/ramen_header-sm.jpeg";

function Header() {
  const [t] = useTranslation("global");
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1 className="headtext__tenor">{t("banner.title")}</h1>
        <p className="p__opensans" style={{ margin: "0 0 1rem 0", color: "var(--color-lightSilver)"}}>{t("banner.subtitle")}</p>
      </div>
        <picture className='app__wrapper_img'>
          <source srcSet={ramen} alt="ramen" media='(min-width: 600px)'/>
          <img src={ramenSm} alt="ramen" height='270' width='270' loading='lazy' decoding='async' />
        </picture>
    </div>
  )
}

export default Header