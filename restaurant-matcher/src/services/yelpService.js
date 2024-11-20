import axios from 'axios';

const API_KEY = 'YOUR_YELP_API_KEY9Kxj-8zSGIaYV1TR6yQnJ0VG2QIE89m-w5xMKnSnLuBYZTOC6_G-j28QBPGJsH-hl9kToNenU8qi8JTEnfZCq8yYLgimQzGmC__rNkyV_9u1r86w-Reodye0BE8-Z3Yx';
const BASE_URL = 'https://api.yelp.com/v3/businesses';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getRestaurants = async (location) => {
  const response = await api.get('/search', {
    params: { location, categories: 'restaurants' },
  });
  return response.data.businesses;
};
