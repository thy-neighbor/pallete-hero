import React from 'react';
import './nav-bar.css'

export default function NavBar(props){

    return(
        <div class="nav">
            <div class="nav-header">
                <div class="nav-title">
                    Palette Hero
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <input type="checkbox" id="nav-check"/>
            <div class="nav-links">
                <a href="/home" > Home </a>
                <a href="/my-palettes" > My Palettes </a>
                <a href="/login" > Login </a>
                <a href="/signup" > Signup </a>
            </div>
        </div> 
    );
} 