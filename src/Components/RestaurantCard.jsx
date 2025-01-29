import { jsx } from 'react/jsx-runtime';
import { img_cdn } from './config';


export const RestaurantCard = ({ props }) => {
    const { name, avgRating, cuisines, cloudinaryImageId } = props?.info;
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

//this is a higher order func, taking restaurantCard, and it will return a new component
//and enhance which means will add a new tag whether it is open or not.

  export const withOpenLabel=(RestaurantCard)=>{


    return(props)=>{

      //think this return as a component. what will a component return?
      //jsx bitch and below is the jsx its returning
      return(
        <div>
            <label id="open-tag" >Open</label>
            <RestaurantCard {...props}/>
        </div>
      )


    }
  }

export default RestaurantCard