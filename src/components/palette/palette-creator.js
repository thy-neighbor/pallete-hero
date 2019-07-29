//highest level with 5 color bricks
import React from 'react'
//import { SketchPicker } from 'react-color'
import './palette.css'

import PaletteBrick from './palette-brick'
import { connect } from 'react-redux';
import { setPalette, generatePalette, lockPaletteBrick, apiPostPalette, setLoading } from '../../actions/actions';

export class Palette extends React.Component{

    componentDidMount(){
        //initial load of the palette creator
        //if(!this.props.myInput.includes("N"))
        if(window.location.pathname!=="/dashboard")
        {
            var data = {
                model : "default",
                input : ["N","N","N","N","N"]
            }

            this.props.dispatch(apiPostPalette(data));            
        }

    }

    onColorChange(itemId,itemColor){
        //console.log("Palette-Creator.js inside of on Color Change");
        //console.log("itemId",itemId,itemColor);
        this.props.dispatch(setPalette(itemId,itemColor));
    }

    onClickGeneratePalette(myInput){
        //console.log("Inside onClickGeneratePalette");
        let bool=true;
        console.log("My Input in Palette Creator is: ", myInput );
        if(!myInput.includes("N")){
            return;     //no need to call api or change loading state if everything is locked
        }
        var data = {
            model : "default",
            input : myInput
        }

        this.props.dispatch(setLoading(bool));
        this.props.dispatch(apiPostPalette(data));
        //this.props.dispatch(generatePalette());
        
    }

    lockEvent(index,lockedBool){
        //console.log("PALETTE CREATOR #",index," isLocked is",lockedBool);
        //FIX the true when false dadaad, and add this to the reducer so we know what to lock
        this.props.dispatch(lockPaletteBrick(index,lockedBool));
    }

    

    render(){
        
        return(
            
            <div class="palette-creator-wrapper">
                {this.props.loading && this.props.rgb===undefined && <div>LOADING</div>}
                {!this.props.loading && this.props.rgb!==undefined && <div class="palette-container">
                    <div class="center palette-creator">
                        <PaletteBrick id={0} rgb={this.props.rgb[0]} size="171" onColorChange={(color)=>{this.onColorChange(0,color)}} onLock={(lockedBool)=>{this.lockEvent(0,lockedBool)}}></PaletteBrick>
                        <PaletteBrick id={1} rgb={this.props.rgb[1]} size="171" onColorChange={(color)=>{this.onColorChange(1,color)}} onLock={(lockedBool)=>{this.lockEvent(1,lockedBool)}}></PaletteBrick>
                        <PaletteBrick id={2} rgb={this.props.rgb[2]} size="171" onColorChange={(color)=>{this.onColorChange(2,color)}} onLock={(lockedBool)=>{this.lockEvent(2,lockedBool)}}></PaletteBrick>
                        <PaletteBrick id={3} rgb={this.props.rgb[3]} size="171" onColorChange={(color)=>{this.onColorChange(3,color)}} onLock={(lockedBool)=>{this.lockEvent(3,lockedBool)}}></PaletteBrick>
                        <PaletteBrick id={4} rgb={this.props.rgb[4]} size="171" onColorChange={(color)=>{this.onColorChange(4,color)}} onLock={(lockedBool)=>{this.lockEvent(4,lockedBool)}}></PaletteBrick>
                    </div>
                    <br/>
                    <a class="btn btn-left generate" onClick= {()=>{this.onClickGeneratePalette(this.props.myInput)}}>Generate</a>
                </div>}
            </div>
                
        );
    }
}

const mapStateToProps = state => { return({
  rgb:state.paletteCreator.palette,
  loading:state.paletteCreator.loading,
  myInput:state.paletteCreator.myInput

});}

export default connect(mapStateToProps)(Palette);