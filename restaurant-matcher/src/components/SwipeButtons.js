import React from 'react';
import './SwipeButtons.css';

const SwipeButtons = ({ onLike, onDislike }) => {
  return (
    <div className="swipe-buttons">
      <button className="dislike-button" onClick={onDislike}>
        Dislike
      </button>
      <button className="like-button" onClick={onLike}>
        Like
      </button>
    </div>
  );
};

export default SwipeButtons;
