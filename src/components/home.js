//pallete home which has palette maker, view my palettes button and community updates

import React from 'react'
import PaletteCreator from './palette/palette-creator'
import {postPaletteData} from '../actions/protected-data';
import {connect} from 'react-redux';

//Make sure save doesnt render if the user isnt loggedIn(or 2 different Home components)
export class Home extends React.Component{
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
                            
                            <br/>
                            <input type='text' ref={input => this.textInput = input} placeholder="Enter Name Here"></input>
                            <button onClick={()=>this.savePalette()}>Save</button>
                        </div>
                    </div>
                </div>

                <div id="home-buttons" class="row">
                    <div class="col-12">
                        <div class="col-inner">
                            <header>
                                <h3>View My Palettes</h3>
                            </header>
                            <button class="btn">Click Here</button>
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
                                <p>[<em>placeholder for Palette maker</em>]</p>
                                <p>[<em>placeholder for Palette maker</em>]</p>
                                <p>[<em>placeholder for Palette maker</em>]</p>
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
        rgb:state.paletteCreator.palette        
    };

};

export default connect(mapStateToProps)(Home);