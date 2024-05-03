import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./News.css";
import { useTranslation } from 'react-i18next';
// import news from "../../constants/news.json";
import NewsModal from "../../components/NewsModal/NewsModal";

function News() {
  const [t] = useTranslation(["global", "news"]);
  const [extended, setExtended] = React.useState(false);
  const [selectedNews, setSelectedNews] = React.useState(null);

  const scrollToNews = () => {
    const newsSection = document.getElementById("news");
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const news = (t("news", { ns: 'news', returnObjects: true }));

  const handleSeeFull = (newsItem) => {
    setSelectedNews(newsItem);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = '';
  };

  return (
    <div className='app__news section__padding app__wrapper app__bg' id="news">
      <h1 className='headtext__tenor'>{t("navbar.news")}</h1>
      {/* <div className='app__news-video'>
        <video
          src={newsVideo}
          type="video/mp4"
          muted
          loop
          controls={false}
          autoPlay
          playsInline
        />
        <div className='app__aboutUs-video_overlay flex__center'></div>
      </div> */}
      
      <div className="app__news-content section__padding">
        {extended ? (
          <div className='news__content-holder'>
            {news.map((element) => (
              <div className='news__content-item' key={element.id}>
                <h1 className='p__tenor'>{element.title}</h1>
                <p className='p__opensans'>{element.date}</p>
                <p className='p__opensans'>{element.content}</p>
                <button className='news__content-link p__opensans' onClick={() => handleSeeFull(element)}>See Full</button>
              </div>
            ))}
            <button className='news__content-link p__opensans' style={{paddingRight:"1rem", bottom: 0, paddingBottom: "2rem"}} onClick={() => {setExtended(false); scrollToNews()}}>Hide all</button>
          </div>
        ) : (
          <div className='news__content-holder'>
            {news.slice(-3).map((element) => (
              <div className='news__content-item' key={element.id}>
                <h1 className='p__tenor'>{element.title}</h1>
                <p className='p__opensans'>{element.date}</p>
                <p className='p__opensans'>{element.content}</p>
                <button className='news__content-link p__opensans' onClick={() => handleSeeFull(element)}>See Full</button>
              </div>
            ))}
            <button className='news__content-link p__opensans' style={{paddingRight:"1rem", bottom: 0, paddingBottom: "2rem"}} onClick={() => {setExtended(true); scrollToNews()}}>See all</button>
          </div>
        )}
        {selectedNews && (
          <NewsModal newsItem={selectedNews} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default News;