//highest level with 5 color bricks
import React from 'react'
//import { SketchPicker } from 'react-color'
import './palette.css'

import PaletteBrick from './palette-brick'
import { connect } from 'react-redux';
import { setPalette, generatePalette } from '../../actions/actions';

export class Palette extends React.Component{

    onColorChange(itemId,itemColor){
        console.log("Palette-Creator.js inside of on Color Change");
        console.log("itemId",itemId,itemColor);
        this.props.dispatch(setPalette(itemId,itemColor));
    }

    onClickGeneratePalette(){
        console.log("Inside onClickGeneratePalette");
        this.props.dispatch(generatePalette());
    }


    render(){
        console.log("RENDER in PALETTE-CREATOR",this.props.rgb);
        return(
            
            <div class="palette-creator-wrapper">
                <div class="center palette-creator">
                    <PaletteBrick rgb={this.props.rgb[0]} size="171" onColorChange={(color)=>{this.onColorChange(0,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[1]} size="171" onColorChange={(color)=>{this.onColorChange(1,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[2]} size="171" onColorChange={(color)=>{this.onColorChange(2,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[3]} size="171" onColorChange={(color)=>{this.onColorChange(3,color)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[4]} size="171" onColorChange={(color)=>{this.onColorChange(4,color)}}></PaletteBrick>
                </div>
                <br/>
                <button class="btn btn-left generate" onClick= {()=>{this.onClickGeneratePalette()}}>Generate</button>
            </div>
                
        );
    }
}
//SEE IF YOU CAN CONSOLE LOG THIS
const mapStateToProps = state => {console.log("STATE>PALETTE in PALETTE-CREATOR",state.palette); return({
  rgb:state.palette
});}

export default connect(mapStateToProps)(Palette);