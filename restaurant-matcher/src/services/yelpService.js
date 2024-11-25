import axios from 'axios';

//use API key from environment variable
const API_KEY = process.env.REACT_APP_YELP_API_KEY;
const BASE_URL = 'https://api.yelp.com/v3/businesses';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

//function to fetch restaurants
export const getRestaurants = async (location) => {
  try {
    const response = await api.get('/search', {
      params: {
        location, // ex. "New York"
        categories: 'restaurants',
        limit: 20, //limit number of results
      },
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Error fetching data from Yelp API:', error);
    throw error;
  }
};
