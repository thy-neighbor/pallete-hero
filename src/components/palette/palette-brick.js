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
            eventTarget:null,
            mouseClient:{x:null,y:null}
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.onChange = this.onChange.bind(this);
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

    handleClick(e){ //TOGGLE COLOR PICKER
        
        if(this.state.isHidden){
            document.addEventListener('click', this.handleOutsideClick , false);
        }else{
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            isHidden: !prevState.isHidden,  //toggle for hiding this color picker
    //        mouseClient:{x:e.clientX,y:e.clientY}
        }));

    }

    handleOutsideClick(e){  //FIND a way to get the click event listener from the highest level
        
        if(this.node.isSameNode(e.target)){
            return;
        }

        this.handleClick();
    }

    onChange(color,event){
        let {r,g,b} = color.rgb;
        console.log("OnChange in Pallete Brick", [r, g, b]); //goOD UP TO HERE

        this.setState({
            rgb:[r,g,b]
        });

    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
    }


    render(){
        let tempRGB={
            r:this.state.rgb[0],
            g:this.state.rgb[1],
            b:this.state.rgb[2]
        }
/*
        let mousePos={
            left:`${this.state.mouseClient.x} px`, 
            top:`${this.state.mouseClient.y} px`
        }
*/


        console.log("RGB", tempRGB);

        return (
            <span class='fit palette-brick' >
            <ColorBlock color={this.state.rgb} size={this.state.size} onClick={(e) => this.handleClick(e)}> </ColorBlock>

             
            <div class='pallete-brick-sketchPicker' ref={node => { this.node = node; }} >
            {!this.state.isHidden && <SketchPicker color={tempRGB} onChange={this.onChange} />}   
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