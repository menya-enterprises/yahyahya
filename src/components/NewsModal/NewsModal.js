import React from 'react';
import "./NewsModal.css"; // Add styles for the modal here
import { GiCrossedAirFlows } from 'react-icons/gi';

const NewsModal = ({ newsItem, onClose }) => {
  return (
    <div className="modal__container slide-bottom">
       <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={onClose}
              color='white'
              />
      <div className="modal__content">
        <h1 className='p__tenor'>{newsItem.title}</h1>
        <p className='p__opensans'>{newsItem.date}</p>
        <p className='p__opensans' style={{whiteSpace: "pre-line"}}>{newsItem.content}</p>
      </div>
    </div>
  );
};

export default NewsModal;
