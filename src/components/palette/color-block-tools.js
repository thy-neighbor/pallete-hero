import React from 'react'
import './palette.css'
//<a href="https://icons8.com/icon/15454/lock-filled">Lock Filled icon by Icons8</a>

export default function ColorBlockTools(props){
/* 
    function clickEvent(){
        document.getElementById("demo").style.color = "red";
    }
*/

    return(
        <div class="color-block-tools" >
            <h4 class="fit">{props.colorCode}</h4>
            <img class="icon" id="lock" src="https://img.icons8.com/ios/26/000000/lock-2-filled.png" alt="digital lock"></img>
        </div>
    );
}