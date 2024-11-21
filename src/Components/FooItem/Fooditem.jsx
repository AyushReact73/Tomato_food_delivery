import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

export default function Fooditem({ id, name, price, description, image }) {
    const { cartItems, addItem, removeItem } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="food-item-img">
                <img src={image} alt="image" />
                {
                    !cartItems[id] ? <img className='add' onClick={() => addItem(id)} src={assets.add_icon_white} alt='' />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeItem(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addItem(id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className='food-itme-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}
