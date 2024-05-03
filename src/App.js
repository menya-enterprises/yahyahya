import './App.css';

import { AboutUs, FindUs, Header, Menu  } from './container';
import { NavBar } from './components';
import { useTranslation } from 'react-i18next';
import News from './container/News/News';
import Gallery from './container/Gallery/Gallery';
import video from "./assets/promo_video.mp4"

function App() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
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
