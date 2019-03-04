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
            b1:{id:1,rgb:[66,100,66]},
            b2:{id:2,rgb:[45,13,200]},
            b3:{id:3,rgb:[190,100,50]},
            b4:{id:4,rgb:[30,16,30]},
            b5:{id:5,rgb:[143,0,150]}

        }
    }
/* 
    handleChangeComplete(itemId,itemColor){

        this.setState({});

    }
 */


    render(){

        return(
            
            <div class="palette-creator-wrapper">
                <div class="center palette-creator">
                    <PaletteBrick rgb={this.state.b1.rgb} size="171"></PaletteBrick>
                    <PaletteBrick rgb={this.state.b2.rgb} size="171"></PaletteBrick>
                    <PaletteBrick rgb={this.state.b3.rgb} size="171"></PaletteBrick>
                    <PaletteBrick rgb={this.state.b4.rgb} size="171"></PaletteBrick>
                    <PaletteBrick rgb={this.state.b5.rgb} size="171"></PaletteBrick>
                </div>
            </div>
                
        );
    }
}