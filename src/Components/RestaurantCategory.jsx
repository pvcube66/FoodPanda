import React, { useContext, useState } from 'react';
import MenuItems from './MenuItems';
import UserContext from '../../utils/UserContext';

const RestaurantCategory = ({ props }) => {
    // Filter the cards to get only the relevant ones
    const filteredCards = props?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => 
        card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    // check for useContext thing
    const {loggedInData}=useContext(UserContext);
    console.log(loggedInData);


    const [activeIndex, setActiveIndex] = useState(null);

    function handleItems(index) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div>
            {/* Restaurant Name and Rating */}
            <h2 id="res-name">{props.cards[2].card.card.info.name}</h2>
            <h2 id="res-rating">{props.cards[2].card.card.info.avgRating} stars</h2>

            {/* Menu Items */}
            {filteredCards.map((card, index) => (
                <div key={index}>
                    {card?.card?.card?.categories ? (
                        card.card.card.categories.map((category, idx) => (
                            <div id="menu-title" key={idx}>
                                <h3 onClick={() => handleItems(`${index}-${idx}`)}>
                                    {category.title ? `${category.title} (${category.itemCards.length})` : `${category.name} (${category.itemCards.length})`}
                                </h3>
                                {activeIndex === `${index}-${idx}` && <MenuItems props={category.itemCards} />}
                            </div>
                        ))
                    ) : (
                        // Handle regular categories
                        <div id="menu-title">
                            <h3 onClick={() => handleItems(index)}>
                                {card?.card?.card?.title ? `${card.card.card.title} (${card.card.card.itemCards.length})` : `${card?.card?.card?.name} (${card.card.card.itemCards.length})`}
                            </h3>
                            {activeIndex === index && <MenuItems props={card?.card?.card?.itemCards} />}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RestaurantCategory;
