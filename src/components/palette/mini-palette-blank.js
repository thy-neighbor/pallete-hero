//highest level with 5 color bricks
import React from 'react'
import ColorBlock from './color-block';
import './palette.css'
import '../popup-modal.css'


export class MiniPaletteBlank extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            rgb:props.rgb,  //random toggle to cause update in parent element
            title:props.title

        };
    }


    render(){

        return(   
            <div class="mini-palette-wrapper">
                <div class="center palette-creator">
                    <div>
                        <ColorBlock color={this.state.rgb[0]} size="40" ></ColorBlock>
                        <ColorBlock color={this.state.rgb[1]} size="40" ></ColorBlock>
                        <ColorBlock color={this.state.rgb[2]} size="40" ></ColorBlock>
                        <ColorBlock color={this.state.rgb[3]} size="40" ></ColorBlock>
                        <ColorBlock color={this.state.rgb[4]} size="40" ></ColorBlock>
                    </div>
                </div>
                <p>"<em>{this.state.title}</em>"</p>
            </div>    
        );
    }
}

export default (MiniPaletteBlank);
