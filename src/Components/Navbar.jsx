import React, { useContext, useState } from 'react'
import './Navbar.css'
import tomato from '../assets/logo.png'
import search from '../assets/search_icon.png'
import basket from '../assets/basket_icon.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext'

export default function Navbar({ setShowLogin }) {
    const { getTotalCartamount } = useContext(StoreContext)
    const [menu, setMenu] = useState('Home'); // its checks when home menu its select default...
    return (
        <header className='navbar'>
            <Link to='/'><img src={tomato} alt="logo" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
                <a href='#exploreMenu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
                <a href='#appdownload' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu('Contact us')} className={menu === 'Contact us' ? 'active' : ''}>Contact us</a>
            </ul>
            <div className='navbar-right'>
                <img src={search} alt="search_icon" />
                <div className='navbar-basket_icon'>
                    <Link to='./cart'><img src={basket} alt="" /></Link>

                    <div className={getTotalCartamount() === 0 ? '' : 'dot'}>
                    </div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>

        </header>
    )
}
