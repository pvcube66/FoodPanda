import { img_cdn } from './config';
const MenuItems = ({ props }) => {

    console.log("Items in MenuItems:", props); // Debugging: Check what's being passed to the component

    if (!props || props.length === 0) {
        return <div>No items found.</div>;
    }

    return (
        <div>
            {props.map((item) => (
               <div  id="name-flex" key={item?.card?.info?.id}>
                 <div id="each-item" key={item?.card?.info?.id}>
                    <div><h2>{item?.card?.info?.name}</h2></div>
                    <div><h3>₹{item?.card?.info?.price / 100}</h3></div>
                    <div><h4>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}   ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</h4></div>
                    <div><p>{item?.card?.info?.description}</p></div>
                </div>
                <div>
                    <img id="item-image" src={img_cdn+item?.card?.info?.imageId} alt="" />
                    <button id="add-button">Add</button>
                </div>
               </div>
                
            ))}
        </div>
    );
};

export default MenuItems;