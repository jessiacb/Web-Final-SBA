import React from 'react';

const RestaurantCard = ({ name, image, description }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default RestaurantCard;
