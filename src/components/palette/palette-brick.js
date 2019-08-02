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
           
            rgb:props.rgb,
            size:props.size,
            isHidden:"true",
            eventTarget:null,
            mouseClient:{x:null,y:null},
            isLocked:'false',
            id:props.id
            
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.lockEvent = this.lockEvent.bind(this);
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
            document.addEventListener('click',this.handleOutsideClick, false);
        }else{
            document.removeEventListener('click',this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            isHidden: !prevState.isHidden,  //toggle for hiding this color picker

        }));

    }

    handleOutsideClick(e){  
        if(this.node.isSameNode(e.target)||this.node.contains(e.target)){
            return;
        }
        this.handleClick();
    }


    onChange(color,event){
        let {r,g,b} = color.rgb;
        this.props.onColorChange([r,g,b]);
        
    }

    lockEvent(lockedBool){

        this.setState({
            isLocked: lockedBool  //toggle for hiding 
        });
        this.props.onLock(lockedBool);
    }


    render(){
        let tempRGB={
            r:this.props.rgb[0],
            g:this.props.rgb[1],
            b:this.props.rgb[2]
        }


        return (
            <span class='fit palette-brick' >
            <ColorBlock color={this.props.rgb} size={this.state.size} onClick={(e) => this.handleClick(e)}></ColorBlock>
            {!this.state.isHidden &&  
            <div class='pallete-brick-sketchPicker' ref={node => { this.node = node; }}>
            <SketchPicker color={tempRGB} onChange={this.onChange} />   
            </div>
            }
        
            <ColorBlockTools id={this.state.id} colorCode={this.rgbToHex(this.props.rgb)} onLock={(lockedBool)=>{this.lockEvent(lockedBool)}}></ColorBlockTools>
            </span>
        );
    }
 }
