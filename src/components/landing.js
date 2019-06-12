//

import React from "react";
import './landing.css';
import PaletteCreator from './palette/palette-creator';


export default function Landing(props){
    return(
        <section class="landing">

            <div id="landing-header" class='row' >
                <div class="col-12">
                    <div class="col-inner">
                        <header role="banner">  
                            <h1>Palette Hero</h1>
                            <h2>Save Your Color <br/>... literally</h2>
                        </header>
                    </div>
                </div>
            </div>

            <div id="landing-description" class="row">
                <div class="col-12">
                    <div class="col-inner">
                        <header>
                            <h3>Create and Save a Palette</h3>
                        </header>
                        
                        <p>Palette Hero uses the colormind.io api to help you make your own
                            palette aided by an AI, then name and save your creation
                        </p>
                        <br/>
                        <PaletteCreator></PaletteCreator>
                        
                    </div>
                </div>
            </div>

            <div id="landing-buttons" class="row">
                <div class="col-12">
                    <div class="col-inner">
                        <header>
                            <h3>Start Making Palettes!</h3>
                        </header>
                        <a class="btn landing-login" href="/login">Login</a>
                        <a class="btn signup" href="/signup">Signup</a>
                    </div>
                </div>    
            </div>

        </section>
    );
}