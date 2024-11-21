import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


export default function ExploreMenu({ category, setCategory }) {
    return (
        <div className='exploreMenu' id='exploreMenu'>
            <h1>Explore our Menu</h1>
            <p className='exploremenutxt'>Choose from a diverse menu featuring a delectable array
                of dishes crafted with the finest ingredients and culinary expertise.
                Our mission is to satisfy your cravings and elevate your dining experience,
                one delicious meal at a time.
            </p>
            <div className='explore-menu-list'>
                {
                    menu_list.map((list, i) => {
                        return (
                            <div key={i} className='explore-menu-list-item' onClick={() => setCategory(prev => prev === list.menu_name ? "All" : list.menu_name)}>
                                <img src={list.menu_image} alt="menu-image" className={category === list.menu_name ? 'active' : ""} />
                                <p>{list.menu_name}</p>
                            </div>
                        )
                    })}
            </div>
            <hr />
        </div>
    )
}
