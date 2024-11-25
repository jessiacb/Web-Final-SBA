import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeRestaurant, dislikeRestaurant } from '../redux/slices/userSlice';
import { getRestaurants } from '../services/yelpService';
import RestaurantCard from '../components/RestaurantCard';
import SwipeButtons from '../components/SwipeButtons';
import './SwipePage.css'; 

const SwipePage = () => {
  const dispatch = useDispatch();
  const likedRestaurants = useSelector((state) => state.user.swipes.liked);
  const [restaurants, setRestaurants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //fetch restaurants from API when? component loads
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants('New York'); //replace w/ user location if available
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };
    fetchRestaurants();
  }, []);

  //swipe actions
  const handleLike = () => {
    if (currentIndex < restaurants.length) {
      dispatch(likeRestaurant(restaurants[currentIndex]));
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDislike = () => {
    if (currentIndex < restaurants.length) {
      dispatch(dislikeRestaurant(restaurants[currentIndex]));
      setCurrentIndex((prev) => prev + 1);
    }
  };

  //check if any restaurants are left to swipe
  if (currentIndex >= restaurants.length) {
    return <div className="no-more-restaurants">No more restaurants to swipe!</div>;
  }

  const currentRestaurant = restaurants[currentIndex];

  return (
    <div className="swipe-page">
      <h1>Swipe on Restaurants</h1>
      <div className="restaurant-card-container">
        {currentRestaurant && (
          <RestaurantCard
            key={currentRestaurant.id}
            name={currentRestaurant.name}
            image={currentRestaurant.image_url}
            description={currentRestaurant.categories?.[0]?.title}
          />
        )}
      </div>
      <SwipeButtons onLike={handleLike} onDislike={handleDislike} />

      {/* Liked Restaurants Section */}
      <div className="liked-restaurants">
        <h2>Liked Restaurants</h2>
        {likedRestaurants.length > 0 ? (
          <ul>
            {likedRestaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description || restaurant.categories?.[0]?.title}</p>
                <img
                  src={restaurant.image_url}
                  alt={restaurant.name}
                  style={{ width: '100px', borderRadius: '5px' }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No liked restaurants yet. Start swiping!</p>
        )}
      </div>
    </div>
  );
};

export default SwipePage;
