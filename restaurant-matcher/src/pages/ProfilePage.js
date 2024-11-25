import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetSwipes } from '../redux/slices/userSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();

  //reach swipe history from redux
  const likedRestaurants = useSelector((state) => state.user.swipes.liked);
  const dislikedRestaurants = useSelector((state) => state.user.swipes.disliked);

  //reset
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your swiping history?')) {
      dispatch(resetSwipes());
    }
  };

  return (
    <div>
      <h1>Your Profile</h1>
      <h2>Liked Restaurants</h2>
      {likedRestaurants.length > 0 ? (
        <ul>
          {likedRestaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                style={{ width: '200px', borderRadius: '10px' }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven’t liked any restaurants yet.</p>
      )}

      <h2>Disliked Restaurants</h2>
      {dislikedRestaurants.length > 0 ? (
        <ul>
          {dislikedRestaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                style={{ width: '200px', borderRadius: '10px' }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven’t disliked any restaurants yet.</p>
      )}

      <button onClick={handleReset}>Reset Swiping History</button>
    </div>
  );
};

export default ProfilePage;
