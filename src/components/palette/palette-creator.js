//highest level with 5 color bricks
import React from 'react'
//import { SketchPicker } from 'react-color'
import './palette.css'

import PaletteBrick from './palette-brick'
import { connect } from 'react-redux';
import { setPalette, generatePalette, lockPaletteBrick } from '../../actions/actions';

export class Palette extends React.Component{

    onColorChange(itemId,itemColor){
        //console.log("Palette-Creator.js inside of on Color Change");
        //console.log("itemId",itemId,itemColor);
        this.props.dispatch(setPalette(itemId,itemColor));
    }

    onClickGeneratePalette(){
        //console.log("Inside onClickGeneratePalette");
        this.props.dispatch(generatePalette());
    }

    lockEvent(index,lockedBool){
        //console.log("PALETTE CREATOR #",index," isLocked is",lockedBool);
        //FIX the true when false dadaad, and add this to the reducer so we know what to lock
        this.props.dispatch(lockPaletteBrick(index,lockedBool));
    }



    render(){
        
        return(
            
            <div class="palette-creator-wrapper">
                <div class="center palette-creator">
                    <PaletteBrick rgb={this.props.rgb[0]} size="171" onColorChange={(color)=>{this.onColorChange(0,color)}} onLock={(lockedBool)=>{this.lockEvent(0,lockedBool)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[1]} size="171" onColorChange={(color)=>{this.onColorChange(1,color)}} onLock={(lockedBool)=>{this.lockEvent(1,lockedBool)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[2]} size="171" onColorChange={(color)=>{this.onColorChange(2,color)}} onLock={(lockedBool)=>{this.lockEvent(2,lockedBool)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[3]} size="171" onColorChange={(color)=>{this.onColorChange(3,color)}} onLock={(lockedBool)=>{this.lockEvent(3,lockedBool)}}></PaletteBrick>
                    <PaletteBrick rgb={this.props.rgb[4]} size="171" onColorChange={(color)=>{this.onColorChange(4,color)}} onLock={(lockedBool)=>{this.lockEvent(4,lockedBool)}}></PaletteBrick>
                </div>
                <br/>
                <button class="btn btn-left generate" onClick= {()=>{this.onClickGeneratePalette()}}>Generate</button>
            </div>
                
        );
    }
}

const mapStateToProps = state => { return({
  rgb:state.paletteCreator.palette
});}

export default connect(mapStateToProps)(Palette);