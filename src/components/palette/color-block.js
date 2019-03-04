import React from 'react'
import './palette.css'

export default function ColorBlock(props){
    let s=parseInt(props.size);
    let w=s+(s*0.33);
    console.log(s+(s*0.15));
    let styles = {
        width: `${w}px`,
        height: `${props.size}px`,
        
        //width: (props.size + (props.size*0.4)),
        //height: props.size,
        backgroundColor: `rgb(${props.color[0]},${props.color[1]},${props.color[2]})`,
        };
    
    return(
        <div class="fit color-block" style={styles} onClick={props.onClick}></div>
    );
}

