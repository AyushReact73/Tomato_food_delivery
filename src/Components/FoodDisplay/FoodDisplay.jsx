import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../FooItem/Fooditem'

export default function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near you</h2>
            <div className="food-display-list">
                {food_list.map((item, i) => {
                    if (category === 'All' || category === item.category) {
                        return <Fooditem
                            key={i}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                        />
                    }
                })
                }
            </div>
        </div>
    )
}
