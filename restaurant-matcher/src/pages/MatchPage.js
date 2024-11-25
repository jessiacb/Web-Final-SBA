import React from 'react';
import { useSelector } from 'react-redux';

const MatchPage = () => {
  //reach matched restaurants f/ redux state
  const matches = useSelector((state) => state.user.swipes.liked);

  return (
    <div>
      <h1>Your Matches</h1>
      {matches.length > 0 ? (
        <ul>
          {matches.map((restaurant) => (
            <li key={restaurant.id}>
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description || restaurant.categories?.[0]?.title}</p>
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                style={{ width: '200px', borderRadius: '10px' }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No matches yet. Start swiping to find a match!</p>
      )}
    </div>
  );
};

export default MatchPage;
