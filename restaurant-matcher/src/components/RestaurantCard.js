const RestaurantCard = ({ name, image, description }) => (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
  
  export default RestaurantCard;
  