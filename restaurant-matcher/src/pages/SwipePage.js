import RestaurantCard from '../components/RestaurantCard';

const SwipePage = () => {
  const restaurants = [ /* Mock Data or Fetch from API */ ];

  return (
    <div>
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} name={r.name} image={r.image} description={r.description} />
      ))}
    </div>
  );
};

export default SwipePage;
