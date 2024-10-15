import { img_cdn } from './config';


export const RestaurantCard = ({ props }) => {
    const { name, avgRating, cuisines, cloudinaryImageId } = props.info;
    // console.log(name, avgRating, cuisines, cloudinaryImageId);
  
    return (
      <div className='card'>
        <img id="item-images" src={img_cdn+cloudinaryImageId} alt="restimg" />
        <h3>{name}</h3>
        <h3>{avgRating + " Stars"}</h3>
        <h3>
          {cuisines.length > 3
            ? cuisines.slice(0, 3).join(', ') + '...'
            : cuisines.join(', ')}
        </h3>
      </div>
    );
  }

export default RestaurantCard