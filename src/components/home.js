//pallete home which has palette maker, view my palettes button and community updates

import React from 'react'
import PaletteCreator from './palette/palette-creator'

export default function Home(props){
    return(

        <section class="home">

            <div id="home-header" class='row' >
                <div class="col-12">
                    <div class="col-inner">
                        <header role="banner">  
                            <h1>Palette Maker</h1>
                        </header>
                        <PaletteCreator></PaletteCreator>
                        <button class="btn btn-left generate">Generate</button>
                        <br/>
                        <input type='name' placeholder="Enter Name Here"></input>
                        <button>Save</button>
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