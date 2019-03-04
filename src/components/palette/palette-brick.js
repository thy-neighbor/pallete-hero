 //palette-brick.js( Composed of color-block.js, color-block-tools.js ; Stateful)

import React from 'react'
import './palette.css'

import ColorBlock from './color-block'
import ColorBlockTools from './color-block-tools'

import {SketchPicker} from 'react-color';

 export default class PaletteBrick extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            //rgb:[45,13,200],
            //size:'150px'
            rgb:props.rgb,
            size:props.size,
            isHidden:"true",
            eventTarget:null
        };

        // This binding is necessary to make `this` work in the callback
        this.toggleColorPicker = this.toggleColorPicker.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

    }

    rgbToHex(inputRgb){

        let hexString='#';
        let hexTemp;
        for(let i=0;i<=2;i++){

            hexTemp = inputRgb[i].toString(16);

            if (hexTemp.length % 2) {
            hexTemp = '0' + hexTemp;
            }

            hexString=`${hexString}${hexTemp}`;
        }

        return hexString;

    }


    toggleColorPicker(){//works






    }

    handleClick(){
        if(!this.state.isHidden){//is it not visible, then it will be after this function is called so addeventlistener
            document.addEventListener('click', this.handleOutsideClick , false);
        }else{
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            isHidden: !prevState.isHidden,  //toggle for hiding this color picker
        }));

    }

    handleOutsideClick(e){  //FIND a way to get the click event listener from the highest level
        
        if(this.node.isSameNode(e.target)){
            return;
        }

        this.handleClick();
    }


    render(){
        let tempRGB={
            r:this.state.rgb[0],
            g:this.state.rgb[1],
            b:this.state.rgb[2]
        }



        console.log("RGB", tempRGB);

        return (
            <span class='fit palette-brick' >
            <ColorBlock color={this.state.rgb} size={this.state.size} onClick={(e) => this.handleClick()}> </ColorBlock>

             
            <div class='pallete-brick-sketchPicker' ref={node => { this.node = node; }}>
            {!this.state.isHidden && <SketchPicker color={tempRGB}/>}   
            </div>
        
            <ColorBlockTools colorCode={this.rgbToHex(this.state.rgb)}></ColorBlockTools>
            </span>
        );
    }
 }



 /*

Convert a number to a hexadecimal string with:

hexString = yourNumber.toString(16);
if (hexString.length % 2) {
  hexString = '0' + hexString;
}

and reverse the process with:

yourNumber = parseInt(hexString, 16);
 
 */