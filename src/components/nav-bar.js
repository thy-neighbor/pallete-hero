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
                <a href="//github.io/jo_geek" >Home</a>
                <a href="http://stackoverflow.com/users/4084003/" >My Palette</a>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" >LinkedIn</a>
                <a href="https://codepen.io/jo_Geek/" >Codepen</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" >JsFiddle</a>
            </div>
        </div> 
    );
} 