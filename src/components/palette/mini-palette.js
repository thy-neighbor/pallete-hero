//highest level with 5 color bricks
import React from 'react'
import ColorBlock from './color-block';
//import { SketchPicker } from 'react-color'
import './palette.css'

import { connect } from 'react-redux';


export default class MiniPalette extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            rgbArray:props.rgb
        };

    }



    render(){
        console.log("RENDER in PALETTE-CREATOR",this.props.rgb);
        return(
            
            <div class="mini-palette-wrapper">
                <div class="center palette-creator">
                    <ColorBlock color={this.state.rgbArray[0]} size="40" ></ColorBlock>
                    <ColorBlock color={this.state.rgbArray[1]} size="40" ></ColorBlock>
                    <ColorBlock color={this.state.rgbArray[2]} size="40" ></ColorBlock>
                    <ColorBlock color={this.state.rgbArray[3]} size="40" ></ColorBlock>
                    <ColorBlock color={this.state.rgbArray[4]} size="40" ></ColorBlock>                    
                </div>
                <p>[<em>placeholder for Palette Name</em>]</p> 
            </div>
               
        );
    }
}
