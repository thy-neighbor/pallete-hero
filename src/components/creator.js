//pallete home which has palette maker, view my palettes button and community updates

import React from 'react'
import PaletteCreator from './palette/palette-creator'
import {postPaletteData} from '../actions/protected-data';
import {MiniPaletteBlank} from './palette/mini-palette-blank'
import {fetchCommunityData} from '../actions/protected-data';
import {connect} from 'react-redux';
import './creator.css'
import requiresLogin from './requires-login';


export class Creator extends React.Component{

    componentDidMount() {
        this.props.dispatch(fetchCommunityData());
    }

    savePalette(){
        const text = this.textInput.value.trim();
        this.props.dispatch(postPaletteData(text,this.props.rgb));

    }

    render(){
        return(

            <section class="home">

                <div id="home-header" class='row' >
                    <div class="col-12">
                        <div class="col-inner">
                            <header role="banner">  
                                <h1>Palette Maker</h1>
                            </header>
                            <PaletteCreator></PaletteCreator>
                            
                            {this.props.loggedIn &&<span>
                            <input class="inp save" type='text' ref={input => this.textInput = input} placeholder="Enter Name Here"></input>
                            <br/>
                            <a class="btn save" href="/creator" onClick={()=>this.savePalette()}>Save</a>
                            </span>}
                        </div>
                    </div>
                </div>

                <div id="home-buttons" class="row">
                    <div class="col-12">
                        <div class="col-inner">
                            <header>
                                <h3>View My Palettes</h3>
                            </header>
                            <a class="btn pal" href="/dashboard">Click Here</a>
                        </div>
                    </div>
                </div>

                <div id="home-community-palettes" class="row">
                    <div class="col-12">
                        <div class="col-inner">
                            <header>
                                <h3>Recent Community Palettes</h3>
                            </header>
                            
                            <div id="community-palettes">
                                <div class="col-4">
                                    {this.props.comm !=='' && <MiniPaletteBlank rgb={this.props.comm[0].rgb} title={this.props.comm[0].name}/>}
                                </div>
                                <div class="col-4">
                                    {this.props.comm !=='' && <MiniPaletteBlank rgb={this.props.comm[1].rgb} title={this.props.comm[1].name}/>}
                                </div>
                                <div class="col-4"> 
                                    {this.props.comm !=='' && <MiniPaletteBlank rgb={this.props.comm[2].rgb} title={this.props.comm[2].name}/>}
                                </div> 
                            </div>
                        </div>
                    </div>    
                </div>

            </section>
        );
    }    
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        rgb:state.paletteCreator.palette,
        comm: state.protectedData.comm     
    };

};

export default requiresLogin()(connect(mapStateToProps)(Creator));