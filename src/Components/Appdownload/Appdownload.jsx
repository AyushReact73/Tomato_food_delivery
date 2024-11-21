import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

export default function Appdownload() {
    return (
        <div className='appdownload' id='appdownload'>
            <p>For Better Experinced Download <br /> Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}
