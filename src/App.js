import './App.css';
import React from 'react';

import { AboutUs, FindUs, Header, Menu  } from './container';
import { NavBar } from './components';
import { useTranslation } from 'react-i18next';
import News from './container/News/News';
import Gallery from './container/Gallery/Gallery';
import video from "./assets/promo_video.mp4"
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [loading, setLoading] = React.useState(true);
  const [showLoader, setShowLoader] = React.useState(true);

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  React.useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        console.log('page is fully loaded');
        setTimeout(() => {
          setShowLoader(false);
        }, 1250);
      }, 250);
    }

  }, [loading]);
  return (
    <div>
      {showLoader && (
        <div className={`loading ${!loading ? 'fade-out' : ''}`}>
          <ClipLoader
            color="#CFB483"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="app__top">
        <NavBar handleChangeLanguage={handleChangeLanguage}/>
        <Header />
        <div className='app__top-video flex__center'>
          <video
          src={video}
          type="video/mp4"
          muted
          loop
          controls={false}
          autoPlay
          playsInline
          onLoadedData={() => setLoading(false)}
          />
          <div className='app__top-video_overlay flex__center'/>
        </div>
      </div>

      <AboutUs />
      <Menu />
      <News />
      <Gallery/>
      <FindUs />
    </div>
  );
}

export default App;
