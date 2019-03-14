//highest level with 5 color bricks
import React from 'react'
import { SketchPicker } from 'react-color'
import './palette.css'

import PaletteBrick from './palette-brick'

export default class Palette extends React.Component{
    constructor(props){
        super(props)
        //you can use the id's to swap them(feature)
        this.state = {

            rgb:[
            [66,100,66],
            [45,13,200],
            [190,100,50],
            [30,16,30],
            [143,0,150]
            ]

        }
    }
 
    onColorChange(itemId,itemColor){


        this.setState(state => {
            const rgb = state.rgb.map((item, i) => {
              if (i === itemId) {
                return itemColor;
              } else {
                return item;
              }
            });
            
            console.log("HEEEZZZ", rgb);

            return {
              rgb,
            };
          });

    }


 //YOU HAVE TO PASSS THE NEW COLOR FROM SKETCH PICKER TO THIS PARENT AND CHANGE THE STATE search up passing data from child to parent

    render(){

        return(
            
            <div class="palette-creator-wrapper">
                <div class="center palette-creator">
                    <PaletteBrick rgb={this.state.rgb[0]} size="171" onColorChange={(color)=>{this.onColorChange(0,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.state.rgb[1]} size="171" onColorChange={(color)=>{this.onColorChange(1,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.state.rgb[2]} size="171" onColorChange={(color)=>{this.onColorChange(2,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.state.rgb[3]} size="171" onColorChange={(color)=>{this.onColorChange(3,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.state.rgb[4]} size="171" onColorChange={(color)=>{this.onColorChange(4,color)}}></PaletteBrick>
                </div>
            </div>
                
        );
    }
}